// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";
// import Exprience from "../home/Exprience";

// const HotelCity = () => {
//   const { city } = useParams(); // Get city name from URL
//   const location = useLocation(); // Access passed state (search results)
//   const hotels = location.state?.hotels || []; // Fallback to an empty array if no state is passed

//   const navigate = useNavigate();

//   // Navigate to Room Details page
//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   return (
//     <div className="container mt-5">
//       {/* <h1>Hotels in {city}</h1> */}
//       <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
//         Hotels in {city}
//       </h1>


//       <h2 className="text-center mb-4 text-2xl font-bold text-red-700">Available Hotels</h2>
//       <div className="row">
//         {hotels.length > 0 ? (
//           hotels.map((hotel) => (
//             <div key={hotel._id} className="col-md-4 col-sm-6 mb-4">
//               <div
//                 onClick={(e) => handleCardClick(e, hotel._id)}
//                 className="card h-100 shadow cursor-pointer"
//               >
//                 <img
//                   src={BACKENDURL + `/${hotel.thumbnail}`}
//                   className="img-fluid"
//                   alt={`Image of ${hotel.name}`}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
//                   <p className="card-text">
//                     <strong>Location:</strong> {hotel.location || "Unknown"}
//                   </p>
//                   <p className="card-text">
//                     <strong>Distance:</strong> {hotel.distance || "N/A"} km
//                   </p>
//                   <p className="card-text">
//                     <strong>Price:</strong> ₹{hotel.price || "N/A"}{" "}
//                     {hotel.originalPrice && (
//                       <span className="text-muted text-decoration-line-through">
//                         ₹{hotel.originalPrice}
//                       </span>
//                     )}
//                   </p>
//                   <p className="card-text">
//                     <strong>Rating:</strong> {hotel.rating || "Not Rated"} ★
//                   </p>
//                   <p className="card-text">
//                     <strong>Amenities:</strong>{" "}
//                     {hotel.amenities?.join(", ") || "Not specified"}
//                   </p>
//                   <p className="card-text">
//                     <strong>Cancellation Policy:</strong>{" "}
//                     {hotel.cancellationPolicy || "No policy specified"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No hotels found. Please refine your search.</p>
//         )}
//       </div>
//       <Exprience/>
//     </div>
//   );
// };

// export default HotelCity;



// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";
// import Exprience from "../home/Exprience";

// const HotelCity = () => {
//   const { city } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const allHotels = location.state?.hotels || [];
  
//   // Filter states
//   const [priceRange, setPriceRange] = useState([0, 10000]); // Min and max price
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

//   // Handle hotel navigation
//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   // **Filter hotels based on user selection**
//   const filteredHotels = allHotels.filter(hotel => {
//     return (
//       hotel.price >= priceRange[0] &&
//       hotel.price <= priceRange[1] &&
//       (selectedRating ? hotel.rating === selectedRating : true) &&
//       (selectedAmenities.length > 0
//         ? selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
//         : true)
//     );
//   });

//   return (
//     <>
//     <div className="container mx-auto mt-0 flex flex-col md:flex-row">
//       {/* Sidebar for Filters */}
//       <div className="w-full md:w-1/5 p-4 bg-gray-100 shadow-lg rounded-md">
//         <h2 className="text-lg font-bold mb-4">Filter Hotels</h2>

//         {/* Price Filter */}
//         <div className="mb-4">
//           <label className="font-medium">Price Range:</label>
//           <input
//             type="range"
//             min="0"
//             max="10000"
//             step="500"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//             className="w-full mt-2"
//           />
//           <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
//         </div>

//         {/* Rating Filter */}
//         <div className="mb-4">
//           <label className="font-medium">Rating:</label>
//           <select
//             className="w-full p-2 mt-2 border rounded"
//             onChange={(e) => setSelectedRating(e.target.value ? Number(e.target.value) : null)}
//           >
//             <option value="">All Ratings</option>
//             <option value="5">5 ★</option>
//             <option value="4">6 ★</option>
//             <option value="3">7 ★</option>
//             <option value="2">8 ★</option>
//             <option value="2">9 ★</option>
//             <option value="2">10 ★</option>
//           </select>
//         </div>

