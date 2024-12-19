




// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RoomDetails = () => {
//   const { hotelId } = useParams(); // Get hotel ID from URL params
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("");

//   useEffect(() => {
//     // Fetch rooms by hotel ID
//     axios
//       .get(`${BACKENDURL}/api/v1/rooms/hotels/${hotelId}/rooms`) // Correct API endpoint
//       .then((response) => {
//         setRooms(response.data.rooms); // Rooms array from backend
//         console.log(response.data.rooms);
//         setHotelName(response.data.hotelName || "Hotel"); // Dynamic hotel name
//       })
//       .catch((error) => {
//         console.error("Error fetching room details:", error);
//       });
//   }, [hotelId]);

//   return (
//     <div className="container my-4">
//       <h2 className="fw-bold mb-4">{hotelName} - Room Details</h2>
//       <div className="row g-4">
//         {rooms.length > 0 ? (
//           rooms.map((room) => (
//             <div key={room._id} className="col-md-4">
//               <div className="card h-100 shadow-sm">
//                 {/* Display room image */}
//                 <img
//                   src={`${BACKENDURL}/${room.images[0]}`} // First image from array
//                   className="card-img-top"
//                   alt={room.type}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold">{room.type}</h5>
//                   <p className="card-text">
//                     <strong>Description:</strong> {room.description}
//                   </p>
//                   <p>
//                     <strong>Amenities:</strong> {room.amenities.join(", ")}
//                   </p>
//                   <p>
//                     <strong>Sleeps:</strong> {room.sleeps} people
//                   </p>
//                   <p>
//                     <strong>Bed Type:</strong> {room.bedType}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> ₹{room.price} per night
//                   </p>
//                   <p>
//                     <strong>Original Price:</strong> ₹{room.originalPrice}
//                   </p>
//                   <p>
//                     <strong>Discount:</strong> {room.discount}%
//                   </p>
//                   <p>
//                     <strong>Availability:</strong>{" "}
//                     {room.availability ? (
//                       <span className="text-success">Available</span>
//                     ) : (
//                       <span className="text-danger">Unavailable</span>
//                     )}
//                   </p>
//                   <p>
//                     <strong>Refundable:</strong>{" "}
//                     {room.isRefundable ? "Yes" : "No"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No rooms available for this hotel.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;




// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RoomDetails = () => {
//   const { hotelId } = useParams(); // Get hotel ID from URL params
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("");

//   useEffect(() => {
//     // Fetch rooms by hotel ID
//     axios
//       .get(`${BACKENDURL}/api/v1/rooms/hotels/${hotelId}/rooms`) // Correct API endpoint
//       .then((response) => {
//         setRooms(response.data.rooms); // Rooms array from backend
//         setHotelName(response.data.hotelName || "Hotel"); // Dynamic hotel name
//       })
//       .catch((error) => {
//         console.error("Error fetching room details:", error);
//       });
//   }, [hotelId]);

