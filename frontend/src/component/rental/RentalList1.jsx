
// import React, { useEffect, useState } from "react";
// import RentalCard from "./RentalCard";
// import { BACKENDURL } from "../../Config/Config";

// const RentalList1 = () => {

//     const [rentals, setRentals] = useState(null); // Set initial state to null to indicate loading state


//     useEffect(() => {
//         fetch(BACKENDURL + "/api/v1/rental/getallrentals")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);  // Debug the API response
//                 if (data && Array.isArray(data.data)) { // Correctly access rentals from data.data
//                     setRentals(data.data);
//                 } else {
//                     console.error("No rentals found");
//                     setRentals([]);  // Set to empty array if no rentals found
//                 }
//             })
//             .catch((err) => {
//                 console.error("Error fetching rentals:", err);
//                 setRentals([]);  // Set empty array in case of error
//             });
//     }, []);


//     // Show loading state or error message if rentals are null
//     return (
//         <div className="container">
//             {rentals === null ? (
//                 <p>Loading rentals...</p>
//             ) : rentals.length > 0 ? (
//                 rentals.map((rental, index) => (
//                     <RentalCard key={index} rental={rental} />
//                 ))
//             ) : (
//                 <p>No rentals available.</p>
//             )}
//         </div>
//     );


// };

// export default RentalList1;





import React, { useEffect, useState } from "react";
import RentalCard from "./RentalCard";
import { BACKENDURL } from "../../Config/Config";

const RentalList1 = () => {
    const [rentals, setRentals] = useState(null); // Set initial state to null to indicate loading state

    useEffect(() => {
        fetch(BACKENDURL + "/api/v1/rental/getallrentals")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);  // Debug the API response
                if (data && Array.isArray(data.data)) { // Correctly access rentals from data.data
                    setRentals(data.data);
                } else {
                    console.error("No rentals found");
                    setRentals([]);  // Set to empty array if no rentals found
                }
            })
            .catch((err) => {
                console.error("Error fetching rentals:", err);
                setRentals([]);  // Set empty array in case of error
            });
    }, []);

    // Show loading state or error message if rentals are null
    return (
        <div className="container mx-auto p-2">
            {rentals === null ? (
                <p>Loading rentals...</p>
            ) : rentals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                    {rentals.map((rental, index) => (
                        <RentalCard key={index} rental={rental} />
                    ))}
                </div>
            ) : (
                <p>No rentals available.</p>
            )}
        </div>
    );
};

export default RentalList1;



// import React, { useEffect, useState } from "react";
// import RentalCard from "./RentalCard";
// import { BACKENDURL } from "../../Config/Config";

// const RentalList1 = () => {
//     const [rentals, setRentals] = useState(null);
//     const [filteredRentals, setFilteredRentals] = useState([]);
//     const [filters, setFilters] = useState({
//         category: "",
//         minPrice: "",
//         maxPrice: "",
//         beds: "",
//     });

//     useEffect(() => {
//         fetch(BACKENDURL + "/api/v1/rental/getallrentals")
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data && Array.isArray(data.data)) {
//                     setRentals(data.data);
//                     setFilteredRentals(data.data);
//                 } else {
//                     console.error("No rentals found");
//                     setRentals([]);
//                     setFilteredRentals([]);
//                 }
//             })
//             .catch((err) => {
//                 console.error("Error fetching rentals:", err);
//                 setRentals([]);
//                 setFilteredRentals([]);
//             });
//     }, []);

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters({ ...filters, [name]: value });
//     };

//     useEffect(() => {
//         if (!rentals) return;
//         let filtered = rentals.filter((rental) => {
//             return (
//                 (filters.category ? rental.category === filters.category : true) &&
//                 (filters.minPrice ? rental.discountedPrice >= Number(filters.minPrice) : true) &&
//                 (filters.maxPrice ? rental.discountedPrice <= Number(filters.maxPrice) : true) &&
//                 (filters.beds ? rental.propertyDetails.beds === Number(filters.beds) : true)
//             );
//         });
//         setFilteredRentals(filtered);
//     }, [filters, rentals]);

//     return (
//         <div className="container mx-auto p-4 flex">
//             {/* Sidebar */}
//             <div className="w-1/4 p-4 border-r">
//                 <h2 className="text-lg font-bold mb-4">Filters</h2>
//                 <div className="mb-4">
//                     <label className="block font-medium">Category</label>
//                     <input type="text" name="category" value={filters.category} onChange={handleFilterChange} className="border p-2 w-full" placeholder="Enter category" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-medium">Min Price</label>
//                     <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="border p-2 w-full" placeholder="Min Price" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-medium">Max Price</label>
//                     <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="border p-2 w-full" placeholder="Max Price" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-medium">Beds</label>
//                     <input type="number" name="beds" value={filters.beds} onChange={handleFilterChange} className="border p-2 w-full" placeholder="Number of Beds" />
//                 </div>
//             </div>

//             {/* Rental List */}
//             <div className="w-3/4 p-4">
//                 {rentals === null ? (
//                     <p>Loading rentals...</p>
//                 ) : filteredRentals.length > 0 ? (
//                     <div className="grid grid-cols-1 gap-6">
//                         {filteredRentals.map((rental, index) => (
//                             <RentalCard key={index} rental={rental} />
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No rentals available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default RentalList1;
