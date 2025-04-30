



// import React, { useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import HotelCard from "./HotelCard";
// import Exprience from "../home/Exprience";

// const HotelCity = () => {
//   const { city } = useParams();
//   const location = useLocation();
  
//   const allHotels = location.state?.hotels || [];

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const hotelsPerPage = 9;
//   const totalPages = Math.ceil(allHotels.length / hotelsPerPage);
  
//   // Filter states
//   const [priceRange, setPriceRange] = useState([0, 10000]); 
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

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

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
//             {currentHotels.length > 0 ? (
//               currentHotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)
//             ) : (
//               <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
//             )}
//           </div>

//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-6">
//               <button 
//                 onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPage(index + 1)}
//                   className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button 
//                 onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* <Exprience /> */}
//     </>
//   );
// };

// export default HotelCity;




// import React, { useState, useMemo, useCallback } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import HotelCard from "./HotelCard";
// import Exprience from "../home/Exprience";
// import Filtersidebar from "./Filtersidebar";

// const HotelCity = () => {
//   const { city } = useParams();
//   const location = useLocation();
//   const allHotels = location.state?.hotels || [];

//   // States
//   const [currentPage, setCurrentPage] = useState(1);
//   const [priceRange, setPriceRange] = useState([0, 10000]);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

//   const hotelsPerPage = 9;

//   // Memoize filtered hotels
//   const filteredHotels = useMemo(() => {
//     return allHotels.filter((hotel) => {
//       const inPriceRange = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
//       const matchesRating = selectedRating ? hotel.rating === selectedRating : true;
//       const matchesAmenities =
//         selectedAmenities.length === 0 ||
//         selectedAmenities.every((amenity) => hotel.amenities.includes(amenity));
//       return inPriceRange && matchesRating && matchesAmenities;
//     });
//   }, [allHotels, priceRange, selectedRating, selectedAmenities]);

//   const totalPages = useMemo(() => Math.ceil(filteredHotels.length / hotelsPerPage), [filteredHotels.length]);

//   const currentHotels = useMemo(() => {
//     const indexOfLastHotel = currentPage * hotelsPerPage;
//     const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
//     return filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);
//   }, [filteredHotels, currentPage]);

//   // Handlers
//   const handlePageChange = useCallback((page) => {
//     setCurrentPage(page);
//   }, []);

//   const handlePriceChange = useCallback((e) => {
//     setPriceRange([0, parseInt(e.target.value)]);
//   }, []);

//   const handleRatingChange = useCallback((e) => {
//     const val = e.target.value;
//     setSelectedRating(val ? Number(val) : null);
//   }, []);

//   const handleAmenityChange = useCallback((e) => {
//     const amenity = e.target.value;
//     setSelectedAmenities((prev) =>
//       prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
//     );
//   }, []);

//   return (
//     <>
//       <div className="container mx-auto -mt-6 flex flex-col md:flex-row">
//         {/* Sidebar for Filters */}
//         {/* <div className="w-full md:w-1/5 p-4 bg-gray-100 shadow-lg rounded-md mt-10">
//           <h2 className="text-lg font-bold mb-4">Filter Hotels</h2>

       
//           <div className="mb-4">
//             <label className="font-medium">Price Range:</label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               step="500"
//               value={priceRange[1]}
//               onChange={handlePriceChange}
//               className="w-full mt-2"
//             />
//             <p>₹{priceRange[0]} - ₹{priceRange[1]}</p>
//           </div>

         
//           <div className="mb-4">
//             <label className="font-medium">Rating:</label>
//             <select
//               className="w-full p-2 mt-2 border rounded"
//               onChange={handleRatingChange}
//             >
//               <option value="">All Ratings</option>
//               <option value="10">5 ★</option>
//               <option value="9">4 ★</option>
//               <option value="8">3 ★</option>
//               <option value="7">2 ★</option>
//               <option value="6">1 ★</option>
//             </select>
//           </div>


//           <div className="mb-4">
//             <label className="font-medium">Amenities:</label>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {["wifi", "cooling", "parking", "food", "Pet Allow"].map((amenity) => (
//                 <label key={amenity} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     value={amenity}
//                     checked={selectedAmenities.includes(amenity)}
//                     onChange={handleAmenityChange}
//                   />
//                   <span>{amenity}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div> */}
//         <Filtersidebar/>

//         {/* Hotels Listing */}
//         <div className="w-full md:w-4/5 p-4 -mt-8">
//           <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
//             Hotels in {city}
//           </h1>
//           <h2 className="text-center mb-3 text-2xl font-bold text-red-700">Available Hotels</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
//             {currentHotels.length > 0 ? (
//               currentHotels.map((hotel) => (
//                 <HotelCard key={hotel._id} hotel={hotel} />
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
//             )}
//           </div>

//           {/* Pagination Controls */}
//           {filteredHotels.length > hotelsPerPage && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
//               >
//                 Previous
//               </button>

//               {Array.from({ length: totalPages }, (_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handlePageChange(index + 1)}
//                   className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}

//               <button
//                 onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* <Exprience /> */}
//     </>
//   );
// };

// export default HotelCity;




import React, { useState, useMemo, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import HotelCard from "./HotelCard";
import Exprience from "../home/Exprience";
import Filtersidebar from "./Filtersidebar";

const HotelCity = () => {
  const { city } = useParams();
  const location = useLocation();
  const allHotels = location.state?.hotels || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const hotelsPerPage = 9;

  const filteredHotels = useMemo(() => {
    return allHotels.filter((hotel) => {
      const inPriceRange = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = selectedRating ? hotel.rating >= selectedRating : true;
      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) => hotel.amenities.includes(amenity));
      return inPriceRange && matchesRating && matchesAmenities;
    });
  }, [allHotels, priceRange, selectedRating, selectedAmenities]);

  const totalPages = useMemo(() => Math.ceil(filteredHotels.length / hotelsPerPage), [filteredHotels.length]);

  const currentHotels = useMemo(() => {
    const indexOfLastHotel = currentPage * hotelsPerPage;
    const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
    return filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);
  }, [filteredHotels, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handlePriceChange = useCallback((e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  }, []);

  const handleRatingChange = useCallback((e) => {
    const val = e.target.value;
    setSelectedRating(val ? Number(val) : null);
  }, []);

  const handleAmenityChange = useCallback((e) => {
    const amenity = e.target.value;
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  }, []);

  return (
    <>
      <div className="container mx-auto -mt-6 flex flex-col md:flex-row">
        {/* Dynamic Filter Sidebar */}
        {/* <div className="hidden"> */}
          <Filtersidebar
            hotels={allHotels}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            selectedRating={selectedRating}
            handleRatingChange={handleRatingChange}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
          />
        {/* </div> */}
        

        {/* Hotel Listings */}
        <div className="w-full md:w-4/5 p-4 -mt-8">
          <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">Hotels in {city}</h1>
          <h2 className="text-center mb-3 text-2xl font-bold text-red-700">Available Hotels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {currentHotels.length > 0 ? (
              currentHotels.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))
            ) : (
              <p className="text-center text-gray-500">No hotels found. Try adjusting filters.</p>
            )}
          </div>

          {/* Pagination */}
          {filteredHotels.length > hotelsPerPage && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-l disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-r disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HotelCity;
