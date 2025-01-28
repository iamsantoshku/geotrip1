// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RentalDetails = () => {
//   const { id } = useParams(); // Extract rental ID from the URL
//   const [rental, setRental] = useState(null);
//   const [guests, setGuests] = useState([]); // Array of guest details
//   const [newGuest, setNewGuest] = useState({ name: "", age: "" }); // For new guest input

//   // Fetch rental details from the backend
//   useEffect(() => {
//     const fetchRentalDetails = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/rental/rentals/${id}`);
//         console.log(response.data);
//         setRental(response.data.data);

//       } catch (error) {
//         console.error("Error fetching rental details:", error);
//       }
//     };

//     fetchRentalDetails();
//   }, [id]);

//   // Add a new guest
//   const addGuest = () => {
//     if (newGuest.name && newGuest.age) {
//       setGuests([...guests, newGuest]);
//       setNewGuest({ name: "", age: "" }); // Reset the form
//     }
//   };

//   // Remove a guest by index
//   const removeGuest = (index) => {
//     const updatedGuests = guests.filter((_, idx) => idx !== index);
//     setGuests(updatedGuests);
//   };

//   if (!rental) {
//     return <div>Loading rental details...</div>;
//   }

//   return (
//     <div className="container mt-5">
//       {/* Rental Details */}
//       <div className="card p-4">
//         <div className="row">
//           <div className="col-md-6">
//             <img
//               src={`${BACKENDURL}/${rental.images[0]}`}
//               className="img-fluid rounded"
//               alt={rental.type}
//             />
//           </div>
//           <div className="col-md-6">
//             <h2>{rental.title}</h2>
//             <p>{rental.description}</p>
//             <p>
//               <strong>Category:</strong> {rental.category}
//             </p>
//             <p>
//               <strong>Location:</strong> {rental.location.city},{" "}
//               {rental.location.distanceFromTown} km from town
//             </p>
//             <p>
//               <strong>Price:</strong> ${rental.discountedPrice}{" "}
//               <span className="text-danger">({rental.discount}% Off)</span>
//             </p>
//             <p>
//               <strong>Cancellation Policy:</strong>{" "}
//               {rental.cancellationPolicy ? "Free" : "No"}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Guest Details Form */}
//       <div className="mt-4">
//         <h3>Add Guests</h3>
//         <div className="form-group">
//           <label>Guest Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={newGuest.name}
//             onChange={(e) =>
//               setNewGuest((prev) => ({ ...prev, name: e.target.value }))
//             }
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Guest Age</label>
//           <input
//             type="number"
//             className="form-control"
//             value={newGuest.age}
//             onChange={(e) =>
//               setNewGuest((prev) => ({ ...prev, age: e.target.value }))
//             }
//           />
//         </div>
//         <button className="btn btn-primary mt-3" onClick={addGuest}>
//           Add Guest
//         </button>
//       </div>

//       {/* Guest List */}
//       <div className="mt-4">
//         <h3>Guest List</h3>
//         {guests.length === 0 ? (
//           <p>No guests added yet.</p>
//         ) : (
//           <ul className="list-group">
//             {guests.map((guest, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between">
//                 <span>
//                   {guest.name} (Age: {guest.age})
//                 </span>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => removeGuest(index)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RentalDetails;




// import React, { useEffect, useState } from "react";

// import { BACKENDURL } from "../../Config/Config";
// import { useLocation } from "react-router-dom";

// const RentalDetails = ({rental}) => {
  
//   const [error, setError] = useState(null); // For error handling
//   const [guests, setGuests] = useState([]); // Array of guest details
//   const [newGuest, setNewGuest] = useState({ name: "", age: "" }); // For new guest input

//   const location = useLocation();
//   const rental = location.state?.rental;

  

//   // Add a new guest
//   const addGuest = () => {
//     if (newGuest.name && newGuest.age) {
//       setGuests([...guests, newGuest]);
//       setNewGuest({ name: "", age: "" }); // Reset the form
//     }
//   };

//   // Remove a guest by index
//   const removeGuest = (index) => {
//     const updatedGuests = guests.filter((_, idx) => idx !== index);
//     setGuests(updatedGuests);
//   };

//   if (error) {
//     return <div className="alert alert-danger mt-5">{error}</div>;
//   }

//   if (!rental) {
//     return <div className="text-center mt-5">Loading rental details...</div>;
//   }

