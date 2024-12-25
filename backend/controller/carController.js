 // Import Car model
// import carSchema from "../models/carSchema";
import Car from "../models/carSchema.js"
// Add a Car
// export const addCar = async (req, res) => {
//   try {
//     const car = new Car(req.body);
//     const savedCar = await car.save();
//     res.status(201).json({ message: 'Car added successfully', car: savedCar });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


export const addCar = async (req, res) => {
    try {
      // Ensure the file has been uploaded successfully
      if (!req.file) {
        return res.status(400).json({ message: "No image file uploaded" });
      }
  
      // Create a new car with all details
      const car = new Car({
        name: req.body.name,
        type: req.body.type,
        image: req.file.path, // Store the uploaded file path
        seats: req.body.seats,
        ac: req.body.ac,
        kmIncluded: req.body.kmIncluded,
        kmRate: req.body.kmRate,
        price: req.body.price,
        originalPrice: req.body.originalPrice,
        discount: req.body.discount,
        cancellation: req.body.cancellation,
        transmission: req.body.transmission,
        luggage: req.body.luggage,
        fuel: req.body.fuel,
        reviews: req.body.reviews,
        rating: req.body.rating,
        isBooked: req.body.isBooked || false,
        bookingDetails: req.body.bookingDetails || {},
        location:req.body.location,
      });
  
      // Save the new car to the database
      await car.save();
  
      res.status(201).json({ message: "Car added successfully!", car });
    } catch (error) {
      res.status(500).json({ message: "Error adding car", error: error.message });
    }
  };

// Search Cars (dynamic filters)
// export const searchCar = async (req, res) => {
//   const { name, type, transmission, fuel } = req.query;

//   const filters = {};
//   if (name) filters.name = { $regex: name, $options: 'i' }; // Case-insensitive search
//   if (type) filters.type = type;
//   if (transmission) filters.transmission = transmission;
//   if (fuel) filters.fuel = fuel;

//   try {
//     const cars = await Car.find(filters);
//     res.status(200).json(cars);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


// export const searchCars = async (req, res) => {
//   try {
//     const { pickupLocation, dropLocation, dateRange } = req.body;

//     // Filter cars based on search criteria
//     const cars = await Car.find({
//       pickupLocation: { $regex: new RegExp(pickupLocation, 'i') }, // Case insensitive
//       dropLocation: { $regex: new RegExp(dropLocation, 'i') },
//       availableDates: {
//         $gte: new Date(dateRange.start), 
//         $lte: new Date(dateRange.end),
//       },
//     });

//     res.status(200).json({ success: true, cars });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server Error', error });
//   }
// };


export const searchCar = async (req, res) => {
  try {
    const { location, pickUpDate, dropOffDate } = req.query;

    // Validate required fields
    if (!location || !pickUpDate || !dropOffDate) {
      return res.status(400).json({
        success: false,
        message: "Please provide location, pick-up date, and drop-off date.",
      });
    }

    // Convert dates to ISO format
    const pickUp = new Date(pickUpDate);
    const dropOff = new Date(dropOffDate);

    if (pickUp >= dropOff) {
      return res.status(400).json({
        success: false,
        message: "Drop-off date must be after pick-up date.",
      });
    }

    // Query to find available cars
    const availableCars = await Car.find({
      location: { $regex: location, $options: "i" }, // Case-insensitive search
      // "availability.from": { $lte: pickUp },
      // "availability.to": { $gte: dropOff },
    });

    // Respond with the found cars
    res.status(200).json({
      success: true,
      data: availableCars,
    });
  } catch (error) {
    console.error("Error searching cars:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while searching for cars.",
    });
  }
};


// Get a Single Car by ID
export const getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Cars
export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// module.exports = {
//   addCar,
//   searchCar,
//   getCar,
//   getAllCars,
// };
