// import React from 'react';

// const Bannercar = () => {
//     return (
//         <div>
//             <div
//                 className="image-cover hero-header bg-white"
//                 style={{ background: 'url(/assets/img/car-bg.jpg) no-repeat' }}
//                 data-overlay="5"
//             >
//                 <div className="container">
//                     {/* Search Form */}
//                     <div className="row justify-content-center align-items-center">
//                         <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//                             <div className="position-relative text-center mb-5">
//                                 <h1>
//                                     Starts Your Trip with{' '}
//                                     <span className="position-relative z-4">
//                                         GeoTrip
//                                         <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                                             <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                                                 <path
//                                                     className="fill-white opacity-7"
//                                                     d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"
//                                                 ></path>
//                                             </svg>
//                                         </span>
//                                     </span>
//                                 </h1>
//                                 <p className="fs-5 fw-light">
//                                     Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                             <div className="search-wrap bg-white rounded-3 p-3">
//                                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                                     <div className="col-xl-8 col-lg-7 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                                                 <div className="form-group hdd-arrow mb-0">
//                                                     <select className="pickup form-control fw-bold">
//                                                         <option value="">Select</option>
//                                                         <option value="ny">New York</option>
//                                                         <option value="sd">San Diego</option>
//                                                         <option value="sj">San Jose</option>
//                                                         <option value="ph">Philadelphia</option>
//                                                         <option value="nl">Nashville</option>
//                                                         <option value="sf">San Francisco</option>
//                                                         <option value="hu">Houston</option>
//                                                         <option value="sa">San Antonio</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                                                 <div className="form-group mb-0">
//                                                     <input
//                                                         type="date"
//                                                         className="form-control choosedate fw-bold"
//                                                         placeholder="Choose Date..."

//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-4 col-lg-5 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                                                 <div className="form-group hdd-arrow mb-0">
//                                                     <select className="pickup form-control fw-bold">
//                                                         <option value="">Adults</option>
//                                                         <option value="adult">1</option>
//                                                         <option value="adult">2</option>
//                                                         <option value="adult">3</option>
//                                                         <option value="adult">4</option>
//                                                         <option value="adult">5</option>
//                                                     </select>
//                                                 </div>
//                                             </div>


//                                             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                                                 <div className="form-group mb-0">
//                                                     <button type="button" className="btn btn-primary full-width fw-medium"><i
//                                                         className="fa-solid fa-magnifying-glass me-2"></i>Search</button>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bannercar;



// import React, { useState } from 'react';
// import CarList from './CarList';

// const Bannercar = () => {
//     const [city, setCity] = useState('');
//     const [date, setDate] = useState('');
//     const [adults, setAdults] = useState('');
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleSearch = async () => {
//         setLoading(true);
//         try {
//             // Replace with your API endpoint
//             const response = await fetch(`http://your-api-endpoint.com/search?city=${city}&date=${date}&adults=${adults}`);
//             const data = await response.json();
//             setCars(data);
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div
//                 className="image-cover hero-header bg-white"
//                 style={{ background: 'url(/assets/img/car-bg.jpg) no-repeat' }}
//                 data-overlay="5"
//             >
//                 <div className="container">
//                     {/* Search Form */}
//                     <div className="row justify-content-center align-items-center">
//                         <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//                             <div className="position-relative text-center mb-5">
//                                 <h1>
//                                     Starts Your Trip with{' '}
//                                     <span className="position-relative z-4">GeoTrip</span>
//                                 </h1>
//                                 <p className="fs-5 fw-light">
//                                     Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                             <div className="search-wrap bg-white rounded-3 p-3">
//                                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                                     <div className="col-xl-8 col-lg-7 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                                                 <div className="form-group mb-0">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control fw-bold"
//                                                         placeholder="Enter City"
//                                                         value={city}
//                                                         onChange={(e) => setCity(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                                                 <div className="form-group mb-0">
//                                                     <input
//                                                         type="date"
//                                                         className="form-control fw-bold"
//                                                         value={date}
//                                                         onChange={(e) => setDate(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-4 col-lg-5 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                                                 <div className="form-group mb-0">
//                                                     <input
//                                                         type="number"
//                                                         className="form-control fw-bold"
//                                                         placeholder="Adults"
//                                                         value={adults}
//                                                         onChange={(e) => setAdults(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                                                 <div className="form-group mb-0">
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-primary full-width fw-medium"
//                                                         onClick={handleSearch}
//                                                     >
//                                                         <i className="fa-solid fa-magnifying-glass me-2"></i>
//                                                         Search
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Car List */}
//             <CarList cars={cars} loading={loading} />
//         </div>
//     );
// };