//   return (
//     <div className="container mt-5">
//       {/* Rental Details */}
//       <div className="card p-4">
//         <div className="row">
//           <div className="col-md-6">
//             <img
//               src={`${BACKENDURL}/${rental.images[0]?.replace(/\\/g, "/")}`} // Ensure correct path formatting
//               className="img-fluid rounded"
//               alt={rental.title}
//             />
//           </div>
//           <div className="col-md-6">
//             <h2>{rental.title}</h2>
//             <p>
//               <strong>Category:</strong> {rental.category}
//             </p>
//             <p>
//               <strong>Location:</strong> {rental.location.city},{" "}
//               {rental.location.distanceFromTown} km from town
//             </p>
//             <p>
//               <strong>Room Type:</strong> {rental.roomType}
//             </p>
//             <p>
//               <strong>Price:</strong> ${rental.discountedPrice}{" "}
//               <span className="text-danger">({rental.discount}% Off)</span>
//             </p>
//             <p>
//               <strong>Cancellation Policy:</strong>{" "}
//               {rental.cancellationPolicy === "yes" ? "Free" : "No"}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Guest Details Form */}
//       <div className="mt-4">
//         <h3>Add Guests</h3>
//         <div className="form-group">
//           <label>Guest Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={newGuest.name}
//             onChange={(e) =>
//               setNewGuest((prev) => ({ ...prev, name: e.target.value }))
//             }
//           />
//         </div>
//         <div className="form-group mt-2">
//           <label>Guest Age</label>
//           <input
//             type="number"
//             className="form-control"
//             value={newGuest.age}
//             onChange={(e) =>
//               setNewGuest((prev) => ({ ...prev, age: e.target.value }))
//             }
//           />
//         </div>
//         <button className="btn btn-primary mt-3" onClick={addGuest}>
//           Add Guest
//         </button>
//       </div>

//       {/* Guest List */}
//       <div className="mt-4">
//         <h3>Guest List</h3>
//         {guests.length === 0 ? (
//           <p>No guests added yet.</p>
//         ) : (
//           <ul className="list-group">
//             {guests.map((guest, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between">
//                 <span>
//                   {guest.name} (Age: {guest.age})
//                 </span>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => removeGuest(index)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RentalDetails;



// import React, { useState } from "react";
// import { BACKENDURL } from "../../Config/Config";
// import { useLocation } from "react-router-dom";

// const RentalDetails = () => {
//     const location = useLocation();
//     const rental = location.state?.rental;

//     const [guests, setGuests] = useState([]);
//     const [newGuest, setNewGuest] = useState({ name: "", age: "" });

//     if (!rental) {
//         return <div className="text-center mt-5">Loading rental details...</div>;
//     }

//     const addGuest = () => {
//         if (newGuest.name && newGuest.age) {
//             setGuests([...guests, newGuest]);
//             setNewGuest({ name: "", age: "" });
//         }
//     };

//     const removeGuest = (index) => {
//         setGuests(guests.filter((_, i) => i !== index));
//     };

//     return (
//         <div className="container mt-5">
//             {/* Rental Details */}
//             <h2>details of property</h2>
//             <div className="card p-4">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <img
//                             src={`${BACKENDURL}/${rental.images[0]}`}
//                             className="img-fluid rounded"
//                             alt={rental.title}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <h2>{rental.title}</h2>
//                         <p>
//                             <strong>Category:</strong> {rental.category}
//                         </p>
//                         <p>
//                             <strong>Location:</strong> {rental.location.city},{" "}
//                             {rental.location.distanceFromTown} km from town
//                         </p>
//                         <p>
//                             <strong>Room Type:</strong> {rental.roomType}
//                         </p>
//                         <p>
//                             <strong>Price:</strong> ${rental.discountedPrice}{" "}
//                             <span className="text-danger">({rental.discount}% Off)</span>
//                         </p>
//                         <p>
//                             <strong>Cancellation Policy:</strong>{" "}
//                             {rental.cancellationPolicy === "yes" ? "Free" : "No"}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Guest Management */}
//             <div className="mt-4">
//                 <h3>Add Guests</h3>
//                 <div className="form-group">
//                     <label>Guest Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={newGuest.name}
//                         onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
//                     />
//                 </div>
//                 <div className="form-group mt-2">
//                     <label>Guest Age</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         value={newGuest.age}
//                         onChange={(e) => setNewGuest({ ...newGuest, age: e.target.value })}
//                     />
//                 </div>
//                 <button className="btn btn-primary mt-3" onClick={addGuest}>
//                     Add Guest
//                 </button>
//             </div>

