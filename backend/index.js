import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js";
import flightRoute from "./Routes/flights.js";
import bookingRoute from "./Routes/booking.js";
// import router from "./Routes/auth.js";
import hotelRoutes from './Routes/hotelRoutes.js';
import multer from 'multer';
// const path = require('path');
import path from 'path'
// import carRoutes from './Routes/car.js'
import carRoutes from './Routes/car.js'
import roomRoutes from './Routes/room.js'
import ticketRoute from './Routes/tickets.js'
import cancelRoute from './Routes/cancel.js'

dotenv.config();

const app = express();

const corsOptions = {
    origin:true,
};

app.use(express.json());

app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store the uploaded files
  },
  filename: (req, file, cb) => {
    // Make sure the filename is unique
    cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension to the unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

app.get("/", (req, res)=>{
    res.send("api is woriking")
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/flights", flightRoute);
app.use('/api/v1/hotels', hotelRoutes);
app.use("/api/v1/bookings", bookingRoute);
app.use('/api/v1/cars', carRoutes);
app.use("/api/v1/rooms", roomRoutes);
app.use("/api/v1/tickets", ticketRoute);
app.use("api/v1/cancel", cancelRoute);

app.listen(4040, ()=>{
    connectDB();
    console.log("server is ruuning on 4040")
});




// correct 

// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// // Configure CORS
// const corsOptions = {
//   origin: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // Default Route
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// // MongoDB Connection
// mongoose.set("strictQuery", false);
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1); // Exit process if the connection fails
//   }
// };

// // Start Server
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server is running on port ${PORT}`);
// });





// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// // Configure CORS
// const corsOptions = {
//   origin: process.env.CLIENT_SITE_URLL || "*", // Allow requests from the frontend URL (set in .env)
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
// };
// app.use(cors(corsOptions));

// // Middleware
// app.use(express.json());

// // Default Route
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "API is working" });
// });

// // MongoDB Connection
// mongoose.set("strictQuery", false);
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// // Start Server
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server is running on port ${PORT}`);
// });
