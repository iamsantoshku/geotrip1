// import React from 'react';

// const TourCard = ({ discount, imageSrc, location, tripType, duration, persons, priceRange }) => {
//   return (
//     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
//       <div className="pop-touritems">
//         <a href="#" className="card rounded-3 br-dashed border-2 m-0">
//           <div className="offers-container d-flex align-items-center justify-content-start p-2">
//             <div className="offers-flex position-relative">
//               <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
//                 <span className="label text-light bg-danger fw-medium">{discount} Off</span>
//               </div>
//               <div className="offers-pic">
//                 {/* Assuming dynamic images are in the public folder */}
//                 <img
//                   src={`${process.env.PUBLIC_URL}/assets/img/city/${imageSrc}`}
//                   className="img-fluid rounded"
//                   width="110"
//                   alt={location}
//                 />
//               </div>
//             </div>
//             <div className="offers-captions ps-3">
//               <h4 className="city fs-6 m-0 fw-bold">
//                 <span>{location}</span>
//               </h4>
//               <p className="detail ellipsis-container">
//                 <span className="ellipsis-item__normal">{tripType}</span>
//                 <span className="separate ellipsis-item__normal"></span>
//                 <span className="ellipsis-item">{duration}</span>
//                 <span className="separate ellipsis-item__normal"></span>
//                 <span className="ellipsis-item">{persons} Person</span>
//               </p>
//               <div className="booking-wrapes d-flex align-items-center justify-content-between">
//                 <h5 className="fs-5 low-price m-0">
//                   <span className="tag-span">From</span> <span className="price">{priceRange}</span>
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TourCard;