//             {/* Guest List */}
//             <div className="mt-4">
//                 <h3>Guest List</h3>
//                 {guests.length === 0 ? (
//                     <p>No guests added yet.</p>
//                 ) : (
//                     <ul className="list-group">
//                         {guests.map((guest, index) => (
//                             <li key={index} className="list-group-item d-flex justify-content-between">
//                                 <span>
//                                     {guest.name} (Age: {guest.age})
//                                 </span>
//                                 <button
//                                     className="btn btn-danger btn-sm"
//                                     onClick={() => removeGuest(index)}
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RentalDetails;



// import React, { useState } from "react";
// import { BACKENDURL } from "../../Config/Config";
// import { useLocation } from "react-router-dom";

// const RentalDetails = () => {
//     const location = useLocation();
//     const rental = location.state?.rental;

//     const [guests, setGuests] = useState([]);
//     const [newGuest, setNewGuest] = useState({ name: "", age: "" });

//     if (!rental) {
//         return <div className="text-center mt-10 text-xl font-semibold">Loading rental details...</div>;
//     }

//     const addGuest = () => {
//         if (newGuest.name && newGuest.age) {
//             setGuests([...guests, newGuest]);
//             setNewGuest({ name: "", age: "" });
//         }
//     };

//     const removeGuest = (index) => {
//         setGuests(guests.filter((_, i) => i !== index));
//     };

//     return (
//         <div className="container mx-auto p-6 mt-10">
//             {/* Rental Details */}
//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Details of Property</h2>
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                         <img
//                             src={`${BACKENDURL}/${rental.images[0]}`}
//                             className="w-full h-64 object-cover rounded-md"
//                             alt={rental.title}
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4">{rental.title}</h3>
//                         <p className="text-gray-600 mb-2">
//                             <span className="font-medium">Category:</span> {rental.category}
//                         </p>
//                         <p className="text-gray-600 mb-2">
//                             <span className="font-medium">Location:</span> {rental.location.city}, {rental.location.distanceFromTown} km from town
//                         </p>
//                         <p className="text-gray-600 mb-2">
//                             <span className="font-medium">Room Type:</span> {rental.roomType}
//                         </p>
//                         <p className="text-gray-600 mb-2">
//                             <span className="font-medium">Price:</span> ${rental.discountedPrice} 
//                             <span className="text-red-500">({rental.discount}% Off)</span>
//                         </p>
//                         <p className="text-gray-600 mb-2">
//                             <span className="font-medium">Cancellation Policy:</span> {rental.cancellationPolicy === "yes" ? "Free" : "No"}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Guest Management */}
//             <div className="mt-10">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Add Guests</h3>
//                 <div className="bg-white shadow-lg rounded-lg p-6">
//                     <div className="grid gap-4">
//                         <div>
//                             <label className="block text-gray-700 font-medium mb-2">Guest Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={newGuest.name}
//                                 onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700 font-medium mb-2">Guest Age</label>
//                             <input
//                                 type="number"
//                                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={newGuest.age}
//                                 onChange={(e) => setNewGuest({ ...newGuest, age: e.target.value })}
//                             />
//                         </div>
//                         <button
//                             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//                             onClick={addGuest}
//                         >
//                             Add Guest
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Guest List */}
//             <div className="mt-10">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Guest List</h3>
//                 {guests.length === 0 ? (
//                     <p className="text-gray-600">No guests added yet.</p>
//                 ) : (
//                     <ul className="bg-white shadow-lg rounded-lg p-6 divide-y">
//                         {guests.map((guest, index) => (
//                             <li
//                                 key={index}
//                                 className="flex justify-between items-center py-2"
//                             >
//                                 <span className="text-gray-700 font-medium">
//                                     {guest.name} (Age: {guest.age})
//                                 </span>
//                                 <button
//                                     className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
//                                     onClick={() => removeGuest(index)}
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RentalDetails;




// import React, { useState } from "react";
// import { BACKENDURL } from "../../Config/Config";
// import { useLocation } from "react-router-dom";
// import { authContext } from "../../context/authContext";

// const RentalDetails = () => {
//     const location = useLocation();
//     const rental = location.state?.rental;

//     const [guests, setGuests] = useState([]);
//     const [newGuest, setNewGuest] = useState({ name: "", age: "" });
//     const [bookingSuccess, setBookingSuccess] = useState(false);

