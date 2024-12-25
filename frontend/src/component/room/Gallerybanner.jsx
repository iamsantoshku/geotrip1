



// import React from 'react';


// const Gallerybanner = () => {
//   return (
//     <div>
//       <section className="pt-3 gray-simple">
//         <div className="container">
//           <div className="row">
//             {/* Breadcrumb */}
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
//                   <li className="breadcrumb-item"><a href="#" className="text-primary">Hotel in Denver, USA</a></li>
//                   <li className="breadcrumb-item active" aria-current="page">Royal Plaza on Scotts</li>
//                 </ol>
//               </nav>
//             </div>

//             {/* Gallery & Info */}
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="card border-0 p-3 mb-4">
//                 <div className="crd-heaader d-md-flex align-items-center justify-content-between">
//                   <div className="crd-heaader-first">
//                     <div className="d-inline-flex align-items-center mb-1">
//                       <span className="label bg-light-success text-success">Health Protected</span>
//                       <div className="d-inline-block ms-2">
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                         <i className="fa fa-star text-warning text-xs"></i>
//                       </div>
//                     </div>
//                     <div className="d-block">
//                       <h4 className="mb-0">Royal Plaza on Scotts</h4>
//                       <p className="text-md m-0">
//                         <i className="fa-solid fa-location-dot me-2"></i>577 Jalan Sultan Road Singapore, 245652 Singapore. 
//                         <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="crd-heaader-last my-md-0 my-2">
//                     <div className="drix-wrap d-flex align-items-center">
//                       <div className="drix-first pe-2">
//                         <div className="text-dark fw-semibold fs-4">US$107</div>
//                         <div className="d-flex align-items-center justify-content-start justify-content-md-end">
//                           <span className="label bg-success text-light">15% Off</span>
//                         </div>
//                       </div>
//                       <div className="drix-last">
//                         <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Gallery Images */}
//                 <div className="galleryGrid typeGrid_3 mt-2">
//                   {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4', 'hotel-5', 'hotel-6', 'hotel-7'].map((image, index) => (
//                     <div className="galleryGrid__item" key={index}>
//                       <a href={`/assets/img/hotel/${image}.jpg`} data-lightbox="roadtrip">
//                         <img src={`/assets/img/hotel.jpg`} alt="image" className="rounded-2 img-fluid" />
//                       </a>
//                     </div>
//                   ))}
//                   <div className="galleryGrid__item position-relative">
//                     <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip">
//                       <img src="/assets/img/hotel/hotel-7.jpg" alt="image" className="rounded-2 img-fluid" />
//                     </a>
//                     <div className="position-absolute end-0 bottom-0 mb-3 me-3">
//                       <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark">
//                         <i className="fa-solid fa-caret-right me-1"></i>16 More Photos
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* Top Attractions */}
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="row align-items-center justify-content-between gx-4">
//                 {['Top Attractions', 'Nearest Airport & Metro', 'Cafe & Bars'].map((category, index) => (
//                   <div className="col-xl-4 col-lg-4 col-md-4" key={index}>
//                     <div className="card p-3 mb-4">
//                       <div className="nearestServ-wrap">
//                         <div className="nearestServ-head d-flex mb-1">
//                           <h6 className="fs-6 fw-semibold text-primary mb-1"><i className={`fa-brands ${index === 0 ? 'fa-servicestack' : (index === 1 ? 'fa-jet-fighter' : 'fa-martini-glass-empty')} me-2`}></i>{category}</h6>
//                         </div>
//                         <div className="nearestServ-caps">
//                           <ul className="row align-items-start g-2 p-0 m-0">
//                             <li className="col-12 text-muted-2">Sample item 1 (170m)</li>
//                             <li className="col-12 text-muted-2">Sample item 2 (250m)</li>
//                             <li className="col-12 text-muted-2">Sample item 3 (80m)</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Login Alert */}
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
//                 <p className="text-light fw-semibold m-0">
//                   <i className="fa-solid fa-gift text-warning me-2"></i>
//                   <a href="#" className="text-white text-decoration-underline">Login</a> or 
//                   <a href="#" className="text-white text-decoration-underline">Register</a> to earn upto 100 coins (approx 1.72 US$) after check-out.
//                 </p>
//               </div>
//             </div>

//             {/* Rooms Details */}

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallerybanner;



import React from 'react';