// export default Bannercar;




// import React, { useState } from "react";
// import axios from "axios";
// import CarList from "./CarList"; // Component to render car details
// import CarList2 from "./Carlist2";

// const Bannercar = () => {
//   // State variables
//   const [location, setLocation] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [adults, setAdults] = useState(1);
//   const [cars, setCars] = useState([]); // State to store search results
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(""); // Error state

//   // Function to handle the search button click
//   const handleSearch = async () => {
//     if (!location) {
//       alert("Please enter a location.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setCars([]);

//     try {
//       // API call to fetch cars based on search criteria
//       const response = await axios.get("http://localhost:4040/api/v1/cars/searchcar", {
//         params: {
//           location,
//           pickupDate,
//           adults,
//         },
//       });

//       console.log("Search Results:", response.data);
//       setCars(response.data); // Save search results to state
//     } catch (error) {
//       console.error("Error searching cars:", error);
//       setError("An error occurred while searching for cars. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="image-cover hero-header bg-white"
//         style={{ background: "url(/assets/img/car-bg.jpg) no-repeat" }}
//         data-overlay="5"
//       >
//         <div className="container">
//           {/* Search Form */}
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//               <div className="position-relative text-center mb-5">
//                 <h1>
//                   Start Your Trip with{" "}
//                   <span className="position-relative z-4">GeoTrip</span>
//                 </h1>
//                 <p className="fs-5 fw-light">
//                   Discover and book the best cars for your next trip.
//                 </p>
//               </div>
//             </div>

//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap bg-white rounded-3 p-3">
//                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                   {/* Location Input */}
//                   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                     <div className="form-group mb-0">
//                       <label>Location</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter location"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {/* Pickup Date */}
//                   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                     <div className="form-group mb-0">
//                       <label>Pickup Date</label>
//                       <input
//                         type="date"
//                         className="form-control"
//                         value={pickupDate}
//                         onChange={(e) => setPickupDate(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {/* Adults Input */}
//                   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                     <div className="form-group mb-0">
//                       <label>Adults</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         min="1"
//                         value={adults}
//                         onChange={(e) => setAdults(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {/* Search Button */}
//                   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                     <div className="form-group mb-0">
//                       <button
//                         type="button"
//                         className="btn btn-primary full-width fw-medium"
//                         onClick={handleSearch}
//                       >
//                         <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Displaying Cars */}
//       <div className="container mt-5">
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-danger">{error}</p>}
//         {cars.length > 0 ? (
//           <CarList2 cars={cars} />
//         ) : (
//           !loading && <p>No cars found. Try a different search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bannercar;



import React, { useState } from "react";
import axios from "axios";
import CarList2 from "./CarList2";

const Bannercar = () => {
  const [location, setLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!location || !pickUpDate || !dropOffDate) {
      alert("Please fill in all fields.");
      return;
    }

    if (new Date(pickUpDate) >= new Date(dropOffDate)) {
      alert("Drop-off date must be after pick-up date.");
      return;
    }

    setLoading(true);
    setError("");
    setCars([]);

    try {
      const response = await axios.get("http://localhost:4040/api/v1/cars/searchcar", {
        params: {
          location,
          pickUpDate,
          dropOffDate,
        },
      });

      setCars(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error searching cars:", error);
      setError("An error occurred while searching for cars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="image-cover hero-header bg-white" style={{ background: "url(/assets/img/car-bg.jpg) no-repeat" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
              <div className="position-relative text-center mb-5">
                <h1>
                  Start Your Trip with <span className="position-relative z-4">GeoTrip</span>
                </h1>
                <p className="fs-5 fw-light">Discover and book the best cars for your next trip.</p>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap bg-white rounded-3 p-3">
                <div className="row gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <label>Pick-up Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={pickUpDate}
                      onChange={(e) => setPickUpDate(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <label>Drop-off Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dropOffDate}
                      onChange={(e) => setDropOffDate(e.target.value)}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button
                      type="button"
                      className="btn btn-primary full-width fw-medium"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {cars.length > 0 ? (
          <CarList2 cars={cars} />
        ) : (
          !loading && <p>No cars found. Try a different search.</p>
        )}
      </div>
    </div>
  );
};

export default Bannercar;
