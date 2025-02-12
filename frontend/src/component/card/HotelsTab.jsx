// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HotelsTab = () => {
  
//   const [city, setCity] = useState("");
//   const [checkInDate, setCheckInDate] = useState("")
//   const [guests, setGuests] = useState(1);
//   const [checkOutDate, setCheckOutDate] = useState("");

//   const navigate = useNavigate();

//   const navToSearchPage = () => {
//     const { city,checkInDate,guests } =fordata();
//     navigate(`/home-hotel?city=${city}&checkInDate=${checkInDate}&guests=${guests}`);
//   };

//   return (
//     <div className="tab-pane show active" id="hotels">
//       <div className="row gy-3 gx-md-3 gx-sm-2">
//         {/* Left Section */}
//         <div className="col-xl-8 col-lg-7 col-md-12">
//           <div className="row gy-3 gx-md-3 gx-sm-2">
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
              

// {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6"> */}
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
//                       {/* </div> */}
//             </div>
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              

// <div className="form-group mb-0">
//                           <label>Check-In Date</label>
//                           <input
//                             type="date"
//                             className="form-control fw-bold"
//                             value={checkInDate}
//                             onChange={(e) => setCheckInDate(e.target.value)}
//                           />
//                         </div>
                        
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="col-xl-4 col-lg-5 col-md-12">
//           <div className="row gy-3 gx-md-3 gx-sm-2">
//             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//               {/* <div className="form-group mb-0">
//                 <div className="booking-form__input guests-input mixer-auto">
//                   <button name="guests-btn" id="guests-input-btn">
//                     {adults} Guest
//                   </button>
//                   <div className="guests-input__options" id="guests-input-options">
//                     <div>
//                       <span
//                         className="guests-input__ctrl minus"
//                         id="adults-subs-btn"
//                         onClick={() => handleDecrement("adults")}
//                       >
//                         <i className="fa-solid fa-minus"></i>
//                       </span>
//                       <span className="guests-input__value">
//                         <span id="guests-count-adults">{adults}</span> Adults
//                       </span>
//                       <span
//                         className="guests-input__ctrl plus"
//                         id="adults-add-btn"
//                         onClick={() => handleIncrement("adults")}
//                       >
//                         <i className="fa-solid fa-plus"></i>
//                       </span>
//                     </div>
//                     <div>
//                       <span
//                         className="guests-input__ctrl minus"
//                         id="children-subs-btn"
//                         onClick={() => handleDecrement("children")}
//                       >
//                         <i className="fa-solid fa-minus"></i>
//                       </span>
//                       <span className="guests-input__value">
//                         <span id="guests-count-children">{children}</span>{" "}
//                         Children
//                       </span>
//                       <span
//                         className="guests-input__ctrl plus"
//                         id="children-add-btn"
//                         onClick={() => handleIncrement("children")}
//                       >
//                         <i className="fa-solid fa-plus"></i>
//                       </span>
//                     </div>
//                     <div>
//                       <span
//                         className="guests-input__ctrl minus"
//                         id="room-subs-btn"
//                         onClick={() => handleDecrement("rooms")}
//                       >
//                         <i className="fa-solid fa-minus"></i>
//                       </span>
//                       <span className="guests-input__value">
//                         <span id="guests-count-room">{rooms}</span> Rooms
//                       </span>
//                       <span
//                         className="guests-input__ctrl plus"
//                         id="room-add-btn"
//                         onClick={() => handleIncrement("rooms")}
//                       >
//                         <i className="fa-solid fa-plus"></i>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

// <div className="form-group mb-0">
//                           <label>Guests</label>
//                           <input
//                             type="number"
//                             className="form-control"
//                             min="1"
//                             value={guests}
//                             onChange={(e) => setGuests(e.target.value)}
//                           />
//                         </div>
//             </div>
//             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//               <div className="form-group mb-0">
//                 <button
//                   type="button"
//                   className="btn btn-primary full-width fw-medium"
//                   onClick={navToSearchPage}
//                 >
//                   <i className="fa-solid fa-magnifying-glass me-2"></i>
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelsTab;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelsTab = () => {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  // const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const navToSearchPage = () => {
    if (!city || !checkInDate || !guests) {
      alert("Please fill out all fields");
      return;
    }

    navigate(
      `/hotel?city=${encodeURIComponent(
        city
      )}&checkInDate=${checkInDate}&guests=${guests}`
    );
  };

  return (
    <div className="tab-pane show active" id="hotels">
      <div className="row gy-3 gx-md-3 gx-sm-2">
        {/* Left Section */}
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
              <div className="form-group mb-0">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="form-group mb-0">
                <label>Check-In Date</label>
                <input
                  type="date"
                  className="form-control fw-bold"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="col-xl-4 col-lg-5 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <div className="form-group mb-0">
                <label>Guests</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="form-group mb-0">
                <button
                  type="button"
                  className="btn btn-primary full-width fw-medium"
                  onClick={navToSearchPage}
                >
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsTab;



