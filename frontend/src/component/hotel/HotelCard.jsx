// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";

// const HotelCard = ({ hotel }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       <img
//         src={BACKENDURL + `/${hotel.thumbnail}`}
//         className="w-full h-48 object-cover"
//         alt={`Image of ${hotel.name}`}
//       />
//       <div className="p-4">
//         <h5 className="text-lg font-semibold">{hotel.name}</h5>
//         <p className="text-sm text-gray-600">{hotel.location || "Unknown"}</p>
//         <p className="text-sm"><strong>Distance:</strong> {hotel.distance || "N/A"} km</p>
//         <p className="text-sm"><strong>Price:</strong> ₹{hotel.price || "N/A"}</p>
//         <p className="text-sm"><strong>Rating:</strong> {hotel.rating || "Not Rated"} ★</p>
//         <p className="text-sm"><strong>Amenities:</strong> {hotel.amenities?.join(", ") || "Not specified"}</p>
//         <p className="text-sm"><strong>Cancellation Policy:</strong> {hotel.cancellationPolicy || "No policy specified"}</p>
//         <button
//           onClick={(e) => handleCardClick(e, hotel._id)}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;



// import React from "react";

// const HotelCard = () => {
//   return (
//     <div className="w-full p-3 bg-white rounded-lg shadow-md">
//       <div className="flex flex-wrap">
//         {/* Image Section */}
//         <div className="w-full md:w-1/3">
//           <div className="h-full overflow-hidden rounded-lg">
//             <img
//               className="w-full h-full object-cover"
//               src="assets/img/hotel/hotel-1.jpg"
//               alt="Hotel"
//             />
//           </div>
//         </div>

//         {/* Hotel Details Section */}
//         <div className="w-full md:w-2/3 p-4">
//           <div className="flex items-center space-x-1 text-yellow-400 text-sm">
//             {[...Array(5)].map((_, index) => (
//               <i key={index} className="fa fa-star"></i>
//             ))}
//           </div>
//           <h4 className="text-lg font-bold mt-2">Hotel Chancellor@Orchard</h4>
//           <ul className="flex flex-wrap text-gray-500 text-sm mt-1">
//             <li className="mr-2">Waterloo and Southwark</li>
//             <li className="mr-2">·</li>
//             <li className="mr-2">9.8 km from Delhi Airport</li>
//             <li className="mr-2">·</li>
//             <li>
//               <a href="#" className="text-blue-500">Show on Map</a>
//             </li>
//           </ul>

//           <div className="mt-2 text-sm text-gray-600 space-x-2">
//             <span>Parking</span>
//             <span>WiFi</span>
//             <span>Eating</span>
//             <span>Cooling</span>
//             <span>Pet</span>
//           </div>

//           <div className="mt-3">
//             <div className="text-md font-medium text-gray-900">Standard Twin Double Room</div>
//             <div className="text-sm text-gray-500">Last booked 25 min ago</div>
//           </div>

//           <div className="mt-3 text-sm text-green-600 bg-green-100 p-2 rounded">
//             Free Cancellation, till 1 hour of Pick up
//           </div>
//           <div className="mt-1 text-sm text-gray-500">
//             <a href="#" className="text-blue-500">Login</a> & get additional $15 Off Using
//             <span className="text-blue-500"> Visa card</span>
//           </div>
//         </div>

//         {/* Pricing and Availability */}
//         <div className="w-full md:w-auto text-right mt-4 md:mt-0 md:flex md:flex-col md:justify-between">
//           <div className="text-gray-900 font-medium">Exceptional</div>
//           <div className="text-sm text-gray-500">3,014 reviews</div>
//           <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-md mt-2">4.8</div>
//           <div className="mt-4">
//             <div className="text-green-600 font-semibold">15% Off</div>
//             <div className="flex items-center space-x-2 mt-1">
//               <span className="text-gray-400 line-through">US$79</span>
//               <span className="text-lg font-bold">$59</span>
//             </div>
//             <div className="text-sm text-gray-500">+$22 taxes & Fees</div>
//             <div className="text-sm text-gray-500">For 2 Nights</div>
//           </div>
//           <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//             See Availability <i className="fa-solid fa-arrow-trend-up ml-2"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";

