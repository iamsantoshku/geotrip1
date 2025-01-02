// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for dropdown functionality

// const AccountDropdown = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className="btn-group account-drop">
//       {/* Button to toggle dropdown */}
//       <button
//         type="button"
//         className="btn btn-order-by-filt"
//         onClick={toggleDropdown}
//         aria-haspopup="true"
//         aria-expanded={showDropdown}
//       >
//         <img src="/assets/img/team-5.jpg" className="img-fluid" alt="Profile" />
//       </button>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <div className="dropdown-menu pull-right animated flipInX show">
//           {/* Dropdown Header */}
//           <div className="drp_menu_headr d-flex justify-content-between align-items-center">
//             <h4>Hi, Dhananjay</h4>
//             <button
//               type="button"
//               className="btn btn-md fw-medium btn-whites text-dark"
//               onClick={() => alert('Logging out...')}
//             >
//               Logout
//             </button>
//           </div>

//           {/* Dropdown Items */}
//           <ul>
//             <li>
//               <a href="my-profile.html">
//                 <i className="fa-regular fa-id-card me-2"></i>
//                 My Profile
//                 <span className="notti_coun style-1">4</span>
//               </a>
//             </li>
//             <li>
//               <a href="my-booking.html">
//                 <i className="fa-solid fa-ticket me-2"></i>
//                 My Booking
//               </a>
//             </li>
//             <li>
//               <a href="travelers.html">
//                 <i className="fa-solid fa-user-group me-2"></i>
//                 Travelers
//               </a>
//             </li>
//             <li>
//               <a href="payment-detail.html">
//                 <i className="fa-solid fa-wallet me-2"></i>
//                 Payment Details
//               </a>
//             </li>
//             <li>
//               <a href="my-wishlists.html">
//                 <i className="fa-solid fa-shield-heart me-2"></i>
//                 My Wishlist
//               </a>
//             </li>
//             <li>
//               <a href="login.html">
//                 <i className="fa-solid fa-power-off me-2"></i>
//                 Sign Out
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccountDropdown;




// import React, { useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { authContext } from '../../context/authContext';

// const AccountDropdown = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();
//   const { dispatch } = useContext(authContext);

//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };



// const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/#");
//   };


//   return (
//     <div className="btn-group account-drop">
//       {/* Button to toggle dropdown */}
//       <button
//         type="button"
//         className="btn btn-order-by-filt"
//         onClick={toggleDropdown}
//         aria-haspopup="true"
//         aria-expanded={showDropdown}
//       >
//         <img src="/assets/img/team-5.jpg" className="img-fluid" alt="Profile" />
//       </button>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <div className="dropdown-menu pull-right animated flipInX show">
//           {/* Dropdown Header */}
//           <div className="drp_menu_headr d-flex justify-content-between align-items-center">
//             <h4>Hi, Dhananjay</h4>
//             <button
//               type="button"
//               className="btn btn-md fw-medium btn-whites text-dark"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>

//           {/* Dropdown Items */}
//           <ul>
//             <li>
//               <a href="user-profile">
//                 <i className="fa-regular fa-id-card me-2"></i>
//                 My Profile
//                 <span className="notti_coun style-1">4</span>
//               </a>
//             </li>
//             <li>
//               <a href="my-booking">
//                 <i className="fa-solid fa-ticket me-2"></i>
//                 My Booking
//               </a>
//             </li>
//             <li>
//               <a href="travelers.html">
//                 <i className="fa-solid fa-user-group me-2"></i>
//                 Travelers
//               </a>
//             </li>
//             <li>
//               <a href="payment-detail.html">
//                 <i className="fa-solid fa-wallet me-2"></i>
//                 Payment Details
//               </a>
//             </li>
//             <li>
//               <a href="my-wishlists.html">
//                 <i className="fa-solid fa-shield-heart me-2"></i>
//                 My Wishlist
//               </a>
//             </li>
//             <li>
//               <a href="login.html">
//                 <i className="fa-solid fa-power-off me-2"></i>
//                 Sign Out
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccountDropdown;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/authContext';
import { use } from 'react';

const AccountDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { dispatch, user } = useContext(authContext);

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/#");
  };

  return (
    <div className="btn-group account-drop">
      {/* Button to toggle dropdown */}
      <button
        type="button"
        className="btn btn-order-by-filt"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <img src="/assets/img/team-5.jpg" className="img-fluid" alt="Profile" />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="dropdown-menu pull-right animated flipInX show">
          {/* Dropdown Header */}
          <div className="drp_menu_headr d-flex justify-content-between align-items-center">
            <h4>Hi, {user.name}</h4>
            <button
              type="button"
              className="btn btn-md fw-medium btn-whites text-dark"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          {/* Dropdown Items */}
          <ul>
            <li>
              <a href="user-profile">
                <i className="fa-regular fa-id-card me-2"></i>
                My Profile
                <span className="notti_coun style-1">4</span>
              </a>
            </li>
            <li>
              <a href="my-bookings">
                <i className="fa-solid fa-ticket me-2"></i>
                My Booking
              </a>
            </li>
            <li>
              <a href="travelers">
                <i className="fa-solid fa-user-group me-2"></i>
                Travelers
              </a>
            </li>
            <li>
              <a href="payment-detail">
                <i className="fa-solid fa-wallet me-2"></i>
                Payment Details
              </a>
            </li>
            <li>
              <a href="my-wishlists.html">
                <i className="fa-solid fa-shield-heart me-2"></i>
                My Wishlist
              </a>
            </li>
            {/* Admin Panel Section */}
            {isAdmin && (
              <li>
                <a href="admin-panel">
                  <i className="fa-solid fa-tools me-2"></i>
                  Admin Panel
                </a>
              </li>
            )}
            <li>
              <a href="login.html">
                <i className="fa-solid fa-power-off me-2"></i>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