//         {/* Amenities Filter */}
//         <div className="mb-4">
//           <label className="font-medium">Amenities:</label>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {["wifi", "cooling", "parking", "food","Pet Allow"].map((amenity) => (
//               <label key={amenity} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   value={amenity}
//                   onChange={(e) => {
//                     const newAmenities = selectedAmenities.includes(e.target.value)
//                       ? selectedAmenities.filter(a => a !== e.target.value)
//                       : [...selectedAmenities, e.target.value];
//                     setSelectedAmenities(newAmenities);
//                   }}
//                 />
//                 <span>{amenity}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Hotels Listing */}
//       <div className="w-full md:w-3/3 p-4">
//         <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
//           Hotels in {city}
//         </h1>
//         <h2 className="text-center mb-4 text-2xl font-bold text-red-700">Available Hotels</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredHotels.length > 0 ? (
//             filteredHotels.map((hotel) => (
//               <div key={hotel._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                   src={BACKENDURL + `/${hotel.thumbnail}`}
//                   className="w-full h-48 object-cover"
//                   alt={`Image of ${hotel.name}`}
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">{hotel.name}</h5>
//                   <p className="text-sm text-gray-600">{hotel.location || "Unknown"}</p>
//                   <p className="text-sm">
//                     <strong>Distance:</strong> {hotel.distance || "N/A"} km
//                   </p>
//                   <p className="text-sm">
//                     <strong>Price:</strong> ₹{hotel.price || "N/A"}{" "}
//                     {hotel.originalPrice && (
//                       <span className="text-muted line-through text-red-600">
//                         ₹{hotel.originalPrice}
//                       </span>
//                     )}
//                   </p>
//                   <p className="text-sm">
//                     <strong>Rating:</strong> {hotel.rating || "Not Rated"} ★
//                   </p>
//                   <p className="text-sm">
//                     <strong>Amenities:</strong>{" "}
//                     {hotel.amenities?.join(", ") || "Not specified"}
//                   </p>
//                   <p className="card-text">
//                      <strong>Cancellation Policy:</strong>{" "}
//                      {hotel.cancellationPolicy || "No policy specified"}
//                    </p>
//                   <button
//                     onClick={(e) => handleCardClick(e, hotel._id)}
//                     className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
//           )}
//         </div>
//       </div>     
//     </div>
//     <Exprience/>

//     </>
    
//   );
// };

// export default HotelCity;



// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";
// import Exprience from "../home/Exprience";

// const HotelCity = () => {
//   const { city } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const allHotels = location.state?.hotels || [];
  
//   // Filter states
//   const [priceRange, setPriceRange] = useState([0, 10000]); // Min and max price
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const hotelsPerPage = 4;

//   // Handle hotel navigation
//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   // **Filter hotels based on user selection**
//   const filteredHotels = allHotels.filter(hotel => {
//     return (
//       hotel.price >= priceRange[0] &&
//       hotel.price <= priceRange[1] &&
//       (selectedRating ? hotel.rating === selectedRating : true) &&
//       (selectedAmenities.length > 0
//         ? selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
//         : true)
//     );
//   });

//   // Pagination logic
//   const indexOfLastHotel = currentPage * hotelsPerPage;
//   const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
//   const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

//   const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);

//   return (
//     <>
//     <div className="container mx-auto mt-0 flex flex-col md:flex-row">
//       {/* Sidebar for Filters */}
//       <div className="w-full md:w-1/5 p-4 bg-gray-100 shadow-lg rounded-md">
//         <h2 className="text-lg font-bold mb-4">Filter Hotels</h2>

//         {/* Price Filter */}
//         <div className="mb-4">
//           <label className="font-medium">Price Range:</label>
//           <input
//             type="range"
//             min="0"
//             max="10000"
//             step="500"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//             className="w-full mt-2"
//           />
//           <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
//         </div>
//       </div>