// const HotelCard = ({ hotel }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (e, hotelId) => {
//     e.preventDefault();
//     navigate(`/hotel-details/${hotelId}`);
//   };

//   return (
//     <div className="col-xl-12 col-lg-12 col-12">
//       <div className="card list-layout-block rounded-3 p-3 shadow-lg">
//         <div className="row">
//           <div className="col-xl-4 col-lg-3 col-md">
//             <div className="cardImage__caps rounded-2 overflow-hidden h-100">
//               <img
//                 className="img-fluid h-100 object-fit"
//                 src={`${BACKENDURL}/${hotel.thumbnail}`}
//                 alt={`Image of ${hotel.name}`}
//               />
//             </div>
//           </div>

//           <div className="col-xl col-lg col-md">
//             <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
//               <div className="d-flex align-items-center justify-content-start">
//                 <div className="d-inline-block">
//                   {[...Array(hotel.rating || 0)].map((_, index) => (
//                     <i key={index} className="fa fa-star text-warning text-xs"></i>
//                   ))}
//                 </div>
//               </div>
//               <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>
//               <ul className="row gx-2 p-0 excortio">
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">{hotel.location}</p>
//                 </li>
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">{hotel.distance} km away</p>
//                 </li>
//                 <li className="col-auto">
//                   <p className="text-muted-2 text-md">
//                     <a href="#" className="text-primary">Show on Map</a>
//                   </p>
//                 </li>
//               </ul>
//               <div className="detail ellipsis-container mt-3">
//                 {hotel.amenities?.map((amenity, index) => (
//                   <span key={index} className="ellipsis">{amenity}</span>
//                 ))}
//               </div>
//               <div className="position-relative mt-3">
//                 <div className="fw-medium text-dark">{hotel.roomType}</div>
//                 <div className="text-md text-muted">{hotel.lastBooked} min ago</div>
//               </div>
//               <div className="position-relative mt-4">
//                 <div className="d-block position-relative">
//                   <span className="label bg-light-success text-success">
//                     {hotel.cancellationPolicy}
//                   </span>
//                 </div>
//                 <div className="text-md">
//                   <p className="m-0">
//                     <a href="#" className="text-primary">Login</a> & get additional ₹{hotel.discount} Off Using
//                     <span className="text-primary"> Visa card</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start align-items-md-end flex-column">
//             <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
//               <div className="col-auto text-start text-md-end">
//                 <div className="text-md text-dark fw-medium">Exceptional</div>
//                 <div className="text-md text-muted-2">{hotel.reviews} reviews</div>
//               </div>
//               <div className="col-auto">
//                 <div className="square--40 rounded-2 bg-primary text-light">{hotel.rating}</div>
//               </div>
//             </div>

//             <div className="position-relative mt-auto full-width">
//               <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
//                 <span className="label bg-success text-light">{hotel.discount}% Off</span>
//               </div>
//               <div className="d-flex align-items-center justify-content-start justify-content-md-end">
//                 <div className="text-muted-2 fw-medium text-decoration-line-through me-2">₹{hotel.originalPrice}</div>
//                 <div className="text-dark fw-bold fs-3">₹{hotel.price}</div>
//               </div>
//               <div className="d-flex align-items-start align-items-md-end flex-column mb-2">
//                 <div className="text-muted-2 text-sm">+₹{hotel.taxes} taxes & Fees</div>
//                 <div className="text-muted-2 text-sm">For {hotel.nights} Nights</div>
//               </div>
//               <div className="d-flex align-items-start align-items-md-end flex-column">
//                 <button
//                   onClick={(e) => handleCardClick(e, hotel._id)}
//                   className="btn btn-md btn-primary full-width fw-medium px-lg-4"
//                 >
//                   See Availability <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;



