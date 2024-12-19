




// import React from "react";
// import { useLocation } from "react-router-dom";

// const Roombook = () => {
//   const location = useLocation();
//   const { room, hotelName } = location.state || {}; // Retrieve state passed from RoomDetails

//   if (!room || !hotelName) {
//     return <p>Room or hotel details are missing.</p>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="fw-bold mb-4">{hotelName} - Booking Details</h2>
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">{room.type}</h5>
//           <p className="card-text">Price: ₹{room.price}</p>
//           <p className="card-text">Description: {room.description}</p>
//           <p className="card-text">
//             Refundable: {room.isRefundable ? "Yes" : "No"}
//           </p>
//           {/* Add more details as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roombook;






import React from 'react'
import { useLocation } from "react-router-dom";
import Hotel from '../../pages/Hotel';
import { BACKENDURL } from '../../Config/Config';

const Roombook = () => {

    const location = useLocation();
    const { room, hotelName } = location.state || {}; // Retrieve state passed from RoomDetails

    if (!room || !hotelName) {
        return <p>Room or hotel details are missing.</p>;
    }

    const {
        originalPrice = 0,
        price = 0,
        discount = 0,
        quantity = 1, // Optional: if booking multiple rooms
      } = room;
    
      // Calculate discounted price dynamically
      const discountedPrice = price || originalPrice - (originalPrice * discount) / 100;
    
      // Calculate total price based on quantity
      const totalPrice = discountedPrice * quantity;
    return (
        <div>
            <section class="pt-4 gray-simple position-relative">
                <div class="container">

                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div id="stepper" class="bs-stepper stepper-outline mb-5">
                                <div class="bs-stepper-header">
                                    {/* <!-- Step 1 --> */}
                                    <div class="step active" data-target="#step-1">
                                        <div class="text-center">
                                            <button type="button" class="step-trigger mb-0" id="steppertrigger1">
                                                <span class="bs-stepper-circle">1</span>
                                            </button>
                                            <h6 class="bs-stepper-label d-none d-md-block">Tour Review</h6>
                                        </div>
                                    </div>
                                    <div class="line"></div>

                                    {/* <!-- Step 2 --> */}
                                    <div class="step" data-target="#step-2">
                                        <div class="text-center">
                                            <button type="button" class="step-trigger mb-0" id="steppertrigger2">
                                                <span class="bs-stepper-circle">2</span>
                                            </button>
                                            <h6 class="bs-stepper-label d-none d-md-block">Traveler Info</h6>
                                        </div>
                                    </div>
                                    <div class="line"></div>

                                    {/* <!-- Step 3 --> */}
                                    <div class="step" data-target="#step-3">
                                        <div class="text-center">
                                            <button type="button" class="step-trigger mb-0" id="steppertrigger3">
                                                <span class="bs-stepper-circle">3</span>
                                            </button>
                                            <h6 class="bs-stepper-label d-none d-md-block">Make Payment</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-start">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="row align-items-start">
                                <div class="col-xl-8 col-lg-8 col-md-12">
                                    <div class="card p-3 mb-xl-0 mb-lg-0 mb-3">

                                        {/* <!-- Booking Info --> */}
                                        <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
                                            <div className="row">
                                                {/* Room Image */}
                                                <div className="col-xl-4 col-lg-3 col-md">
                                                    <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                                        <img
                                                            src={`${BACKENDURL}/${room.images[0]}`} // First image from the array
                                                            className="img-fluid rounded-2 col-xl-12 h-100 object-fit"
                                                            alt={room.type}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Room Details */}
                                                <div className="col-xl col-lg col-md">
                                                    <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                                        <div className="d-flex align-items-center justify-content-start">
                                                            <div className="d-inline-block">
                                                                {/* Room Rating */}
                                                                <i className="fa fa-star text-warning text-xs"></i>
                                                                <i className="fa fa-star text-warning text-xs"></i>
                                                                <i className="fa fa-star text-warning text-xs"></i>
                                                                <i className="fa fa-star text-warning text-xs"></i>
                                                                <i className="fa fa-star text-warning text-xs"></i>
                                                            </div>
                                                        </div>
                                                        {/* <h4 className="fs-5 fw-bold mb-1">{hotel.name}</h4> */}
                                                        <h4 className="fs-5 fw-bold mb-1">{hotelName || "Hotel Name Unavailable"}</h4>
                                                        <ul className="row g-2 p-0">
                                                            <li className="col-auto">
                                                                <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                                            </li>
                                                            <li className="col-auto">
                                                                <p className="text-muted-2 text-md fw-bold">.</p>
                                                            </li>
                                                            <li className="col-auto">
                                                                <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                                            </li>
                                                        </ul>
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="col-auto">
                                                                <div className="square--40 rounded-2 bg-primary text-light fw-semibold">{room.type}</div>
                                                            </div>
                                                            <div className="col-auto text-start ps-2">
                                                                <div className="text-md text-dark fw-medium">{room.amenities.join(", ")}</div>
                                                                <div className="text-md text-muted-2">3,014 reviews</div>
                                                            </div>
                                                        </div>
                                                        <div className="position-relative mt-3">
                                                            <div className="d-flex flex-wrap align-items-center">
                                                                {/* Room Bed Type */}
                                                                <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-bed"></i></div>
                                                                    <div className="export ps-2">
                                                                        <span className="mb-0 text-muted-2 text-md">{room.bedType}</span>
                                                                    </div>
                                                                </div>
                                                                {/* Room Bathrooms */}
                                                                <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-bath"></i></div>
                                                                    <div className="export ps-2">
                                                                        <span className="mb-0 text-muted-2 fw-semibold me-1">02</span><span className="mb-0 text-muted-2 text-md">Baths</span>
                                                                    </div>
                                                                </div>
                                                                {/* Room Floor */}
                                                                <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-house-flood-water-circle-arrow-right"></i></div>
                                                                    <div className="export ps-2">
                                                                        <span className="mb-0 text-muted-2 fw-semibold me-1">{room.floor || "N/A"}</span><span className="mb-0 text-muted-2 text-md">Floor</span>
                                                                    </div>
                                                                </div>
                                                                {/* Room Guests */}
                                                                <div className="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
                                                                    <div className="export-icon text-muted-2"><i className="fa-solid fa-user-group"></i></div>
                                                                    <div className="export ps-2 text-muted-2">
                                                                        <span className="mb-0 text-muted-2 fw-semibold me-1">{room.sleeps}</span><span className="mb-0 text-muted-2 text-md">Guests</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Room Description */}
                                                        <div className="mt-3">
                                                            <h6 className="fw-semibold">Description</h6>
                                                            <p className="text-muted-2">{room.description}</p>
                                                        </div>
                                                        {/* Room Price */}
                                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                                            <div>
                                                                <p className="text-muted-2 mb-1"><s>₹{room.originalPrice}</s></p>
                                                                <h4 className="fw-bold text-primary">₹{room.price}</h4>
                                                                <p className="text-success">{room.discount}% Off</p>
                                                            </div>
                                                            {/* <div>
            <button className="btn btn-primary">Book Now</button>
          </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-4 col-md-12">
                                    <div class="side-block card rounded-2 p-3">
                                        <h5 class="fw-semibold fs-6">Reservation Summary</h5>
                                        <div class="mid-block rounded-2 border br-dashed p-2 mb-3">
                                            <div class="row align-items-center justify-content-between g-2 mb-4">
                                                <div class="col-6">
                                                    <div class="gray rounded-2 p-2">
                                                        <span class="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-In</span>
                                                        <p class="text-dark fw-semibold lh-base text-md mb-0">27 Aug 2023</p>
                                                        <span class="text-dark text-md">From 14:40</span>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="gray rounded-2 p-2">
                                                        <span class="d-block text-muted-3 text-sm fw-medium text-uppercase mb-2">Check-Out</span>
                                                        <p class="text-dark fw-semibold lh-base text-md mb-0">31 Aug 2023</p>
                                                        <span class="text-dark text-md">By 11:50</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center justify-content-between mb-4">
                                                <div class="col-12">
                                                    <p class="text-muted-2 text-sm text-uppercase fw-medium mb-1">Total Length of Stay:</p>
                                                    <div class="d-flex align-items-center">
                                                        <div class="square--30 circle text-seegreen bg-light-seegreen"><i
                                                            class="fa-regular fa-calendar"></i></div><span class="text-dark fw-semibold ms-2">3 Days \
                                                                2 Night</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center justify-content-between">
                                                <div class="col-12">
                                                    <p class="text-muted-2 text-sm text-uppercase fw-medium mb-1">You Selected</p>
                                                    <div class="d-flex align-items-center flex-column">
                                                        <p class="mb-0">King Bed Appolo Resort with 3 Rooms. <a href="#"
                                                            class="fw-medum text-primary">Change your Selection</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                       

<div className="bott-block d-block mb-3">
      <h5 className="fw-semibold fs-6">Your Price Summary</h5>
      <ul className="list-group list-group-borderless">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="fw-medium mb-0">Rooms charge</span>
          <span className="fw-semibold">₹{originalPrice.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="fw-medium mb-0">Rooms charge in offer</span>
          <span className="fw-semibold">₹{discountedPrice.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="fw-medium mb-0">
            Total Discount
            <span className="badge rounded-1 text-bg-danger smaller mb-0 ms-2"></span>
          </span>
          <span className="fw-semibold">{discount}%</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span className="fw-medium text-success mb-0">Total Price</span>
          <span className="fw-semibold text-success">₹{totalPrice.toFixed(2)}</span>
        </li>
      </ul>
    </div>

                                        <div class="bott-block">
                                            <button class="btn fw-medium btn-primary full-width" type="button">Request To Book</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="text-center d-flex align-items-center justify-content-center mt-4">
                                <a href="bookingpage-02.html" class="btn btn-md btn-primary fw-semibold">Next<i
                                    class="fa-solid fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Roombook














{/* <div class="card-box list-layout-block border br-dashed rounded-3 p-2">
										<div class="row">

											<div class="col-xl-4 col-lg-3 col-md">
												<div class="cardImage__caps rounded-2 overflow-hidden h-100">
													{/* <img class="img-fluid h-100 object-fit" src="assets/img/hotel/hotel-1.jpg" alt="image"/> */}
