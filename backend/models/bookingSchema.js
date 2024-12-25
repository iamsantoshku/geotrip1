// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema({
//   type: {
//     type: String,
//     enum: ["Flight", "Hotel", "Car", "Rental"],
//     required: true,
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   details: {
//     flight: {
//       flightId: { type: Schema.Types.ObjectId, ref: "Flight" },
//       seat: { type: String },
//       fName: { type: String },
//       lName: { type: String },
//       dob: { type: String },     
//       state : {type:String},
//       passportNumber: { type: String },
//     },
//     hotel: {
//       hotelId: { type: Schema.Types.ObjectId, ref: "Hotel" },
//       checkInDate: { type: String },
//       checkOutDate: { type: String },
//       guests: { type: Number },
//       roomType: { type: String },
//     },
//     car: {
//       carId: { type: Schema.Types.ObjectId, ref: "Car" },
//       pickupDate: { type: String },
//       returnDate: { type: String },
//       driverIncluded: { type: Boolean },
//       pickupLocation: { type: String },
//     },
//     rental: {
//       rentalId: { type: Schema.Types.ObjectId, ref: "Rental" },
//       rentalDate: { type: String },
//       duration: { type: String },
//       pickupLocation: { type: String },
//     },
//   },
//   contactInfo: {
//     state: { type: String },
//     phoneNumber: { type: String, required: true },
//     email: { type: String, required: true },
//   },
//   documents: {
//     passportSizePhoto: { type: String },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model("Booking", bookingSchema);



// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema({
//   type: {
//     type: String,
//     enum: ["Flight", "Hotel", "Car", "Rental"],
//     required: [true, "Booking type is required."],
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "User ID is required."],
//   },
//   details: {
//     flight: {
//       flightId: { type: Schema.Types.ObjectId, ref: "Flight" },
//       seat: { type: String },
//       fName: { type: String },
//       lName: { type: String },
//       dob: { type: String },
//       state: { type: String },
//       passportNumber: { type: String },
//     },
//     hotel: {
//       hotelId: { type: Schema.Types.ObjectId, ref: "Hotel" },
//       checkInDate: { type: String },
//       checkOutDate: { type: String },
//       guests: { type: Number, min: 1 },
//       roomType: { type: String },
//     },
//     car: {
//       carId: { type: Schema.Types.ObjectId, ref: "Car" },
//       pickupDate: { type: String },
//       returnDate: { type: String },
//       driverIncluded: { type: Boolean },
//       pickupLocation: { type: String },
//     },
//     rental: {
//       rentalId: { type: Schema.Types.ObjectId, ref: "Rental" },
//       rentalDate: { type: String },
//       duration: { type: String },
//       pickupLocation: { type: String },
//     },
//   },
//   contactInfo: {
//     state: { type: String, required: [true, "State is required."] },
//     phoneNumber: {
//       type: String,
//       required: [true, "Phone number is required."],
//       validate: {
//         validator: function (v) {
//           return /\+?\d{7,15}/.test(v); // Simple phone number validation
//         },
//         message: "Invalid phone number format.",
//       },
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required."],
//       validate: {
//         validator: function (v) {
//           return /\S+@\S+\.\S+/.test(v); // Simple email validation
//         },
//         message: "Invalid email format.",
//       },
//     },
//   },
//   documents: {
//     passportSizePhoto: { type: String },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Add a pre-save hook to update `updatedAt` automatically
// bookingSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// export default mongoose.model("Booking", bookingSchema);




// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema({
//   type: {
//     type: String,
//     enum: ["Flight", "Hotel", "Car", "Rental"],
//     required: [true, "Booking type is required."],
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "User ID is required."],
//   },
//   details: {
//     flight: {
//       flightId: { type: Schema.Types.ObjectId, ref: "Flight" },
//       seat: { type: String },
//       fName: { type: String },
//       lName: { type: String },
//       dob: { type: String },
//       state: { type: String },
//       passportNumber: { type: String },
//     },
//     hotel: {
//       hotelId: { type: Schema.Types.ObjectId, ref: "Hotel" },
//       checkInDate: { type: String },
//       checkOutDate: { type: String },
//       guests: { type: Number, min: 1 },
//       roomType: { type: String },
//     },
//     car: {
//       carId: { type: Schema.Types.ObjectId, ref: "Car" },
//       pickupDate: { type: String },
//       returnDate: { type: String },
//       driverIncluded: { type: Boolean },
//       pickupLocation: { type: String },
//     },
//     rental: {
//       rentalId: { type: Schema.Types.ObjectId, ref: "Rental" },
//       rentalDate: { type: String },
//       duration: { type: String },
//       pickupLocation: { type: String },
//     },
//   },
//   contactInfo: {
//     state: {
//       type: String,
//       required: [ "State is required."],
//     },
//     phoneNumber: {
//       type: String,
//       required: ["Phone number is required."],
//       validate: {
//         validator: function (v) {
//           return /\+?\d{7,15}/.test(v); // Simple phone number validation
//         },
//         message: "Invalid phone number format.",
//       },
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required."],
//       validate: {
//         validator: function (v) {
//           return /\S+@\S+\.\S+/.test(v); // Simple email validation
//         },
//         message: "Invalid email format.",
//       },
//     },
//   },
//   documents: {
//     passportSizePhoto: { type: String },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Add a pre-save hook to update `updatedAt` automatically
// bookingSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// export default mongoose.model("Booking", bookingSchema);




// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const bookingSchema = new Schema(
//   {
//     type: {
//       type: String,
//       enum: ["Flight", "Hotel", "Car", "Rental"],
//       required: [true, "Booking type is required."],
//     },
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: [true, "User ID is required."],
//     },
//     details: {
//       flight: {
//         flightId: { type: Schema.Types.ObjectId, ref: "Flight" },
//         seat: { type: String },
//         fName: { type: String },
//         lName: { type: String },
//         dob: { type: Date },
//         state: { type: String },
//         passportNumber: { type: String },
//       },
//       hotel: {
//         hotelId: { type: Schema.Types.ObjectId, ref: "Hotel" },
//         checkInDate: { type: String },
//         checkOutDate: { type: String },
//         guests: { type: Number, min: 1 },
//         roomType: { type: String },
//       },
//       car: {
//         carId: { type: Schema.Types.ObjectId, ref: "Car" },
//         pickupDate: { type: String },
//         returnDate: { type: String },
//         driverIncluded: { type: Boolean },
//         pickupLocation: { type: String },
//       },
//       rental: {
//         rentalId: { type: Schema.Types.ObjectId, ref: "Rental" },
//         rentalDate: { type: String },
//         duration: { type: String },
//         pickupLocation: { type: String },
//       },
//     },
//     contactInfo: {
//       state: {
//         type: String,
//         required: [true, "State is required."],
//       },
//       phoneNumber: {
//         type: String,
//         required: [true, "Phone number is required."],
//         validate: {
//           validator: function (v) {
//             return /\+?\d{7,15}/.test(v); // Simple phone number validation
//           },
//           message: "Invalid phone number format.",
//         },
//       },
//       email: {
//         type: String,
//         required: [true, "Email is required."],
//         validate: {
//           validator: function (v) {
//             return /\S+@\S+\.\S+/.test(v); // Simple email validation
//           },
//           message: "Invalid email format.",
//         },
//       },
//     },
//     documents: {
//       passportSizePhoto: { type: String, default: "default-photo.png" },
//     },
//   },
//   { timestamps: true }
// );

// // Validate `details` based on `type`
// bookingSchema.pre("validate", function (next) {
//   const { type, details } = this;
//   const validDetails = {
//     Flight: "flight",
//     Hotel: "hotel",
//     Car: "car",
//     Rental: "rental",
//   };

//   const relevantDetailKey = validDetails[type];
//   const otherDetailKeys = Object.keys(validDetails).filter(key => key !== type);

//   if (!details[relevantDetailKey]) {
//     return next(new Error(`${type} details are required.`));
//   }

//   for (const key of otherDetailKeys) {
//     if (details[key]) {
//       return next(new Error(`Invalid details for booking type: ${type}.`));
//     }
//   }

//   next();
// });

// export default mongoose.model("Booking", bookingSchema);



import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  passportNumber: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
});

const BookingSchema = new mongoose.Schema(
  {
    room: { type: String, required: true },
    hotelName: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactionDetails: {
      totalPrice: { type: Number, required: true },
    },
    guests: [GuestSchema],
    paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
    stripePaymentId: { type: String },
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Booking", BookingSchema);
export default mongoose.model("HotelBooking", BookingSchema);
// HotelBooking
