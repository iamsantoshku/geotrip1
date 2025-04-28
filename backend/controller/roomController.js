import Room from "../models/roomSchema.js"; // Import Room model
import Hotel from "../models/HotelSchema.js"

// Add a new room
// export const addRoom = async (req, res) => {
//   try {
//     const newRoom = new Room(req.body);
//     const savedRoom = await newRoom.save();
//     res.status(201).json({ message: "Room added successfully", data: savedRoom });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add room", error: error.message });
//   }
// };


export const addRoom = async (req, res) => {
    try {
      const { hotelName, type, description, amenities, sleeps, bedType, price, originalPrice, discount, floor, size, views, smokingPolicy, isRefundable } = req.body;
  
      // Find the hotel by its name (case-insensitive)
      const hotel = await Hotel.findOne({ name: { $regex: new RegExp(hotelName, "i") } });
      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found with the provided name" });
      }
  
      // Handle file uploads for images (if any)
      const images = req.files ? req.files.map((file) => file.path) : []; // Assuming `req.files` for multiple uploads
  
      // Create a new room linked to the hotel's ID
      const newRoom = new Room({
        hotel: hotel._id, // Assign the hotel's _id
        type,
        description,
        amenities: amenities ? amenities.split(",") : [], // Convert amenities string to array
        sleeps,
        bedType,
        price,
        originalPrice,
        discount,
        floor,
        size,
        views,
        smokingPolicy,
        images,
        isRefundable: isRefundable === "true", // Convert string to boolean
      });
  
      // Save the new room
      const savedRoom = await newRoom.save();
  
      res.status(201).json({ message: "Room added successfully!", room: savedRoom });
    } catch (error) {
      res.status(500).json({ message: "Error adding room", error: error.message });
    }
  };

// Get all rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ data: rooms });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve rooms", error: error.message });
  }
};

// Get a single room by ID
export const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ data: room });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve room", error: error.message });
  }
};

// Search rooms (by amenities, price range, or location)
export const searchRooms = async (req, res) => {
  try {
    const { amenities, minPrice, maxPrice, location } = req.query;

    let query = {};
    if (amenities) query.amenities = { $in: amenities.split(",") };
    if (location) query.location = { $regex: location, $options: "i" };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const rooms = await Room.find(query);
    res.status(200).json({ data: rooms });
  } catch (error) {
    res.status(500).json({ message: "Failed to search rooms", error: error.message });
  }
};



// Get rooms for a specific hotel
// export const getRoomsByHotelId = async (req, res) => {
//   const { hotelId } = req.params;

//   try {
//     const rooms = await Room.find({ hotelId }); // Assuming `Room` model has a `hotelId` field
//     const hotel = await Hotel.findById(hotelId); // Fetch hotel name if needed

//     if (!rooms || rooms.length === 0) {
//       return res.status(404).json({ message: "No rooms found for this hotel." });
//     }

//     res.status(200).json({
//       rooms,
//       hotelName: hotel ? hotel.name : "Hotel Not Found", // Assuming `hotel` has a `name` field
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching rooms.", error });
//   }
// };




// import Room from "../models/Room.js";

// export const getRoomsByHotelId = async (req, res) => {
//   try {
//     const { hotelId } = req.params; // Extract hotel ID from request params
//     const rooms = await Room.find({ hotel: hotelId }); // Query rooms by hotel ID

//     if (!rooms || rooms.length === 0) {
//       return res.status(404).json({ message: "No rooms found for this hotel." });
//     }

//     res.status(200).json({ 
//       hotelName: "Your Hotel Name Here", // You can dynamically fetch this from Hotel collection if needed
//       rooms 
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching rooms", error });
//   }
// };





export const getRoomsByHotelId = async (req, res) => {
  try {
    const { hotelId } = req.params; // Extract hotel ID from request params

    // Query rooms by hotel ID and populate the hotel details
    const rooms = await Room.find({ hotel: hotelId }).populate("hotel", "name");

    if (!rooms || rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found for this hotel." });
    }

    // Extract hotel name from the populated hotel data
    const hotelName = rooms[0]?.hotel?.name || "Hotel Name Not Available";

    res.status(200).json({
      hotelName,
      rooms,
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms", error });
  }
};

// export const getRoomsByHotelName = async (req, res) => {
//   try {
//     const { hotelName } = req.params; // Extract hotel name from request params

//     // Find the hotel by its name
//     const hotel = await Hotel.findOne({ name: hotelName });

//     if (!hotel) {
//       return res.status(404).json({ message: "Hotel not found." });
//     }

//     // Find rooms linked to the hotel ID
//     const rooms = await Room.find({ hotel: hotel._id }).populate("hotel", "name");

//     if (!rooms || rooms.length === 0) {
//       return res.status(404).json({ message: "No rooms found for this hotel." });
//     }

//     res.status(200).json({
//       hotelName: hotel.name,
//       rooms,
//     });
//   } catch (error) {
//     console.error("Error fetching rooms by hotel name:", error);
//     res.status(500).json({ message: "Error fetching rooms by hotel name", error });
//   }
// };


export const getRoomsByHotelName = async (req, res) => {
  try {
    const { hotelName } = req.params;

    if (!hotelName) {
      return res.status(400).json({ message: "Hotel name is required" });
    }

    const hotel = await Hotel.findOne({ name: hotelName });

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const rooms = await Room.find({ hotel: hotel._id });

    res.status(200).json({
      rooms,             // send rooms array
      hotelName: hotel.name,  // send hotel name
    });
  } catch (error) {
    console.error("Error fetching rooms by hotel name:", error);
    res.status(500).json({ message: "Server error" });
  }
};