//     const { user, isUserLoggedIn } = useContext(authContext);

//     if (!rental) {
//         return <div className="text-center mt-5">Loading rental details...</div>;
//     }

//     const addGuest = () => {
//         if (newGuest.name && newGuest.age) {
//             setGuests([...guests, newGuest]);
//             setNewGuest({ name: "", age: "" });
//         }
//     };

//     const removeGuest = (index) => {
//         setGuests(guests.filter((_, i) => i !== index));
//     };

   

//     const confirmBooking = async () => {
//         if (!user) {
//             toast.error("User information is missing!");
//             return;
//           }
//         try {
//             const token = localStorage.getItem("token");

//             const bookingDetails = {
//                 userId: user._id, 
//                 rentalId: rental._id,
//                 guests,
//                 totalPrice: rental.discountedPrice,
//             };
    
//             const response = await fetch(`${BACKENDURL}/api/v1/bookings/book`, {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(bookingDetails),
//             });
    
//             const data = await response.json();
    
//             if (response.ok) {
//                 alert("Booking Successful!");
//             } else {
//                 alert(`Booking Failed: ${data.message}`);
//             }
//         } catch (error) {
//             console.error("Error confirming booking:", error);
//             alert("An error occurred while booking.");
//         }
//     };

//     return (
//         <div className="container mx-auto mt-10 px-4">
//             {/* Rental Details */}
//             <h2 className="text-2xl font-bold text-center mb-6">Details of Property</h2>
//             <div className="bg-white shadow rounded-lg p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <img
//                         src={`${BACKENDURL}/${rental.images[0]}`}
//                         className="w-full h-64 object-cover rounded-lg"
//                         alt={rental.title}
//                     />
//                     <div>
//                         <h2 className="text-3xl font-semibold mb-4">{rental.title}</h2>
//                         <p className="mb-2">
//                             <strong>Category:</strong> {rental.category}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Location:</strong> {rental.location.city}, {rental.location.distanceFromTown} km from town
//                         </p>
//                         <p className="mb-2">
//                             <strong>Room Type:</strong> {rental.roomType}
//                         </p>
//                         <p className="mb-2">
//                             <strong>Price:</strong> ${rental.discountedPrice} <span className="text-red-500">({rental.discount}% Off)</span>
//                         </p>
//                         <p className="mb-2">
//                             <strong>Cancellation Policy:</strong> {rental.cancellationPolicy === "yes" ? "Free" : "No"}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Guest Management */}
//             <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Add Guests</h3>
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium">Guest Name</label>
//                         <input
//                             type="text"
//                             className="w-full px-4 py-2 border rounded-lg"
//                             value={newGuest.name}
//                             onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium">Guest Age</label>
//                         <input
//                             type="number"
//                             className="w-full px-4 py-2 border rounded-lg"
//                             value={newGuest.age}
//                             onChange={(e) => setNewGuest({ ...newGuest, age: e.target.value })}
//                         />
//                     </div>
//                     <button
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                         onClick={addGuest}
//                     >
//                         Add Guest
//                     </button>
//                 </div>
//             </div>

//             {/* Guest List */}
//             <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Guest List</h3>
//                 {guests.length === 0 ? (
//                     <p className="text-gray-500">No guests added yet.</p>
//                 ) : (
//                     <ul className="space-y-2">
//                         {guests.map((guest, index) => (
//                             <li
//                                 key={index}
//                                 className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
//                             >
//                                 <span>
//                                     {guest.name} (Age: {guest.age})
//                                 </span>
//                                 <button
//                                     className="bg-red-500 text-white px-2 py-1 rounded-lg"
//                                     onClick={() => removeGuest(index)}
//                                 >
//                                     Remove
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>

//             {/* Price Details */}
//             <div className="mt-8 bg-gray-100 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4">Price Details</h3>
//                 <p className="mb-2">
//                     <strong>Base Price:</strong> ${rental.basePrice}
//                 </p>
//                 <p className="mb-2">
//                     <strong>Discount:</strong> {rental.discount}%
//                 </p>
//                 <p className="mb-2 font-bold text-lg">
//                     <strong>Total Price:</strong> ${rental.discountedPrice}
//                 </p>
//             </div>

//             {/* Confirm Booking */}
//             <div className="mt-8">
//                 <button
//                     className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
//                     onClick={confirmBooking}
//                 >
//                     Confirm Booking
//                 </button>
                