//                             <img
//     src={`${BACKENDURL}/${room.images[0]}`} // First image from array
//     className="img-fluid rounded-2 col-xl-12"
//     alt={room.type}
//   />
// 						</div>
// 					</div>

// 					<div class="col-xl col-lg col-md">
// 						<div class="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
// 							<div class="d-flex align-items-center justify-content-start">
// 								<div class="d-inline-block">
// 									<i class="fa fa-star text-warning text-xs"></i>
// 									<i class="fa fa-star text-warning text-xs"></i>
// 									<i class="fa fa-star text-warning text-xs"></i>
// 									<i class="fa fa-star text-warning text-xs"></i>
// 									<i class="fa fa-star text-warning text-xs"></i>
// 								</div>
// 							</div>
// 							<h4 class="fs-5 fw-bold mb-1">{hotelName}</h4>
// 							<ul class="row g-2 p-0">
// 								<li class="col-auto">
// 									<p class="text-muted-2 text-md">Waterloo and Southwark</p>
// 								</li>
// 								<li class="col-auto">
// 									<p class="text-muted-2 text-md fw-bold">.</p>
// 								</li>
// 								<li class="col-auto">
// 									<p class="text-muted-2 text-md">9.8 km from Delhi Airport</p>
// 								</li>
// 							</ul>
// 							<div class="d-flex align-items-center mb-3">
// 								<div class="col-auto">
// 									<div class="square--40 rounded-2 bg-primary text-light fw-semibold">{room.type}</div>
// 								</div>
// 								<div class="col-auto text-start ps-2">
// 									<div class="text-md text-dark fw-medium">{room.amenities}</div>
// 									<div class="text-md text-muted-2">3,014 reviews</div>
// 								</div>

