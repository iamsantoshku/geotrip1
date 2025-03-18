
// import React, { useState } from "react";
// import axios from "axios";
// // import HotelCard from "./HotelCard"; // Import your HotelCard component
// import HotelList from "./HotelList";
// import RoomDetails from "../room/RoomDetails";

// const Bannerhomeht = () => {
//   // State variables for user input
//   const [city, setCity] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [hotel, setHotels] = useState([]); // State to store search results
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(""); // Error state

//   // Function to handle the search button click
//   const handleSearch = async () => {
//     if (!city) {
//       alert("Please enter a city name.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setHotels([]);

//     try {
//       // API call to fetch hotels based on search criteria
//       const response = await axios.get(
//         `http://localhost:4040/api/v1/hotels/search`,
//         {
//           params: {
//             location: city,
//             checkInDate,
//             checkOutDate,
//             guests,
//           },
//         }
//       );

//       console.log("Search Results:", response.data);
//       setHotels(response.data); // Save search results to state
//     } catch (error) {
//       console.error("Error searching hotels:", error);
//       setError("An error occurred while searching for hotels. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="image-cover hero-header bg-white"
//         style={{ background: "url(/assets/img/banner-5.jpg) no-repeat" }}
//         data-overlay="5"
//       >
//         <div className="container">
//           {/* Search Form */}
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//               <div className="position-relative text-center mb-5">
//                 <h1>
//                   Start Your Trip with{' '}
//                   <span className="position-relative z-4">GeoTrip</span>
//                 </h1>
//                 <p className="fs-5 fw-light">
//                   Take a little break from the work stress of everyday. Discover,
//                   plan trips, and explore beautiful destinations.
//                 </p>
//               </div>
//             </div>

//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
//                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                   <div className="col-xl-8 col-lg-7 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       {/* City Input */}
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label>City</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter city name"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Check-In and Check-Out Dates */}
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label>Check-In Date</label>
//                           <input
//                             type="date"
//                             className="form-control fw-bold"
//                             value={checkInDate}
//                             onChange={(e) => setCheckInDate(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3">
//                         <div className="form-group mb-0">
//                           <label>Check-Out Date</label>
//                           <input
//                             type="date"
//                             className="form-control fw-bold"
//                             value={checkOutDate}
//                             onChange={(e) => setCheckOutDate(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-xl-4 col-lg-5 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       {/* Guests Input */}
//                       <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                         <div className="form-group mb-0">
//                           <label>Guests</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             min="1"
//                             value={guests}
//                             onChange={(e) => setGuests(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Search Button */}
//                       <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                         <div className="form-group mb-0">
//                           <button
//                             type="button"
//                             className="btn btn-primary full-width rounded-1 fw-medium"
//                             onClick={handleSearch}
//                           >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>
//                             Search
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>



// <div className="container mt-5">
//   {loading && <p>Loading...</p>}
//   {error && <p className="text-danger">{error}</p>}
//   {hotel.length > 0 ? (
//     <HotelList hotel={hotel} />
//   ) : (
//     !loading && <p>No hotels found. Try a different search.</p>
//   )}
// </div>
//     </div>
//   );
// };

// export default Bannerhomeht;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import HotelList from "./HotelList";
// import RoomDetails from "../room/RoomDetails";
// import { BACKENDURL } from "../../Config/Config";

// const Bannerhomeht = () => {
//   // State variables for user input
//   const [city, setCity] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState(1);
//   // const [hotel, setHotels] = useState([]); // State to store search results
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(""); // Error state

//   const navigate = useNavigate(); // React Router's useNavigate hook

//   // Function to handle the search button click
//   const handleSearch = async () => {
//     if (!city) {
//       alert("Please enter a city name.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     // setHotels([]);

//     try {
//       // API call to fetch hotels based on search criteria
//       const response = await axios.get(
//         BACKENDURL + `/api/v1/hotels/search`,
//         {
//           params: {
//             location: city,
//             checkInDate,
//             checkOutDate,
//             guests,
//           },
//         }
//       );

      
//       navigate(`/${city}/hotel-list/`, { state: { hotels: response.data } });
//     } catch (error) {
//       console.error("Error searching hotels:", error);
//       setError("An error occurred while searching for hotels. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div
//         className="image-cover hero-header bg-white"
//         style={{ background: "url(/assets/img/banner-5.jpg) no-repeat" }}
//         data-overlay="5"
//       >
//         <div className="container">
//           {/* Search Form */}
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//               <div className="position-relative text-center mb-5">
//                 <h1>
//                   Start Your Trip with{' '}
//                   <span className="position-relative z-4">GeoTrip</span>
//                 </h1>
//                 <p className="fs-5 fw-light">
//                   Take a little break from the work stress of everyday. Discover,
//                   plan trips, and explore beautiful destinations.
//                 </p>
//               </div>
//             </div>

//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
//                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                   <div className="col-xl-8 col-lg-7 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       {/* City Input */}
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label>City</label>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter city name"
//                             value={city}
//                             onChange={(e) => setCity(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Check-In and Check-Out Dates */}
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label>Check-In Date</label>
//                           <input
//                             type="date"
//                             className="form-control fw-bold"
//                             value={checkInDate}
//                             onChange={(e) => setCheckInDate(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3">
//                         <div className="form-group mb-0">
//                           <label>Check-Out Date</label>
//                           <input
//                             type="date"
//                             className="form-control fw-bold"
//                             value={checkOutDate}
//                             onChange={(e) => setCheckOutDate(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-xl-4 col-lg-5 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       {/* Guests Input */}
//                       <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                         <div className="form-group mb-0">
//                           <label>Guests</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             min="1"
//                             value={guests}
//                             onChange={(e) => setGuests(e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Search Button */}
//                       <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                         <div className="form-group mb-0">
//                           <button
//                             type="button"
//                             className="btn btn-primary full-width rounded-1 fw-medium"
//                             onClick={handleSearch}
//                           >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>
//                             Search
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Bannerhomeht;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Bannerhomeht = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(BACKENDURL + `/api/v1/hotels/search`, {
        params: {
          location: city,
          checkInDate,
          checkOutDate,
          guests,
        },
      });
      navigate(`/${city}/hotel-list/`, { state: { hotels: response.data } });
    } catch (error) {
      console.error("Error searching hotels:", error);
      setError("An error occurred while searching for hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="image-cover hero-header bg-white"
        // style={{ background: "url(/assets/img/banner-5.jpg) no-repeat" }}
        // style={{ background: "url(/hotelbanner.png) no-repeat" }}
        style={{
          backgroundImage: "url(/hotelbanner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "530px", // Default height
          height: "auto", // Auto height for responsiveness
        }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-9 text-center mb-4">
              <h1>
                Start Your Trip with <span className="position-relative">Makeustrip</span>
              </h1>
              <p className="fs-5 fw-light">
                Take a break from work stress. Discover, plan trips, and explore beautiful destinations.
              </p>
            </div>
            <div className="col-xl-12 px-5">
              <div className="search-wrap bg-white rounded-3 p-3">
                <div className="row gx-3 align-items-end">
                  <div className="col-md-3">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter city name"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Check-In</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Check-Out</label>
                    <input
                      type="date"
                      className="form-control"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>Guests</label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-primary w-100 mt-4"
                      onClick={handleSearch}
                    >
                      <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                    </button>
                  </div>
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerhomeht;
