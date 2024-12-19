// Import Mongoose
// const mongoose = require('mongoose');
import mongoose from "mongoose";

// Hotel Schema
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  distance: {
    type: String,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  cancellationPolicy: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Hotel Model
export default mongoose.model('Hotel', HotelSchema);
// export default mongoose.model("flights", flightSchema);

// Hotel Controller
// const HotelController = {
//   // Add a new hotel
//   async addHotel(req, res) {
//     try {
//       const hotel = new Hotel(req.body);
//       const savedHotel = await hotel.save();
//       res.status(201).json({ success: true, data: savedHotel });
//     } catch (error) {
//       res.status(400).json({ success: false, error: error.message });
//     }
//   },

//   // Get all hotels
//   async getAllHotels(req, res) {
//     try {
//       const hotels = await Hotel.find();
//       res.status(200).json({ success: true, data: hotels });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   },

//   // Get a single hotel by ID
//   async getHotel(req, res) {
//     try {
//       const hotel = await Hotel.findById(req.params.id);
//       if (!hotel) {
//         return res.status(404).json({ success: false, message: 'Hotel not found' });
//       }
//       res.status(200).json({ success: true, data: hotel });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   },

//   // Delete a hotel by ID
//   async deleteHotel(req, res) {
//     try {
//       const hotel = await Hotel.findByIdAndDelete(req.params.id);
//       if (!hotel) {
//         return res.status(404).json({ success: false, message: 'Hotel not found' });
//       }
//       res.status(200).json({ success: true, message: 'Hotel deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   }
// };

// // Export Hotel model and controller
// module.exports = { Hotel, HotelController };