//       {/* Hotels Listing */}
//       <div className="w-full md:w-4/5 p-4">
//         <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
//           Hotels in {city}
//         </h1>
//         <h2 className="text-center mb-4 text-2xl font-bold text-red-700">Available Hotels</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentHotels.length > 0 ? (
//             currentHotels.map((hotel) => (
//               <div key={hotel._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                   src={BACKENDURL + `/${hotel.thumbnail}`}
//                   className="w-full h-48 object-cover"
//                   alt={`Image of ${hotel.name}`}
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">{hotel.name}</h5>
//                   <p className="text-sm text-gray-600">{hotel.location || "Unknown"}</p>
//                   <p className="text-sm">
//                     <strong>Price:</strong> ₹{hotel.price || "N/A"} {hotel.originalPrice && (
//                       <span className="text-muted line-through text-red-600"> ₹{hotel.originalPrice} </span>
//                     )}
//                   </p>
//                   <button
//                     onClick={(e) => handleCardClick(e, hotel._id)}
//                     className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-6">
//             <button 
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
//             >
//               Previous
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button 
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//     <Exprience/>
//     </>
//   );
// };

// export default HotelCity;




// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";
// import Exprience from "../home/Exprience";

// const HotelCity = () => {
//   const { city } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const allHotels = location.state?.hotels || [];

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const hotelsPerPage = 9;
//   const totalPages = Math.ceil(allHotels.length / hotelsPerPage);
  
//   // Filter states
//   const [priceRange, setPriceRange] = useState([0, 10000]); // Min and max price
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

//   // Handle hotel navigation
//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   // Filter hotels based on user selection
//   const filteredHotels = allHotels.filter(hotel => {
//     return (
//       hotel.price >= priceRange[0] &&
//       hotel.price <= priceRange[1] &&
//       (selectedRating ? hotel.rating === selectedRating : true) &&
//       (selectedAmenities.length > 0
//         ? selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
//         : true)
//     );
//   });

//   // Pagination logic
//   const indexOfLastHotel = currentPage * hotelsPerPage;
//   const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
//   const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

//   return (
//     <>
//       <div className="container mx-auto -mt-6 flex flex-col md:flex-row">
//         {/* Sidebar for Filters */}
//         <div className="w-full md:w-1/5 p-4 bg-gray-100 shadow-lg rounded-md mt-10">
//           <h2 className="text-lg font-bold mb-4">Filter Hotels</h2>

//           {/* Price Filter */}
//           <div className="mb-4">
//             <label className="font-medium">Price Range:</label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               step="500"
//               value={priceRange[1]}
//               onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//               className="w-full mt-2"
//             />
//             <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
//           </div>

//           {/* Rating Filter */}
//           <div className="mb-4">
//             <label className="font-medium">Rating:</label>
//             <select
//               className="w-full p-2 mt-2 border rounded"
//               onChange={(e) => setSelectedRating(e.target.value ? Number(e.target.value) : null)}
//             >
//               <option value="">All Ratings</option>
//               <option value="10">5 ★</option>
//               <option value="9">4 ★</option>
//               <option value="8">3 ★</option>
//               <option value="7">2 ★</option>
//               <option value="6">1 ★</option>
//             </select>
//           </div>

