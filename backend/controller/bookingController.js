import Booking from "../models/bookingSchema.js";
import User from "../models/userSchema.js";
import Flight from "../models/flightSchema.js";
import Hotel from "../models/HotelSchema.js";
// import Car from "../models/carSchema.js";
// import Rental from "../models/rentalSchema.js";
import Ticket from "../models/ticketShema.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to generate a UID
function generateUID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uid = "";
  for (let i = 0; i < 10; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
}

// Flight Booking Controller
export const getFlightCheckoutSession = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const flight = await Flight.findById(req.params.flightId).populate("airline");

    if (!flight) {
      return res
        .status(404)
        .json({ success: false, message: "Flight not found" });
    }

    const { bookingUsersData, selectedSeats } = req.body;
    const bookingUID = generateUID();
    let ticket = await Ticket.findOne({ uid: bookingUID });

    if (!ticket) {
      ticket = new Ticket({ uid: bookingUID, tickets: [] });
    }

    const numPassengers = Object.keys(bookingUsersData).length;

    for (let i = 1; i <= numPassengers; i++) {
      const userData = bookingUsersData[`passenger${i}`];
      const seat = selectedSeats[i - 1];

      const booking = new Booking({
        flight: flight._id,
        user: user._id,
        seat,
        fName: userData.firstName,
        lName: userData.lastName,
        dob: userData.dob,
        passportNumber: userData.passportNumber,
        state: userData.state,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        passportSizePhoto: userData.passportSizePhoto,
      });

      const savedBooking = await booking.save();
      ticket.tickets.push(savedBooking._id);
    }

    user.bookings.push(ticket._id);
    flight.bookedSeats.push(...selectedSeats);

    await Promise.all([ticket.save(), user.save(), flight.save()]);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}checkout-page`,
      cancel_url: `${process.env.CLIENT_SITE_URL}`,
      customer_email: user.email,
      client_reference_id: req.params.flightId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: flight.price * 100,
            product_data: {
              name: `${flight.airline.airlineName} - ${flight.from} to ${flight.to}`,
              description: `Departure: ${flight.departDate} ${flight.departTime}, Arrival: ${flight.arriveDate} ${flight.arriveTime}`,
              images: [flight.airline.airlineLogo],
            },
          },
          quantity: numPassengers,
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Stripe checkout session created",
      session,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Hotel Booking Controller
export const getHotelCheckoutSession = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const hotel = await Hotel.findById(req.params.hotelId);

    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }

    const { checkInDate, checkOutDate, roomType, guests } = req.body;

    const booking = new Booking({
      type: "Hotel",
      user: user._id,
      details: {
        hotel: {
          hotelId: hotel._id,
          checkInDate,
          checkOutDate,
          roomType,
          guests,
        },
      },
      contactInfo: {
        phoneNumber: user.phoneNumber,
        email: user.email,
      },
    });

    const savedBooking = await booking.save();
    user.bookings.push(savedBooking._id);
    await user.save();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}checkout-page`,
      cancel_url: `${process.env.CLIENT_SITE_URL}`,
      customer_email: user.email,
      client_reference_id: req.params.hotelId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: hotel.pricePerNight * 100 * guests,
            product_data: {
              name: `${hotel.name} - ${hotel.location}`,
              description: `Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Room: ${roomType}`,
              images: [hotel.image],
            },
          },
          quantity: 1,
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Stripe checkout session created",
      session,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Car Rental Controller
// export const getCarRentalCheckoutSession = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId);
//     const car = await Car.findById(req.params.carId);

//     if (!car) {
//       return res.status(404).json({ success: false, message: "Car not found" });
//     }

//     const { pickupDate, returnDate, driverIncluded, pickupLocation } = req.body;

//     const booking = new Booking({
//       type: "Car",
//       user: user._id,
//       details: {
//         car: {
//           carId: car._id,
//           pickupDate,
//           returnDate,
//           driverIncluded,
//           pickupLocation,
//         },
//       },
//       contactInfo: {
//         phoneNumber: user.phoneNumber,
//         email: user.email,
//       },
//     });

//     const savedBooking = await booking.save();
//     user.bookings.push(savedBooking._id);
//     await user.save();

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       success_url: `${process.env.CLIENT_SITE_URL}checkout-page`,
//       cancel_url: `${process.env.CLIENT_SITE_URL}`,
//       customer_email: user.email,
//       client_reference_id: req.params.carId,
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             unit_amount: car.pricePerDay * 100 * Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)),
//             product_data: {
//               name: `${car.brand} ${car.model} - ${car.year}`,
//               description: `Pickup: ${pickupLocation}, Driver Included: ${driverIncluded}`,
//               images: [car.image],
//             },
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     res.status(200).json({
//       success: true,
//       message: "Stripe checkout session created",
//       session,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Rental Property Booking Controller
//     export const getRentalCheckoutSession = async (req, res) => {
//       try {
//         const user = await User.findById(req.userId);
//         const rental = await Rental.findById(req.params.rentalId);
    
//         if (!rental) {
//           return res
//             .status(404)
//             .json({ success: false, message: "Rental not found" });
//         }
    
//         const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    
//         const { rentalUsersData, rentalDays } = req.body;
    
//         const bookingUID = generateUID();
    
//         let ticket = await Ticket.findOne({ uid: bookingUID });
    
//         if (!ticket) {
//           ticket = new Ticket({ uid: bookingUID, tickets: [] });
//         }
    
//         const numUsers = Object.keys(rentalUsersData).length;
    
//         for (let i = 1; i <= numUsers; i++) {
//           const userData = rentalUsersData[`user${i}`];
    
//           const rentalBooking = {
//             rental: rental._id,
//             user: user._id,
//             fName: userData.firstName,
//             lName: userData.lastName,
//             phoneNumber: userData.phoneNumber,
//             email: userData.email,
//             rentalDays: rentalDays,
//           };
    
//           ticket.tickets.push(rentalBooking);
//         }
    
//         user.bookings.push(ticket._id);
    
//         await Promise.all([ticket.save(), user.save()]);
    
//         const session = await stripe.checkout.sessions.create({
//           payment_method_types: ["card"],
//           mode: "payment",
//           success_url: `${process.env.CLIENT_SITE_URL}checkout-page`,
//           cancel_url: `${process.env.CLIENT_SITE_URL}`,
//           customer_email: user.email,
//           client_reference_id: req.params.rentalId,
//           line_items: [
//             {
//               price_data: {
//                 currency: "inr",
//                 unit_amount: rental.pricePerDay * rentalDays * 100,
//                 product_data: {
//                   name: `Rental: ${rental.carName} (${rental.carModel})`,
//                   description: `Pickup: ${rental.pickupLocation}, Drop-off: ${rental.dropoffLocation}`,
//                   images: [rental.carImage],
//                 },
//               },
//               quantity: 1,
//             },
//           ],
//         });
    
//         res.status(200).json({
//           success: true,
//           message: "Stripe checkout session created",
//           session,
//         });
//       } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ success: false, message: error.message });
//       }
//     };
    
    // Function to generate a UID