//   return (
//     <div className="container my-4">
//       <h2 className="fw-bold mb-4">{hotelName} - Room Details</h2>
//       <div className="row g-4">
//         {rooms.length > 0 ? (
//           rooms.map((room) => (
//             <div key={room._id} className="col-xl-12 col-lg-12 col-md-12">
//               <div className="card mb-4">
//                 <div className="card-header">
//                   <h6 className="fw-semibold mb-0">{room.type}</h6>
//                 </div>
//                 <div className="card-body">
//                   <div className="row align-items-start">
//                     {/* Room Image */}
//                     <div className="col-xl-3 col-lg-4 col-md-4">
//                       <div className="roomavls-groups">
//                         <div className="roomavls-thumb mb-2">
//                           <img
//                             src={`${BACKENDURL}/${room.images[0]}`} // First image from array
//                             className="img-fluid rounded-2 col-xl-12"
//                             alt={room.type}
//                           />
//                         </div>
//                         <div className="roomavls-caps">
//                           <div className="roomavls-escols d-flex align-items-start mb-2">
//                             <span className="label bg-light-purple text-purple me-2">{room.bedType}</span>
//                             <span className="label bg-light-purple text-purple">{room.sleeps} Sleeps</span>
//                           </div>
//                           <div className="roomavls-lists">
//                             <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
//                               {room.amenities.map((amenity, index) => (
//                                 <li key={index} className="col-6">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-circle-check me-2"></i>
//                                     {amenity}
//                                   </span>
//                                 </li>
//                               ))}
//                               <li className="col-12">
//                                 <a href="#" className="text-primary fw-medium text-md">
//                                   Show More Room Amenities
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Room Details */}
//                     <div className="col-xl-9 col-lg-8 col-md-8">
//                       <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
//                         <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
//                           <div className="typsofrooms-wrap">
//                             <div className="d-flex align-items-center">
//                               <h6 className="fs-6 fw-semibold mb-1 me-2">Room Details</h6>
//                             </div>
//                             <div className="typsofrooms-groups d-flex align-items-start">
//                               <ul className="row align-items-center g-1 mb-0 p-0">
//                                 <li className="col-12">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-file-alt me-2"></i>
//                                     {room.description}
//                                   </span>
//                                 </li>
//                                 <li className="col-12">
//                                   <span className="text-muted-2 text-md">
//                                     <i className="fa-solid fa-ban-smoking me-2"></i>
//                                     {room.isRefundable ? "Refundable" : "Non-Refundable"}
//                                   </span>
//                                 </li>
//                                 <li className="col-12">
//                                   <span className="text-success text-md">
//                                     <i className="fa-solid fa-circle-check me-2"></i>
//                                     {room.availability ? "Available" : "Unavailable"}
//                                   </span>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="typsofrooms-action col-auto">
//                             <div className="prcrounce-groups">
//                               <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
//                                 <div className="text-dark fw-semibold fs-4">₹{room.price}</div>
//                               </div>
//                               <div className="text-muted-2 text-sm">
//                                 After tax ₹{room.price + (room.price * 0.1).toFixed(2)}
//                               </div>
//                             </div>
//                             <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
//                               <button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4 mb-2">
//                                 Book at This Price
//                               </button>
//                               <button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">
//                                 Access Lower Price
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* / Room Details */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No rooms available for this hotel.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;





