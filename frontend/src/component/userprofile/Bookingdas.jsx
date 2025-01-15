// import React from 'react';

// const Bookingdas = ({bookings}) => {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <h4>
//           <i className="fa-solid fa-ticket me-2"></i>My Bookings
//         </h4>
//       </div>
//       <div className="card-body">
//         <div className="row align-items-center justify-content-start">
//           <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
//             <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
//               <li className="col-md-3 col-6">
//                 <input
//                   type="checkbox"
//                   className="btn-check"
//                   id="allbkk"
//                   defaultChecked
//                 />
//                 <label
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   htmlFor="allbkk"
//                 >
//                   All Booking:{bookings.length}
//                 </label>
//               </li>
//               <li className="col-md-3 col-6">
//                 <input
//                   type="checkbox"
//                   className="btn-check"
//                   id="processing"
//                 />
//                 <label
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   htmlFor="processing"
//                 >
//                   Processing (02)
//                 </label>
//               </li>
//               <li className="col-md-3 col-6">
//                 <input
//                   type="checkbox"
//                   className="btn-check"
//                   id="cancelled"
//                 />
//                 <label
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   htmlFor="cancelled"
//                 >
//                   Cancelled (04)
//                 </label>
//               </li>
//               <li className="col-md-3 col-6">
//                 <input
//                   type="checkbox"
//                   className="btn-check"
//                   id="completed"
//                 />
//                 <label
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   htmlFor="completed"
//                 >
//                   Completed (10)
//                 </label>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bookingdas;




// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Bookingdas = ({ bookings }) => {
//   const navigate = useNavigate(); // React Router's navigate function

//   const handleFilterClick = (filter) => {
//     // Navigate to the desired page based on the filter
//     if (filter === "cancelled") {
//       navigate("/cancelled-bookings");
//     } else if (filter === "processing") {
//       navigate("/processing-bookings");
//     } else if (filter === "completed") {
//       navigate("/completed-bookings");
//     } else {
//       navigate("/all-bookings");
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card-header">
//         <h4>
//           <i className="fa-solid fa-ticket me-2"></i>My Bookings
//         </h4>
//       </div>
//       <div className="card-body">
//         <div className="row align-items-center justify-content-start">
//           <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
//             <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
//               <li className="col-md-3 col-6">
//                 <button
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   onClick={() => handleFilterClick("all")}
//                 >
//                   All Booking: {bookings.length}
//                 </button>
//               </li>
//               <li className="col-md-3 col-6">
//                 <button
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   onClick={() => handleFilterClick("processing")}
//                 >
//                   Processing (02)
//                 </button>
//               </li>
//               <li className="col-md-3 col-6">
//                 <button
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   onClick={() => handleFilterClick("cancelled")}
//                 >
//                   Cancelled (04)
//                 </button>
//               </li>
//               <li className="col-md-3 col-6">
//                 <button
//                   className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
//                   onClick={() => handleFilterClick("completed")}
//                 >
//                   Completed (10)
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bookingdas;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Bookingdas = ({ bookings }) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all"); // Default to "All Booking"

  const handleFilterClick = (filter) => {
    setActiveFilter(filter); // Update the active filter state
    if (filter === "cancelled") {
      navigate("/cancelled-bookings");
    } else if (filter === "processing") {
      navigate("/processing-bookings");
    } else if (filter === "completed") {
      navigate("/completed-bookings");
    } else {
      navigate("/my-bookings");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i className="fa-solid fa-ticket me-2"></i>My Bookings
        </h4>
      </div>
      <div className="card-body">
        <div className="row align-items-center justify-content-start">
          <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
              <li className="col-md-3 col-6">
                <button
                  className={`btn btn-sm ${
                    activeFilter === "all"
                      ? "btn-primary"
                      : "btn-secondary"
                  } rounded-1 fw-medium px-4 full-width`}
                  onClick={() => handleFilterClick("all")}
                >
                  All Booking: {bookings.length}
                </button>
              </li>
              <li className="col-md-3 col-6">
                <button
                  className={`btn btn-sm ${
                    activeFilter === "processing"
                      ? "btn-primary"
                      : "btn-secondary"
                  } rounded-1 fw-medium px-4 full-width`}
                  onClick={() => handleFilterClick("processing")}
                >
                  Processing (02)
                </button>
              </li>
              <li className="col-md-3 col-6">
                <button
                  className={`btn btn-sm ${
                    activeFilter === "cancelled"
                      ? "btn-primary"
                      : "btn-secondary"
                  } rounded-1 fw-medium px-4 full-width`}
                  onClick={() => handleFilterClick("cancelled")}
                >
                  Cancelled (04)
                </button>
              </li>
              <li className="col-md-3 col-6">
                <button
                  className={`btn btn-sm ${
                    activeFilter === "completed"
                      ? "btn-primary"
                      : "btn-secondary"
                  } rounded-1 fw-medium px-4 full-width`}
                  onClick={() => handleFilterClick("completed")}
                >
                  Completed (10)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingdas;
