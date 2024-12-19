

// import React from "react";
// import { BACKENDURL } from "../../Config/Config";
// import { useNavigate } from "react-router-dom";

// const HotelList = ({ hotel = [] }) => {

//   const navigate = useNavigate();

//   // Navigate to Room Details page when a user clicks on the card
//   const handleCardClick = (e) => {
//     e.preventDefault();
//     navigate(`/room-details/${hotel._id}`);
//   };
  
//   return (
//     <div onClick={handleCardClick} className="hotel-list container mt-5">
//       <h2 className="text-center mb-4">Available Hotels</h2>
//       <div className="row">
//         {hotel.length > 0 ? (
//           hotel.map((hotel) => (
//             <div key={hotel._id} className="col-md-4 col-sm-6 mb-4">
//               <div className="card h-100 shadow">               
// <img
//               src={BACKENDURL + `/${hotel.thumbnail}`}  // Adjust to your backend URL for image
//               className="img-fluid"
//               alt={`Image of ${hotel.name}`}
//             />
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
//     </div>
//   );
// };

// export default HotelList;




import React from "react";
import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";

const HotelList = ({ hotel = [] }) => {
  const navigate = useNavigate();

  // Navigate to Room Details page
  const handleCardClick = (e, hotelId) => {
    e.preventDefault();
    navigate(`/room-details/${hotelId}`);
  };

  return (
    <div className="hotel-list container mt-5">
      <h2 className="text-center mb-4">Available Hotels</h2>
      <div className="row">
        {hotel.length > 0 ? (
          hotel.map((hotel) => (
            <div key={hotel._id} className="col-md-4 col-sm-6 mb-4">
              <div
                onClick={(e) => handleCardClick(e, hotel._id)}
                className="card h-100 shadow cursor-pointer"
              >
                <img
                  src={BACKENDURL + `/${hotel.thumbnail}`}
                  className="img-fluid"
                  alt={`Image of ${hotel.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {hotel.location || "Unknown"}
                  </p>
                  <p className="card-text">
                    <strong>Distance:</strong> {hotel.distance || "N/A"} km
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{hotel.price || "N/A"}{" "}
                    {hotel.originalPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ₹{hotel.originalPrice}
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {hotel.rating || "Not Rated"} ★
                  </p>
                  <p className="card-text">
                    <strong>Amenities:</strong>{" "}
                    {hotel.amenities?.join(", ") || "Not specified"}
                  </p>
                  <p className="card-text">
                    <strong>Cancellation Policy:</strong>{" "}
                    {hotel.cancellationPolicy || "No policy specified"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hotels found. Please refine your search.</p>
        )}
      </div>
    </div>
  );
};

export default HotelList;



// const HotelList = ({ hotel }) => {
//   const navigate = useNavigate();

//   // Navigate to Room Details page when a user clicks on the card
//   const handleCardClick = (e) => {
//     e.preventDefault();
//     navigate(`/room-details/${hotel._id}`);
//   };
  
//   return (
//     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
//       <div className="pop-touritem shadow-sm">
//         {/* Hotel Card Link */}
//         <a href="room-details" onClick={handleCardClick} className="card rounded-3 m-0 text-decoration-none">
//           {/* Hotel Thumbnail */}
//           <div className="flight-thumb-wrapper">
//             <div className="popFlights-item-overHidden">

// <img
//               src={BACKENDURL + `/${hotel.thumbnail}`}  // Adjust to your backend URL for image
//               className="img-fluid"
//               alt={`Image of ${hotel.name}`}
//             />
 
//             </div>
//           </div>

//           {/* Hotel Information */}
//           <div className="touritem-middle position-relative p-3">
//             {/* Hotel Name and Location */}
//             <h4 className="city fs-title m-0 fw-bold">{hotel.name}</h4>
//             <p className="detail text-secondary mb-2">
//               {hotel.location} <span className="separate text-muted">|</span> {hotel.distance} km from center
//             </p>

//             {/* Cancellation Policy */}
//             <div className="touritem-centrio mt-2 d-flex align-items-center">
//               <p className="mb-0 text-success fw-bold">Free cancellation</p>
//               <span className="label bg-light-success text-success ms-2">
//                 {hotel.cancellationPolicy}
//               </span>
//             </div>

//             {/* Amenities */}
//             <ul className="aments-lists mt-2 list-unstyled d-flex flex-wrap">
//               {hotel.amenities.slice(0, 3).map((facility, index) => (
//                 <li key={index} className="text-dark d-inline-flex align-items-center me-3">
//                   <i className="fa-solid fa-check text-success me-1"></i> {facility}
//                 </li>
//               ))}
//             </ul>

//             {/* Price, Discount, and Rating */}
//             <div className="trsms-foots mt-3 d-flex align-items-end justify-content-between">
//               {/* Price Section */}
//               <div>
//                 <span className="label bg-success text-light mb-1 px-2 py-1 rounded">
//                   {hotel.discount}% Off
//                 </span>
//                 <div className="text-dark fw-bold fs-5">US${hotel.price}</div>
//                 <div className="text-muted text-decoration-line-through small">
//                   US${hotel.originalPrice}
//                 </div>
//                 <div className="text-muted small">Per Night</div>
//               </div>

//               {/* Rating Section */}
//               <div className="d-flex flex-column align-items-end">
//                 <span className="text-success fw-medium">Exceptional</span>
//                 <span className="text-muted small">{hotel.reviews} reviews</span>
//                 <div
//                   className="square--40 bg-primary text-light d-flex justify-content-center align-items-center rounded"
//                   style={{ width: "40px", height: "40px" }}
//                 >
//                   {hotel.rating}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HotelList;