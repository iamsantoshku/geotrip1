import express from "express";
import { authenticate } from "../auth/verifyToken.js";

// Import controllers for each section
import {  getFlightCheckoutSession } from "../controller/bookingController.js";
// import { getHotelCheckoutSession } from "../controller/bookingController.js";
// import { processPayment } from "../controller/bookingController.js";
// import { getCarCheckoutSession } from "../controller/carController.js";
// import { getRentalCheckoutSession } from "../controller/rentalController.js";
import { createBooking, getUserBookings } from "../controller/bookingController.js";
import { createCarBooking } from "../controller/bookingController.js";
import { cancelBooking } from "../controller/bookingController.js";
import { cancelCarBooking } from "../controller/bookingController.js";

const router = express.Router();

// Flight Booking Routes

router.post("/payment", authenticate, createBooking);
router.patch("/cancel/:bookingId", authenticate, cancelBooking);
// router.patch("carcancelled/:bookingId", authenticate, cancelCarBooking);
router.get("/", authenticate, getUserBookings);
router.post("/flight/checkout-session/:flightId", authenticate, getFlightCheckoutSession);
router.post('/carbookings',authenticate, createCarBooking);
router.patch('/carcancelled/:bookingId', authenticate, cancelCarBooking);

// Hotel Booking Routes
// router.post("/hotel/checkout-session/:hotelId", authenticate, getHotelCheckoutSession);

// Car Booking Routes
// router.post("/car/checkout-session/:carId", authenticate, getCarCheckoutSession);

// // Rental Booking Routes
// router.post("/rental/checkout-session/:rentalId", authenticate, getRentalCheckoutSession);

export default router;
