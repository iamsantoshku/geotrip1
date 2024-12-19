import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  type: {
    type: String,
    enum: ["Flight", "Hotel", "Car", "Rental"],
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  details: {
    flight: {
      flightId: { type: Schema.Types.ObjectId, ref: "Flight" },
      seat: { type: String },
      fName: { type: String },
      lName: { type: String },
      dob: { type: String },     
      state : {type:String},
      passportNumber: { type: String },
    },
    hotel: {
      hotelId: { type: Schema.Types.ObjectId, ref: "Hotel" },
      checkInDate: { type: String },
      checkOutDate: { type: String },
      guests: { type: Number },
      roomType: { type: String },
    },
    car: {
      carId: { type: Schema.Types.ObjectId, ref: "Car" },
      pickupDate: { type: String },
      returnDate: { type: String },
      driverIncluded: { type: Boolean },
      pickupLocation: { type: String },
    },
    rental: {
      rentalId: { type: Schema.Types.ObjectId, ref: "Rental" },
      rentalDate: { type: String },
      duration: { type: String },
      pickupLocation: { type: String },
    },
  },
  contactInfo: {
    state: { type: String },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  },
  documents: {
    passportSizePhoto: { type: String },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