//           {/* Amenities Filter */}
//           <div className="mb-4">
//             <label className="font-medium">Amenities:</label>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {["wifi", "cooling", "parking", "food", "Pet Allow"].map((amenity) => (
//                 <label key={amenity} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     value={amenity}
//                     onChange={(e) => {
//                       const newAmenities = selectedAmenities.includes(e.target.value)
//                         ? selectedAmenities.filter(a => a !== e.target.value)
//                         : [...selectedAmenities, e.target.value];
//                       setSelectedAmenities(newAmenities);
//                     }}
//                   />
//                   <span>{amenity}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Hotels Listing */}
//         <div className="w-full md:w-4/5 p-4 -mt-8">
//           <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
//             Hotels in {city}
//           </h1>
//           <h2 className="text-center mb-3 text-2xl font-bold text-red-700">Available Hotels</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentHotels.length > 0 ? (
//               currentHotels.map((hotel) => (
//                 <div key={hotel._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                   <img
//                     src={BACKENDURL + `/${hotel.thumbnail}`}
//                     className="w-full h-48 object-cover"
//                     alt={`Image of ${hotel.name}`}
//                   />
//                   <div className="p-4">
//                     <h5 className="text-lg font-semibold">{hotel.name}</h5>
//                     <p className="text-sm text-gray-600">{hotel.location || "Unknown"}</p>
//                     <p className="text-sm"><strong>Distance:</strong> {hotel.distance || "N/A"} km</p>
//                     <p className="text-sm"><strong>Price:</strong> ₹{hotel.price || "N/A"}</p>
//                     <p className="text-sm"><strong>Rating:</strong> {hotel.rating || "Not Rated"} ★</p>
//                     <p className="text-sm"><strong>Amenities:</strong> {hotel.amenities?.join(", ") || "Not specified"}</p>
//                     <p className="card-text">
//                      <strong>Cancellation Policy:</strong>{" "}
//                       {hotel.cancellationPolicy || "No policy specified"}
//                     </p>
//                     <button
//                       onClick={(e) => handleCardClick(e, hotel._id)}
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
//             )}
//           </div>

//           {/* Pagination Controls */}
//           {/* <div className="flex justify-center mt-6 space-x-4">
//             <button 
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage(currentPage - 1)}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span>Page {currentPage} of {totalPages}</span>
//             <button 
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage(currentPage + 1)}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div> */}
//           {totalPages > 1 && (
//           <div className="flex justify-center mt-6">
//             <button 
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
//             >
//               Previous
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index + 1)}
//                 className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button 
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//         </div>
//       </div>
//       <Exprience/>
//     </>
//   );
// };

// export default HotelCity;



import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import HotelCard from "./HotelCard";
import Exprience from "../home/Exprience";

const HotelCity = () => {
  const { city } = useParams();
  const location = useLocation();
  
  const allHotels = location.state?.hotels || [];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 9;
  const totalPages = Math.ceil(allHotels.length / hotelsPerPage);
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 10000]); 
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Filter hotels based on user selection
  const filteredHotels = allHotels.filter(hotel => {
    return (
      hotel.price >= priceRange[0] &&
      hotel.price <= priceRange[1] &&
      (selectedRating ? hotel.rating === selectedRating : true) &&
      (selectedAmenities.length > 0
        ? selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
        : true)
    );
  });

  // Pagination logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);

  return (
    <>
      <div className="container mx-auto -mt-6 flex flex-col md:flex-row">
        {/* Sidebar for Filters */}
        <div className="w-full md:w-1/5 p-4 bg-gray-100 shadow-lg rounded-md mt-10">
          <h2 className="text-lg font-bold mb-4">Filter Hotels</h2>

          {/* Price Filter */}
          <div className="mb-4">
            <label className="font-medium">Price Range:</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full mt-2"
            />
            <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <label className="font-medium">Rating:</label>
            <select
              className="w-full p-2 mt-2 border rounded"
              onChange={(e) => setSelectedRating(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">All Ratings</option>
              <option value="10">5 ★</option>
              <option value="9">4 ★</option>
              <option value="8">3 ★</option>
              <option value="7">2 ★</option>
              <option value="6">1 ★</option>
            </select>
          </div>

          {/* Amenities Filter */}
          <div className="mb-4">
            <label className="font-medium">Amenities:</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["wifi", "cooling", "parking", "food", "Pet Allow"].map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={amenity}
                    onChange={(e) => {
                      const newAmenities = selectedAmenities.includes(e.target.value)
                        ? selectedAmenities.filter(a => a !== e.target.value)
                        : [...selectedAmenities, e.target.value];
                      setSelectedAmenities(newAmenities);
                    }}
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Hotels Listing */}
        <div className="w-full md:w-4/5 p-4 -mt-8">
          <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
            Hotels in {city}
          </h1>
          <h2 className="text-center mb-3 text-2xl font-bold text-red-700">Available Hotels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {currentHotels.length > 0 ? (
              currentHotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
            ) : (
              <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                >
                  {index + 1}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <Exprience /> */}
    </>
  );
};

export default HotelCity;
