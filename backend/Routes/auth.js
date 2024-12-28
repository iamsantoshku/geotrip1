import express from "express";

import { authenticate, restrict  } from "../auth/verifyToken.js";


import {
  registerUser,
  loginUser,
  getUser,
  getUserBookings,
  getAllUsers,
  getAllUserBookings,
  getAllBookings,
  
  
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser",authenticate,getUser);
router.get("/myBookings", authenticate, getUserBookings);
router.get("/allusers", getAllUsers);
router.get('/all-bookings', getAllBookings);

router.get("/all-user-bookings", getAllUserBookings);
// router.get("/allusers", getAllUsers);
// router.put("/updateUser", authenticate, updateProfile);
// authenticate
export default router;
