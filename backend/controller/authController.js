import User from "../models/userSchema.js";
// import Ticket from "../models/ticketSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Ticket from "../models/ticketShema.js";


// const jwtSecretKey = "dkfjdslkfjlk43546kjsSak56g4"
  // "f64b6790ba78cd243e0c5849dc5e7fd97c47e8f37234fe6403b1432a4a7705caadcc729936593a00939b3bd0e3554533961121715e4ffeac1b84cc10835a4d95";
const saltRounds = 10;

const createJWTToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "25d" });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required fields" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and password are required fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create payload with user ID and email
    const payload = {
      userId: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    // Create JWT token
    const token = createJWTToken(payload);

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      profilePic: user.profilePic,
    };

    return res
      .status(200)
      .json({ message: "Login successful", token, data: userData });
  } catch (error) {
    console.error("Login error:", error); // Add this line for logging
    return res.status(500).json({ error: "Something went wrong" });
  }
};


// export const getUser = async (req, res) => {
//   try {
//     console.log(req.userId, "req.userid");
//     const user = await User.findById(req.userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const tickets = user.bookings;
//     const ticketObjects = [];

//     for (let i = 0; i < tickets.length; i++) {
//       const ticket = await Ticket.findById(tickets[i]);
//       ticketObjects.push(ticket); // Add each ticket to the array
//     }

//     return res.status(200).json({ user, tickets: ticketObjects }); // Include tickets array in the response
//   } catch (error) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };



export const getUser = async (req, res) => {
  try {
    console.log(req.userId, "req.userId"); // Log user ID
    if (!req.userId) {
      return res.status(400).json({ message: "User ID not found in request" });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const tickets = user.flightBookings || [];
    const ticketObjects = [];

    for (let i = 0; i < tickets.length; i++) {
      const ticket = await Ticket.findById(tickets[i]);
      if (!ticket) {
        console.error(`Ticket not found: ${tickets[i]}`);
        continue;
      }
      ticketObjects.push(ticket);
    }

    return res.status(200).json({ user, tickets: ticketObjects });
  } catch (error) {
    console.error("Error in getUser:", error); // Detailed error log
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};



export const getUserBookings = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("hotelBookings")
      .populate("flightBookings")
      .populate("carBookings");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      hotelBookings: user.hotelBookings,
      flightBookings: user.flightBookings,
      carBookings: user.carBookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};



// export const getUser = async (req, res) => {
//   try {
//     // Ensure userId exists
//     if (!req.userId) {
//       return res.status(400).json({ message: "User ID is required" });
//     }

//     console.log(req.userId, "req.userId");

//     // Find user by ID
//     const user = await User.findById(req.userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Retrieve tickets in one query
//     const tickets = await Ticket.find({ _id: { $in: user.bookings } });

//     // Respond with user and their tickets
//     return res.status(200).json({
//       user: {
//         id: user._id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         mobile: user.mobile,
//         dob: user.dob,
//         gender: user.gender,
//         avatar: user.avatar,
//         about: user.about,
//       },
//       tickets,
//     });
//   } catch (error) {
//     console.error("Error in getUser:", error.message);
//     return res.status(500).json({ message: "Something went wrong", error: error.message });
//   }
// };