const Gallerybanner = () => {
  return (
    <div>
      <section className="pt-3 gray-simple">
        <div className="container">
          <div className="row">
            {/* Breadcrumb */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
                  <li className="breadcrumb-item"><a href="#" className="text-primary">Hotel in Denver, USA</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Royal Plaza on Scotts</li>
                </ol>
              </nav>
            </div>

            {/* Gallery & Info */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card border-0 p-3 mb-4">
                <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                  <div className="crd-heaader-first">
                    <div className="d-inline-flex align-items-center mb-1">
                      <span className="label bg-light-success text-success">Health Protected</span>
                      <div className="d-inline-block ms-2">
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                        <i className="fa fa-star text-warning text-xs"></i>
                      </div>
                    </div>
                    <div className="d-block">
                      <h4 className="mb-0">Royal Plaza on Scotts</h4>
                      <p className="text-md m-0">
                        <i className="fa-solid fa-location-dot me-2"></i>577 Jalan Sultan Road Singapore, 245652 Singapore. 
                        <a href="#" className="text-primary fw-medium ms-2">Show on Map</a>
                      </p>
                    </div>
                  </div>
                  <div className="crd-heaader-last my-md-0 my-2">
                    <div className="drix-wrap d-flex align-items-center">
                      <div className="drix-first pe-2">
                        <div className="text-dark fw-semibold fs-4">US$107</div>
                        <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                          <span className="label bg-success text-light">15% Off</span>
                        </div>
                      </div>
                      <div className="drix-last">
                        <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="galleryGrid typeGrid_3 mt-2">
                  {['hotel-1', 'hotel-2', 'hotel-3', 'hotel-4', 'hotel-5', 'hotel-6', 'hotel-7'].map((image, index) => (
                    <div className="galleryGrid__item" key={index}>
                      <a href={`/assets/img/hotel/${image}.jpg`} data-lightbox="roadtrip">
                        <img src={`/assets/img/hotel/${image}.jpg`} alt={`Hotel ${index + 1}`} className="rounded-2 img-fluid" />
                      </a>
                    </div>
                  ))}
                  <div className="galleryGrid__item position-relative">
                    <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip">
                      <img src="/assets/img/hotel/hotel-7.jpg" alt="More Photos" className="rounded-2 img-fluid" />
                    </a>
                    <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                      <a href="/assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark">
                        <i className="fa-solid fa-caret-right me-1"></i>16 More Photos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Attractions */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="row align-items-center justify-content-between gx-4">
                {['Top Attractions', 'Nearest Airport & Metro', 'Cafe & Bars'].map((category, index) => (
                  <div className="col-xl-4 col-lg-4 col-md-4" key={index}>
                    <div className="card p-3 mb-4">
                      <div className="nearestServ-wrap">
                        <div className="nearestServ-head d-flex mb-1">
                          <h6 className="fs-6 fw-semibold text-primary mb-1">
                            <i className={`fa-brands ${index === 0 ? 'fa-servicestack' : (index === 1 ? 'fa-jet-fighter' : 'fa-martini-glass-empty')} me-2`}></i>
                            {category}
                          </h6>
                        </div>
                        <div className="nearestServ-caps">
                          <ul className="row align-items-start g-2 p-0 m-0">
                            <li className="col-12 text-muted-2">Sample item 1 (170m)</li>
                            <li className="col-12 text-muted-2">Sample item 2 (250m)</li>
                            <li className="col-12 text-muted-2">Sample item 3 (80m)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Alert */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
                <p className="text-light fw-semibold m-0">
                  <i className="fa-solid fa-gift text-warning me-2"></i>
                  <a href="#" className="text-white text-decoration-underline">Login</a> or 
                  <a href="#" className="text-white text-decoration-underline">Register</a> to earn up to 100 coins (approx 1.72 US$) after check-out.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallerybanner;





// {/* <div id="stepper" className="bs-stepper stepper-outline mb-5">
// 							<div className="bs-stepper-header">
// 								{/* <!-- Step 1 --> */}
// 								<div class="step completed" data-target="#step-1">
// 									<div className="text-center">
// 										<button type="button" className="step-trigger mb-0" id="steppertrigger1">
// 											<span className="bs-stepper-circle"><i className="fa-solid fa-check"></i></span>
// 										</button>
// 										<h6 className="bs-stepper-label d-none d-md-block">Tour Review</h6>
// 									</div>
// 								</div>
// 								<div className="line"></div>

// 								{/* <!-- Step 2 --> */}
// 								<div className="step active" data-target="#step-2">
// 									<div className="text-center">
// 										<button type="button" className="step-trigger mb-0" id="steppertrigger2">
// 											<span className="bs-stepper-circle">2</span>
// 										</button>
// 										<h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
// 									</div>
// 								</div>
// 								<div className="line"></div>

// 								{/* <!-- Step 3 --> */}
// 								<div className="step" data-target="#step-3">
// 									<div className="text-center">
// 										<button type="button" className="step-trigger mb-0" id="steppertrigger3">
// 											<span className="bs-stepper-circle">3</span>
// 										</button>
// 										<h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
// 									</div>
// 								</div>
// 							</div>

             
// 						</div> */}





// payment 

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { BACKENDURL } from "../../Config/Config";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("your-publishable-key-here"); // Replace with your Stripe publishable key

// const BookingForm = () => {
//   const location = useLocation();
//   const { room, hotelName, transactionDetails } = location.state || {};

//   const [guests, setGuests] = useState([
//     { firstName: "", lastName: "", dateOfBirth: "", passportNumber: "" },
//   ]);

//   const addGuest = () => {
//     setGuests([
//       ...guests,
//       { firstName: "", lastName: "", dateOfBirth: "", passportNumber: "" },
//     ]);
//   };

//   const handleInputChange = (index, field, value) => {
//     const updatedGuests = guests.map((guest, i) =>
//       i === index ? { ...guest, [field]: value } : guest
//     );
//     setGuests(updatedGuests);
//   };

//   const removeGuest = (index) => {
//     setGuests(guests.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (paymentMethod) => {
//     const bookingDetails = {
//       room,
//       hotelName,
//       transactionDetails,
//       guests,
//       paymentMethodId: paymentMethod.id,
//     };

//     fetch(`${BACKENDURL}/api/bookings`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(bookingDetails),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           alert("Booking and payment successful!");
//         } else {
//           alert("Payment failed: " + data.message);
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("An error occurred during booking.");
//       });
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div>
//         <section className="pt-4 gray-simple position-relative">
//           <div className="card p-3 mb-xl-0 mb-lg-0 mb-3">
//             <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
//               <div className="row">
//                 <div className="col-xl-4 col-lg-3 col-md">
//                   <div className="cardImage__caps rounded-2 overflow-hidden h-100">
//                     <img
//                       src={`${BACKENDURL}/${room.images[0]}`}
//                       className="img-fluid rounded-2 col-xl-12 h-100 object-fit"
//                       alt={room.type}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-xl col-lg col-md">
//                   <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
//                     <h4 className="fs-5 fw-bold mb-1">{hotelName || "Hotel Name Unavailable"}</h4>
//                     <div className="d-flex align-items-center mb-3">
//                       <div className="col-auto">
//                         <div className="square--40 rounded-2 bg-primary text-light fw-semibold">{room.type}</div>
//                       </div>
//                       <div className="col-auto text-start ps-2">
//                         <div className="text-md text-dark fw-medium">{room.amenities.join(", ")}</div>
//                       </div>
//                     </div>
//                     <div className="mt-3">
//                       <h6 className="fw-semibold">Description</h6>
//                       <p className="text-muted-2">{room.description}</p>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mt-4">
//                       <div>
//                         <p className="text-muted-2 mb-1"><s>₹{room.originalPrice}</s></p>
//                         <h4 className="fw-bold text-primary">₹{room.price}</h4>
//                         <p className="text-success">{room.discount}% Off</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <h4>Guest Details</h4>
//             <div className="row align-items-start">
//               <div className="col-xl-8 col-lg-8 col-md-12">
//                 {guests.map((guest, index) => (
//                   <div className="card mb-3" key={index}>
//                     <div className="card-header d-flex justify-content-between align-items-center">
//                       <h4>Guest {index + 1}</h4>
//                       {guests.length > 1 && (
//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => removeGuest(index)}
//                         >
//                           Remove
//                         </button>
//                       )}
//                     </div>
//                     <div className="card-body">
//                       <div className="row">
//                         <div className="col-xl-6 col-lg-6 col-md-6">
//                           <div className="form-group">
//                             <label className="form-label">First Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="First Name"
//                               value={guest.firstName}
//                               onChange={(e) =>
//                                 handleInputChange(index, "firstName", e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xl-6 col-lg-6 col-md-6">
//                           <div className="form-group">
//                             <label className="form-label">Last Name</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Last Name"
//                               value={guest.lastName}
//                               onChange={(e) =>
//                                 handleInputChange(index, "lastName", e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xl-6 col-lg-6 col-md-6">
//                           <div className="form-group">
//                             <label className="form-label">Date of Birth</label>
//                             <input
//                               type="date"
//                               className="form-control"
//                               value={guest.dateOfBirth}
//                               onChange={(e) =>
//                                 handleInputChange(index, "dateOfBirth", e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="col-xl-6 col-lg-6 col-md-6">
//                           <div className="form-group">
//                             <label className="form-label">Passport Number</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Passport Number"
//                               value={guest.passportNumber}
//                               onChange={(e) =>
//                                 handleInputChange(index, "passportNumber", e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <button className="btn btn-secondary" onClick={addGuest}>
//                   Add Guest
//                 </button>
//               </div>
//               <div className="col-xl-4 col-lg-4 col-md-12">
//                 <h5>Reservation Summary</h5>
//                 <p>Hotel: {hotelName}</p>
//                 <p>Total Price: ₹{transactionDetails.totalPrice}</p>
//                 <StripePayment
//                   totalPrice={transactionDetails.totalPrice}
//                   handleSubmit={handleSubmit}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Elements>
//   );
// };

// const StripePayment = ({ totalPrice, handleSubmit }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async () => {
//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);
//     const { paymentMethod, error } = await stripe.createPaymentMethod({

