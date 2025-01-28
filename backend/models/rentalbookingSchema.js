// const mongoose = require("mongoose");
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    rentalId: { type: mongoose.Schema.Types.ObjectId, ref: "Rental", required: true },
    guests: [
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
        },
    ],
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model("RentalBooking", bookingSchema);