import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const RoomDetails = () => {
  const { hotelId } = useParams(); // Get hotel ID from URL params
  const navigate = useNavigate(); // Navigation function from React Router
  const [rooms, setRooms] = useState([]);
  const [hotelName, setHotelName] = useState("");

  useEffect(() => {
    // Fetch rooms by hotel ID
    axios
      .get(`${BACKENDURL}/api/v1/rooms/hotels/${hotelId}/rooms`) // Correct API endpoint
      .then((response) => {
        setRooms(response.data.rooms); // Rooms array from backend
        setHotelName(response.data.hotelName || "Hotel"); // Dynamic hotel name
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [hotelId]);

  const handleBookRoom = (room) => {
    // Navigate to Roombook page with state
    navigate("/roombook", { state: { room, hotelName } });
  };

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">{hotelName} - Room Details</h2>
      <div className="row g-4">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room._id} className="col-xl-12 col-lg-12 col-md-12">
              <div className="card mb-4">
                <div className="card-header">
                  <h6 className="fw-semibold mb-0">{room.type}</h6>
                </div>
                <div className="card-body">
                  <div className="row align-items-start">
                    {/* Room Image */}
                    <div className="col-xl-3 col-lg-4 col-md-4">
                      <div className="roomavls-groups">
                        <div className="roomavls-thumb mb-2">
                          <img
                            src={`${BACKENDURL}/${room.images[0]}`} // First image from array
                            className="img-fluid rounded-2 col-xl-12"
                            alt={room.type}
                          />
                        </div>
                        <div className="roomavls-caps">
                          <div className="roomavls-escols d-flex align-items-start mb-2">
                            <span className="label bg-light-purple text-purple me-2">{room.bedType}</span>
                            <span className="label bg-light-purple text-purple">{room.sleeps} Sleeps</span>
                          </div>
                          <div className="roomavls-lists">
                            <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                              {room.amenities.map((amenity, index) => (
                                <li key={index} className="col-6">
                                  <span className="text-muted-2 text-md">
                                    <i className="fa-solid fa-circle-check me-2"></i>
                                    {amenity}
                                  </span>
                                </li>
                              ))}
                              <li className="col-12">
                                <a href="#" className="text-primary fw-medium text-md">
                                  Show More Room Amenities
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="col-xl-9 col-lg-8 col-md-8">
                      <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                        <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                          <div className="typsofrooms-wrap">
                            <div className="d-flex align-items-center">
                              <h6 className="fs-6 fw-semibold mb-1 me-2">Room Details</h6>
                            </div>
                            <div className="typsofrooms-groups d-flex align-items-start">
                              <ul className="row align-items-center g-1 mb-0 p-0">
                                <li className="col-12">
                                  <span className="text-muted-2 text-md">
                                    <i className="fa-solid fa-file-alt me-2"></i>
                                    {room.description}
                                  </span>
                                </li>
                                <li className="col-12">
                                  <span className="text-muted-2 text-md">
                                    <i className="fa-solid fa-ban-smoking me-2"></i>
                                    {room.isRefundable ? "Refundable" : "Non-Refundable"}
                                  </span>
                                </li>
                                <li className="col-12">
                                  <span className="text-success text-md">
                                    <i className="fa-solid fa-circle-check me-2"></i>
                                    {room.availability ? "Available" : "Unavailable"}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="typsofrooms-action col-auto">
                            <div className="prcrounce-groups">
                              <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                <div className="text-dark fw-semibold fs-4">₹{room.price}</div>
                              </div>
                              <div className="text-muted-2 text-sm">
                                After tax ₹{room.price + (room.price * 0.1).toFixed(2)}
                              </div>
                            </div>
                            <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                              <button
                                className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4 mb-2"
                                onClick={() => handleBookRoom(room)}
                              >
                                Book at This Price
                              </button>
                              <button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">
                                Access Lower Price
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* / Room Details */}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No rooms available for this hotel.</p>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;






// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RoomDetails = () => {
//   const { hotelId } = useParams();
//   const navigate = useNavigate();
//   const [rooms, setRooms] = useState([]);
//   const [hotelName, setHotelName] = useState("Loading..."); // Default to "Loading..."

//   useEffect(() => {
//     axios
//       .get(`${BACKENDURL}/api/v1/rooms/hotels/${hotelId}/rooms`)
//       .then((response) => {
//         console.log("API Response:", response.data); // Debug API response
//         setRooms(response.data.rooms || []); // Handle undefined rooms array
//         setHotelName(response.data.
//           hotelName || "Hotel Name Not Available"); // Fallback for missing hotelName
//       })
//       .catch((error) => {
//         console.error("Error fetching room details:", error);
//         setHotelName("Error Loading Hotel Name"); // Fallback for API error
//       });
//   }, [hotelId]);

//   const handleBookRoom = (room) => {
//     navigate("/roombook", { state: { room, 
//       hotelName } });
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="fw-bold mb-4">{hotelName} - Room Details</h2>
//       <div className="row g-4">
//         {rooms.length > 0 ? (
//           rooms.map((room) => (
//             <div key={room._id} className="col-xl-12 col-lg-12 col-md-12">
//               <div className="card mb-4">
//                 <div className="card-header">
//                   <h6 className="fw-semibold mb-0">{room.type}</h6>
//                 </div>
//                 <div className="card-body">
//                   {/* Room Content */}
//                   ...
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No rooms available for this hotel.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;