import React from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../../Config/Config";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleCardClick = (e, hotelId) => {
    e.preventDefault();
    navigate(`/hotel-details/${hotelId}`);
  };

  return (
    <div className="col-xl-12 col-lg-12 col-12">
      <div className="card list-layout-block rounded-3 p-3 shadow-lg">
        <div className="row">
          {/* Hotel Image */}
          <div className="col-xl-4 col-lg-3 col-md">
            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
              <img
                className="img-fluid h-100 object-fit-cover"
                src={BACKENDURL + `/${hotel.thumbnail}`}
                alt={hotel.name}
              />
            </div>
          </div>

          {/* Hotel Details */}
          <div className="col-xl col-lg col-md">
            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
              {/* Rating */}
              <div className="d-flex align-items-center">
                <div className="d-inline-block">
                  {[...Array(Math.round(hotel.rating || 0))].map((_, index) => (
                    <i key={index} className="fa fa-star text-warning text-xs"></i>
                  ))}
                </div>
              </div>

              {/* Hotel Name */}
              <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4>

              {/* Location & Distance */}
              <ul className="row gx-2 p-0 excortio">
                <li className="col-auto">
                  <p className="text-muted-2 text-md">{hotel.location || "Unknown Location"}</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">{hotel.distance ? `${hotel.distance} km from Airport` : "Distance Unavailable"}</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md fw-bold">.</p>
                </li>
                <li className="col-auto">
                  <p className="text-muted-2 text-md">
                    <a href="#" className="text-primary">Show on Map</a>
                  </p>
                </li>
              </ul>

              {/* Amenities */}
              <div className="detail ellipsis-container mt-3">
                {(hotel.amenities && Array.isArray(hotel.amenities)) 
                  ? hotel.amenities.slice(0, 5).map((amenity, index) => (
                      <span key={index} className="ellipsis">{amenity}</span>
                    ))
                  : <span className="ellipsis">No Amenities Listed</span>
                }
              </div>

              {/* Room & Cancellation Policy */}
              <div className="position-relative mt-3">
                <div className="fw-medium text-dark">{hotel.roomType || "Standard Room"}</div>
                <div className="text-md text-muted">Last booked {hotel.lastBooked || "N/A"} minutes ago</div>
              </div>

              <div className="position-relative mt-4">
                <div className="d-block position-relative">
                  <span className="label bg-light-success text-success">
                    {hotel.cancellationPolicy || "Free Cancellation Available"}
                  </span>
                </div>
                <div className="text-md">
                  <p className="m-0">
                    <a href="#" className="text-primary">Login</a> & get additional ₹500 Off Using 
                    <span className="text-primary"> Visa Card</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Section */}
          <div className="col-xl-auto col-lg-auto col-md-auto text-right d-flex align-items-start align-items-md-end flex-column">
            <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
              <div className="col-auto text-start text-md-end">
                <div className="text-md text-dark fw-medium">Exceptional</div>
                <div className="text-md text-muted-2">{hotel.reviews || 0} reviews</div>
              </div>
              <div className="col-auto">
                <div className="square--40 rounded-2 bg-primary text-light">
                  {hotel.rating || "N/A"}
                </div>
              </div>
            </div>

            <div className="position-relative mt-auto full-width">
              {hotel.discount ? (
                <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                  <span className="label bg-success text-light">{hotel.discount}% Off</span>
                </div>
              ) : null}
              
              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                {hotel.originalPrice && (
                  <div className="text-muted-2 fw-medium text-decoration-line-through me-2">
                    ₹{hotel.originalPrice}
                  </div>
                )}
                <div className="text-dark fw-bold fs-3">₹{hotel.price || "N/A"}</div>
              </div>

              <div className="d-flex align-items-start align-items-md-end flex-column mb-2">
                <div className="text-muted-2 text-sm">+₹{hotel.taxes || 0} taxes & Fees</div>
                <div className="text-muted-2 text-sm">For {hotel.nights || 1} Nights</div>
              </div>

              <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                <button
                  onClick={(e) => handleCardClick(e, hotel._id)}
                  className="btn btn-md btn-primary full-width fw-medium px-lg-4"
                >
                  See Availability <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
