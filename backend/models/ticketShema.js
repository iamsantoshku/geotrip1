import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true, // Ensures the UID is unique across tickets
  },
  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled", "unsuccessful"],
    default: "upcoming",
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "ticketType", // Dynamic reference to the specific model (Flight, Hotel, etc.)
    },
  ],
  ticketType: {
    type: String,
    required: true,
    enum: ["Flight", "Hotel", "Car", "Rental"], // Defines the allowed types
  },
});

export default mongoose.model("Ticket", ticketSchema);