// 							</div>
// 							<div class="position-relative mt-3">
// 								<div class="d-flex flex-wrap align-items-center">
// 									<div class="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
// 										<div class="export-icon text-muted-2"><i class="fa-solid fa-bed"></i></div>
// 										<div class="export ps-2">
// 											<span class="mb-0 text-muted-2 fw-semibold me-1"></span><span
// 												class="mb-0 text-muted-2 text-md">{
//                                                     room.bedType}</span>
// 										</div>
// 									</div>
// 									<div class="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
// 										<div class="export-icon text-muted-2"><i class="fa-solid fa-bath"></i></div>
// 										<div class="export ps-2">
// 											<span class="mb-0 text-muted-2 fw-semibold me-1">02</span><span
// 												class="mb-0 text-muted-2 text-md">Baths</span>
// 										</div>
// 									</div>
// 									<div class="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
// 										<div class="export-icon text-muted-2"><i
// 												class="fa-solid fa-house-flood-water-circle-arrow-right"></i></div>
// 										<div class="export ps-2">
// 											<span class="mb-0 text-muted-2 fw-semibold me-1">5</span><span
// 												class="mb-0 text-muted-2 text-md">Floor</span>
// 										</div>
// 									</div>
// 									<div class="d-inline-flex align-items-center border br-dashed rounded-2 p-2 me-2 mb-2">
// 										<div class="export-icon text-muted-2"><i class="fa-solid fa-user-group"></i></div>
// 										<div class="export ps-2 text-muted-2">
// 											<span class="mb-0 text-muted-2 fw-semibold me-1">04</span><span
// 												class="mb-0 text-muted-2 text-md">Guests</span>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// </div>	 */}