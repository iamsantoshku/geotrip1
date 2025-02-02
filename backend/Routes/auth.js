import express from "express";
import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import axios from "axios";

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

// const { OAuth2Client } = require("google-auth-library");
// import { OAuth2Client } from "google-auth-library";
// const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID");

// router.post("/api/v1/auth/google-login", async (req, res) => {
//     try {
//         const { token } = req.body;
//         if (!token) {
//             return res.status(400).json({ error: "Missing Google token" });
//         }

//         // Verify token with Google
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: "YOUR_GOOGLE_CLIENT_ID",
//         });

//         const payload = ticket.getPayload();
//         if (!payload.email) {
//             return res.status(400).json({ error: "Invalid Google token" });
//         }

//         // Find user in the database
//         let user = await User.findOne({ email: payload.email });

//         if (!user) {
//             user = await User.create({
//                 email: payload.email,
//                 name: payload.name,
//                 isAdmin: false,
//             });
//         }

//         res.json({ token: generateJWT(user), user });
//     } catch (error) {
//         console.error("Google login error:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// const express = require("express");




// const router = express.Router();

router.post("/google-login", async (req, res) => {
    try {
        const { token } = req.body;

        // Verify Google Token
        const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);

        if (!response.data.email) {
            return res.status(400).json({ error: "Invalid Google token" });
        }

        const { email, name, picture } = response.data;

        // Check if user exists in database
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if not exists
            user = await User.create({
                email,
                name,
                photo: picture,
                isAdmin: false,
            });
        }

        // Generate JWT Token
        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({
            token: jwtToken,
            user,
        });
    } catch (error) {
        console.error("Google login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



// router.get("/allusers", getAllUsers);
// router.put("/updateUser", authenticate, updateProfile);
// authenticate
export default router;
