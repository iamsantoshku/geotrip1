// import Booking from "../models/bookingSchema.js";
import HotelBooking from "../models/bookingSchema.js"
import User from "../models/userSchema.js";
import FlightBooking from "../models/flightbookschema.js"
import Flight from "../models/flightSchema.js";
import Hotel from "../models/HotelSchema.js";
// import Car from "../models/carSchema.js";
// import Rental from "../models/rentalSchema.js";
import Ticket from "../models/ticketShema.js";
import Stripe from "stripe";
import Guest from "../models/guest.js";
import mongoose from "mongoose";
import CarBooking from "../models/carbookingSchema.js";

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

      const booking = new FlightBooking({
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

    // user.bookings.push(ticket._id);
    user.flightBookings.push(ticket._id)
    flight.bookedSeats.push(...selectedSeats);

    await Promise.all([ticket.save(), user.save(), flight.save()]);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}payment-complete`,
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


export const createBooking = async (req, res) => {
  const { room, hotelName, transactionDetails, guests, paymentMethodId } = req.body;

  try {
    // Validate request
    if (!room || !hotelName || !transactionDetails || !guests || !paymentMethodId) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    // Create a Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: transactionDetails.totalPrice * 100, // Amount in cents
      currency: "inr",
      payment_method: paymentMethodId,
      confirm: true,
      payment_method_types: ['card'],
      return_url: 'http://localhost:5173/payment-complete',
    });

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ success: false, message: "Payment failed" });
    }

    

 const user = await User.findById(req.userId);
// if (!user) {
//   return res.status(404).json({ message: "User not found" });
// {
    const booking = new HotelBooking({
      room,
      hotelName,
      transactionDetails,
      guests,
      stripePaymentId: paymentIntent.id,
      paymentStatus: "paid",
      user:user._id
      // userId: user, // Assuming user ID is passed via middleware
      // userId: req.userId, 
    });

    await booking.save();
    user.hotelBookings.push(booking._id);
    await user.save();

    res.status(200).json({ success: true, message: "Booking successful", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Fetch all bookings for a user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await HotelBooking.find({ userId: req.user.id });
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// export const createCarBooking = async (req, res) => {
//   const { carId, carName, price, pickupAddress, dropAddress } = req.body;

//   try {
//     // Save booking details in the database
//     const user = await User.findById(req.userId);
//     const newBooking = new CarBooking({
//       user: user._id,
//       carId,
//       carName,
//       price,
//       pickupAddress,
//       dropAddress,
//     });
//     user.carBookings.push(newBooking._id)
//     await newBooking.save();
    

//     // Create Stripe payment session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: carName,
//             },
//             unit_amount: price * 100, // Convert to cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_SITE_URL}/success`,
//       cancel_url: `${process.env.CLIENT_SITE_URL}/cancel`,
//     });

//     res.status(200).json({ sessionUrl: session.url });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating booking.' });
//   }
// };



export const createCarBooking = async (req, res) => {
  const { carId, carName, price, pickupAddress, dropAddress } = req.body;

  try {
    // Fetch the user making the booking
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Create a new car booking
    const newBooking = new CarBooking({
      user: user._id,
      carId,
      carName,
      price,
      pickupAddress,
      dropAddress,
    });

    // Save the booking
    await newBooking.save();

    // Add the booking reference to the user's `carBookings` array
    user.carBookings.push(newBooking._id);
    await user.save();

    // Create Stripe payment session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: carName,
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}cancel`,
    });

    // Respond with the Stripe session URL
    res.status(200).json({ sessionUrl: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating booking." });
  }
};


// Hotel Booking Controller
// export const getHotelCheckoutSession = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId);
//     const hotel = await Hotel.findById(req.params.hotelId);

//     if (!hotel) {
//       return res.status(404).json({ success: false, message: "Hotel not found" });
//     }

//     const { checkInDate, checkOutDate, roomType, guests } = req.body;

//     const booking = new Booking({
//       type: "Hotel",
//       user: user._id,
//       details: {
//         hotel: {
//           hotelId: hotel._id,
//           checkInDate,
//           checkOutDate,
//           roomType,
//           guests,
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
//       client_reference_id: req.params.hotelId,
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             unit_amount: hotel.pricePerNight * 100 * guests,
//             product_data: {
//               name: `${hotel.name} - ${hotel.location}`,
//               description: `Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Room: ${roomType}`,
//               images: [hotel.image],
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



// export const getHotelCheckoutSession = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId);
//     const hotel = await Hotel.findById(req.params.hotelId);

//     if (!hotel) {
//       return res.status(404).json({ success: false, message: "Hotel not found" });
//     }

//     const { checkInDate, checkOutDate, roomType, guests, billingName, email, phone } = req.body;

//     const booking = new Booking({
//       type: "Hotel",
//       user: user._id,
//       details: {
//         hotel: {
//           hotelId: hotel._id,
//           checkInDate,
//           checkOutDate,
//           roomType,
//           guests,
//         },
//       },
//       contactInfo: {
//         billingName,
//         phoneNumber: phone,
//         email,
//       },
//     });

//     const savedBooking = await booking.save();
//     user.bookings.push(savedBooking._id);
//     await user.save();

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       success_url: `${process.env.CLIENT_SITE_URL}/checkout-success?bookingId=${savedBooking._id}`,
//       cancel_url: `${process.env.CLIENT_SITE_URL}/cancel`,
//       customer_email: email,
//       client_reference_id: savedBooking._id,
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             unit_amount: hotel.pricePerNight * 100 * guests,
//             product_data: {
//               name: `${hotel.name} - ${hotel.location}`,
//               description: `Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Room: ${roomType}`,
//               images: [hotel.image],
//             },
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     res.status(200).json({
//       success: true,
//       message: "Stripe checkout session created",
//       sessionId: session.id,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };



// export const processPayment = async (req, res) => {
//   try {
//     const { paymentMethodId, guests, hotelName, room, transactionDetails } = req.body;

//     // Compute missing fields
//     const amount = transactionDetails?.discountedPrice || transactionDetails?.totalPrice;
//     const currency = "usd"; // Default currency if not provided

//     if (!paymentMethodId || !amount || !currency || !guests || guests.length === 0 || !room) {
//       console.error("Missing fields: ", {
//         paymentMethodId,
//         amount,
//         currency,
//         guests,
//         room,
//       });
//       return res.status(400).json({ success: false, message: "Missing fields" });
//     }

//     if (!guests || guests.some((guest) => !guest.firstName || !guest.lastName)) {
//       return res.status(400).json({ success: false, message: "Invalid guest details" });
//     }

//     // Create a payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(amount * 100), // Convert to smallest currency unit
//       currency,
//       payment_method: paymentMethodId,
//       confirm: true,
//       return_url: 'http://localhost:5173/payment-complete'
//     });

//     // Save booking details
//     const newBooking = new Booking({
//       hotelName,
//       room,
//       guests,
//       paymentId: paymentIntent.id,
//       totalAmount: amount,
//       currency,
//     });

//     await newBooking.save();

//     // Save guest details
//     const guestPromises = guests.map((guest) =>
//       Guest.create({ ...guest, bookingId: newBooking._id })
//     );

//     await Promise.all(guestPromises);

//     res.status(200).json({
//       success: true,
//       message: "Payment and booking successful",
//       bookingId: newBooking._id,
//     });
//   } catch (error) {
//     console.error("Payment processing error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Payment failed",
//       error: error.message,
//     });
//   }
// };


// export const processPayment = async (req, res) => {
//   try {
//     const { room, hotelName, transactionDetails, guests, paymentMethodId } = req.body;
  
//     if (!room || !hotelName || !transactionDetails || !guests || !paymentMethodId) {
//       return res.status(400).json({ success: false, message: "Missing required fields" });
//     }

//     // Calculate total amount in cents
//     const amount = transactionDetails.totalPrice * 100; // Assuming the price is in ₹

//     // Create a payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "inr",
//       payment_method: paymentMethodId,
//       confirm: true,
//       return_url: 'http://localhost:5173/payment-complete'
//     });

//     if (paymentIntent.status !== "succeeded") {
//       return res.status(400).json({ success: false, message: "Payment failed" });
//     }

//     // Create a new booking
//     // const user = await User.findById(req.userId);
//     const newBooking = new Booking({
//       type: "Hotel",
      
//       // user: req.user._id, // Assuming user is authenticated and user ID is available
//       user:User.findById(req.userId),
//       details: {
//         hotel: {
//           hotelId: transactionDetails.hotelId,
//           checkInDate: transactionDetails.checkInDate,
//           checkOutDate: transactionDetails.checkOutDate,
//           guests: guests.length,
//           roomType: room.type,
//         },
//       },
//       contactInfo: {
//         state: transactionDetails.state,
//         phoneNumber: transactionDetails.phoneNumber,
//         email: transactionDetails.email,
//       },
//       documents: {
//         passportSizePhoto: transactionDetails.passportSizePhoto, // Add file handling as necessary
//       },
//     });

//     const savedBooking = await newBooking.save();

//     // Save guest details
//     const guestPromises = guests.map((guest) => {
//       return new Guest({
//         ...guest,
//         bookingId: savedBooking._id,
//       }).save();
//     });

//     await Promise.all(guestPromises);

//     res.status(200).json({
//       success: true,
//       message: "Payment and booking successful",
//       bookingId: savedBooking._id,
//     });
//   } catch (err) {
//     console.error("Error in processing payment:", err);

//     // Handle specific Stripe errors
//     if (err.type === "StripeCardError") {
//       return res.status(400).json({ success: false, message: err.message });
//     }

//     res.status(500).json({
//       success: false,
//       message: "An error occurred while processing the payment and booking",
//     });
//   }
// };
// import { ObjectId } from "mongodb";

// export const processPayment = async (req, res) => {
//   try {
//     const { room, hotelName, transactionDetails, guests, paymentMethodId } = req.body;

//     // Validate required fields
//     if (!room || !hotelName || !transactionDetails || !guests || !paymentMethodId) {
//       return res.status(400).json({ success: false, message: "Missing required fields" });
//     }

//     // Find the user by ID
//     // const user = await User.findById("675a6c49f29e3ea25d981af9");
//     // console.log(user);
//     // const user = await User.findById(mongoose.Types.ObjectId("675a6c49f29e3ea25d981af9"));
//     const user = await User.findById(new ObjectId("675b54bc816ecb3dac3f908e"));
//     console.log(user);
    
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Calculate total amount in cents
//     const amount = transactionDetails.totalPrice * 100; // Assuming the price is in ₹

//     // Create a payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "inr",
//       payment_method: paymentMethodId,
//       confirm: true,
//       return_url: 'http://localhost:5173/payment-complete'
//     });

//     if (paymentIntent.status !== "succeeded") {
//       return res.status(400).json({ success: false, message: "Payment failed" });
//     }

//     // Create a new booking
//     const newBooking = new Booking({
//       type: "Hotel",
//       user: user._id, // Use the user's ObjectId
//       details: {
//         hotel: {
//           hotelId: transactionDetails.hotelId,
//           checkInDate: transactionDetails.checkInDate,
//           checkOutDate: transactionDetails.checkOutDate,
//           guests: guests.length,
//           roomType: room.type,
//         },
//       },
//       contactInfo: {
//         state: transactionDetails.state,
//         phoneNumber: transactionDetails.phoneNumber,
//         email: transactionDetails.email,
//       },
//       documents: {
//         passportSizePhoto: transactionDetails.passportSizePhoto, // Add file handling as necessary
//       },
//     });

//     const savedBooking = await newBooking.save();

//     // Save guest details
//     const guestPromises = guests.map((guest) => {
//       return new Guest({
//         ...guest,
//         bookingId: savedBooking._id,
//       }).save();
//     });

//     await Promise.all(guestPromises);

//     res.status(200).json({
//       success: true,
//       message: "Payment and booking successful",
//       bookingId: savedBooking._id,
//     });
//   } catch (err) {
//     console.error("Error in processing payment:", err);

//     // Handle specific Stripe errors
//     if (err.type === "StripeCardError") {
//       return res.status(400).json({ success: false, message: err.message });
//     }

//     res.status(500).json({
//       success: false,
//       message: "An error occurred while processing the payment and booking",
//     });
//   }
// };


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
