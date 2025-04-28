





// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const RoomDetails = () => {
//   const { hotelId } = useParams(); // Get hotel ID from URL params
//   const navigate = useNavigate(); // Navigation function from React Router
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

//   const handleBookRoom = (room) => {
//     // Navigate to Roombook page with state
//     navigate("/roombook", { state: { room, hotelName } });
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
//                   <div className="row align-items-start">
//                     {/* Room Image */}
//                     <div className="col-xl-3 col-lg-4 col-md-4">
//                       <div className="roomavls-groups">
//                         <div className="roomavls-thumb mb-2">
//                           <img
//                             src={`${BACKENDURL}/${room.images[0]}`} // First image from array
//                             className="img-fluid rounded-2 col-xl-12 w-full "
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
//                           <div className="typsofrooms-wrap mb-5">
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
//                               <button
//                                 className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4 mb-2"
//                                 onClick={() => handleBookRoom(room)}
//                               >
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
  const { name } = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [hotelName, setHotelName] = useState("");

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/api/v1/rooms/hotel/${name}`) // Correct endpoint
      .then((response) => {
        setRooms(response.data.rooms || []);   // safe fallback
        setHotelName(response.data.hotelName || "Hotel");
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [name]);

  const handleBookRoom = (room) => {
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
                            src={room.images && room.images.length > 0 ? `${BACKENDURL}/${room.images[0]}` : "/default-room.jpg"} 
                            className="img-fluid rounded-2 col-xl-12 w-full "
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
                              {room.amenities?.map((amenity, index) => (
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
                          <div className="typsofrooms-wrap mb-5">
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
                                After tax ₹{(room.price + (room.price * 0.1)).toFixed(2)}
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
