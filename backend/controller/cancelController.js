// // Controller to get cancelled car bookings
// import CarBooking from "../models/carbookingSchema.js"
// import HotelBooking from "../models/bookingSchema.js"

// export const getCancelledCarBookings = async (req, res) => {
//     const { userId } = req.params;  // Extract userId from the route params
  
//     try {
//       // Find all cancelled car bookings for the user
//       const cancelledCarBookings = await CarBooking.find({
//         user: userId,
//         bookingStatus: 'cancelled',
//       });
  
//       if (cancelledCarBookings.length === 0) {
//         return res.status(404).json({ success: false, message: 'No cancelled car bookings found.' });
//       }
  
//       res.status(200).json({
//         success: true,
//         message: 'Cancelled car bookings fetched successfully.',
//         cancelledCarBookings,
//       });
//     } catch (error) {
//       console.error('Error in getCancelledCarBookings:', error);
//       res.status(500).json({ success: false, message: 'Error fetching cancelled car bookings.' });
//     }
//   };
  
//   // Controller to get cancelled hotel bookings
//   export const getCancelledHotelBookings = async (req, res) => {
//     const { userId } = req.params;  // Extract userId from the route params
  
//     try {
//       // Find all cancelled hotel bookings for the user
//       const cancelledHotelBookings = await HotelBooking.find({
//         user: userId,
//         bookingStatus: 'cancelled',
//       });
  
//       if (cancelledHotelBookings.length === 0) {
//         return res.status(404).json({ success: false, message: 'No cancelled hotel bookings found.' });
//       }
  
//       res.status(200).json({
//         success: true,
//         message: 'Cancelled hotel bookings fetched successfully.',
//         cancelledHotelBookings,
//       });
//     } catch (error) {
//       console.error('Error in getCancelledHotelBookings:', error);
//       res.status(500).json({ success: false, message: 'Error fetching cancelled hotel bookings.' });
//     }
//   };
  




import CarBooking from "../models/carbookingSchema.js";
import HotelBooking from "../models/bookingSchema.js";

// Controller to get cancelled car bookings
export const getCancelledCarBookings = async (req, res) => {
  const { userId } = req.params;

  try {
    const cancelledCarBookings = await CarBooking.find({
      user: userId,
      bookingStatus: "cancelled",
    });

    if (!cancelledCarBookings || cancelledCarBookings.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No cancelled car bookings found." });
    }

    res.status(200).json({
      success: true,
      message: "Cancelled car bookings fetched successfully.",
      cancelledCarBookings,
    });
  } catch (error) {
    console.error("Error in getCancelledCarBookings:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching cancelled car bookings." });
  }
};

// Controller to get cancelled hotel bookings
export const getCancelledHotelBookings = async (req, res) => {
  const { userId } = req.params;

  try {
    const cancelledHotelBookings = await HotelBooking.find({
      user: userId,
      bookingStatus: "cancelled",
    });

    if (!cancelledHotelBookings || cancelledHotelBookings.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No cancelled hotel bookings found." });
    }

    res.status(200).json({
      success: true,
      message: "Cancelled hotel bookings fetched successfully.",
      cancelledHotelBookings,
    });
  } catch (error) {
    console.error("Error in getCancelledHotelBookings:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching cancelled hotel bookings." });
  }
};