//                 {bookingSuccess && (
//                     <p className="mt-4 text-green-600 text-center">Booking has been successfully completed!</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RentalDetails;




import React, { useState, useContext } from "react";
import { BACKENDURL } from "../../Config/Config";
import { useLocation } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { toast } from "react-toastify";

const RentalDetails = () => {
    const location = useLocation();
    const rental = location.state?.rental;

    const [guests, setGuests] = useState([]);
    const [newGuest, setNewGuest] = useState({ name: "", age: "" });
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const { user } = useContext(authContext);

    // Ensure rental data exists
    if (!rental) {
        return <div className="text-center mt-5">Loading rental details...</div>;
    }

    // Add a guest to the guest list
    const addGuest = () => {
        if (newGuest.name.trim() && newGuest.age) {
            setGuests([...guests, newGuest]);
            setNewGuest({ name: "", age: "" });
        } else {
            toast.error("Please provide both name and age for the guest.");
        }
    };

    // Remove a guest from the list
    const removeGuest = (index) => {
        setGuests(guests.filter((_, i) => i !== index));
    };

    // Confirm booking and send data to the backend
    const confirmBooking = async () => {
        if (!user) {
            toast.error("You need to log in to confirm a booking!");
            return;
        }

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Authentication token is missing!");
                return;
            }

            const bookingDetails = {
                userId: user._id, // Ensure user ID is available
                rentalId: rental._id,
                guests,
                totalPrice: rental.discountedPrice,
            };

            const response = await fetch(`${BACKENDURL}/api/v1/bookings/book`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingDetails),
            });

            const data = await response.json();

            if (response.ok) {
                setBookingSuccess(true);
                toast.success("Booking Successful!");
            } else {
                toast.error(`Booking Failed: ${data.message}`);
            }
        } catch (error) {
            console.error("Error confirming booking:", error);
            toast.error("An error occurred while confirming your booking.");
        }
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            {/* Rental Details */}
            <h2 className="text-2xl font-bold text-center mb-6">Details of Property</h2>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={`${BACKENDURL}/${rental.images[0]}`}
                        className="w-full h-64 object-cover rounded-lg"
                        alt={rental.title}
                    />
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">{rental.title}</h2>
                        <p className="mb-2">
                            <strong>Category:</strong> {rental.category}
                        </p>
                        <p className="mb-2">
                            <strong>Location:</strong> {rental.location.city}, {rental.location.distanceFromTown} km from town
                        </p>
                        <p className="mb-2">
                            <strong>Room Type:</strong> {rental.roomType}
                        </p>
                        <p className="mb-2">
                            <strong>Price:</strong> ${rental.discountedPrice} <span className="text-red-500">({rental.discount}% Off)</span>
                        </p>
                        <p className="mb-2">
                            <strong>Cancellation Policy:</strong> {rental.cancellationPolicy === "yes" ? "Free" : "No"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Guest Management */}
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Add Guests</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Guest Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={newGuest.name}
                            onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Guest Age</label>
                        <input
                            type="number"
                            className="w-full px-4 py-2 border rounded-lg"
                            value={newGuest.age}
                            onChange={(e) => setNewGuest({ ...newGuest, age: e.target.value })}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={addGuest}
                    >
                        Add Guest
                    </button>
                </div>
            </div>

            {/* Guest List */}
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Guest List</h3>
                {guests.length === 0 ? (
                    <p className="text-gray-500">No guests added yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {guests.map((guest, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
                            >
                                <span>
                                    {guest.name} (Age: {guest.age})
                                </span>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => removeGuest(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Price Details */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Price Details</h3>
                <p className="mb-2">
                    <strong>Base Price:</strong> ${rental.
originalPrice
}
                </p>
                <p className="mb-2">
                    <strong>Discount:</strong> {rental.discount}%
                </p>
                <p className="mb-2 font-bold text-lg">
                    <strong>Total Price:</strong> ${rental.discountedPrice}
                </p>
            </div>

            {/* Confirm Booking */}
            <div className="mt-8">
                <button
                    className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
                    onClick={confirmBooking}
                >
                    Confirm Booking
                </button>

                {bookingSuccess && (
                    <p className="mt-4 text-green-600 text-center">Booking has been successfully completed!</p>
                )}
            </div>
        </div>
    );
};

export default RentalDetails;
