



// import React, { useState } from 'react';

// const Bookingform3 = () => {
//   const [formData, setFormData] = useState({
//     billingName: '',
//     email: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     country: '',
//     cityState: '',
//     postalCode: '',
//     specialNotes: '',
//     paymentMethod: 'visa',
//     autoPay: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePaymentChange = (e) => {
//     setFormData({ ...formData, paymentMethod: e.target.id });
//   };

//   const handleAutoPayToggle = () => {
//     setFormData({ ...formData, autoPay: !formData.autoPay });
//   };

//   const handleSubmit = () => {
//     console.log('Form Submitted:', formData);
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div>
//       <section className="pt-4 gray-simple position-relative">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div id="stepper" className="bs-stepper stepper-outline mb-5">
//                 <div className="bs-stepper-header">
//                   <div className="step completed" data-target="#step-1">
//                     <div className="text-center">
//                       <button type="button" className="step-trigger mb-0" id="steppertrigger1">
//                         <span className="bs-stepper-circle">
//                           <i className="fa-solid fa-check"></i>
//                         </span>
//                       </button>
//                       <h6 className="bs-stepper-label d-none d-md-block">Tour Review</h6>
//                     </div>
//                   </div>
//                   <div className="line"></div>
//                   <div className="step completed" data-target="#step-2">
//                     <div className="text-center">
//                       <button type="button" className="step-trigger mb-0" id="steppertrigger2">
//                         <span className="bs-stepper-circle">2</span>
//                       </button>
//                       <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
//                     </div>
//                   </div>
//                   <div className="line"></div>
//                   <div className="step active" data-target="#step-3">
//                     <div className="text-center">
//                       <button type="button" className="step-trigger mb-0" id="steppertrigger3">
//                         <span className="bs-stepper-circle">3</span>
//                       </button>
//                       <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row align-items-start">
//             <div className="col-xl-12 col-lg-12 col-md-12">
//               <div className="div-title d-flex align-items-center mb-3">
//                 <h4>Billing Details</h4>
//               </div>
//               <div className="row align-items-start">
//                 <div className="col-xl-8 col-lg-8 col-md-12">
//                   <div className="card mb-3">
//                     <div className="card-header">
//                       <h4>Basic Detail</h4>
//                     </div>
//                     <div className="card-body">
//                       <div className="row">
//                         {['billingName', 'email', 'phone', 'address1', 'address2', 'country', 'cityState', 'postalCode'].map((field, index) => (
//                           <div key={index} className="col-xl-6 col-lg-6 col-md-6">
//                             <div className="form-group">
//                               <label className="form-label">
//                                 {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//                               </label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 name={field}
//                                 placeholder={field}
//                                 value={formData[field]}
//                                 onChange={handleInputChange}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                         <div className="col-xl-12 col-lg-12 col-md-12">
//                           <div className="form-group">
//                             <label className="form-label">Special notes</label>
//                             <textarea
//                               className="form-control ht-200"
//                               name="specialNotes"
//                               value={formData.specialNotes}
//                               onChange={handleInputChange}
//                             ></textarea>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-xl-4 col-lg-4 col-md-12">
//                   <div className="side-block card rounded-2 p-3">
//                     <div className="d-flex align-items-center justify-content-between mb-3">
//                       <h5 className="fw-semibold fs-6 mb-0">Payment Summary</h5>
//                       <div className="d-flex align-items-start">
//                         <a href="#" className="text-md fw-semibold text-primary">Manage Cards</a>
//                       </div>
//                     </div>
//                     <div className="mid-block mb-2">
//                       {['visa', 'master', 'amazone', 'paypal'].map((method) => (
//                         <div key={method} className="single-paymntCardsoption d-block position-relative mb-2">
//                           <div
//                             className={`paymnt-line d-flex align-items-center justify-content-start ${
//                               formData.paymentMethod === method ? 'active' : ''
//                             }`}
//                           >
//                             <div className="position-relative text-center">
//                               <div className="form-check lg mb-0">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="payment"
//                                   id={method}
//                                   checked={formData.paymentMethod === method}
//                                   onChange={handlePaymentChange}
//                                 />
//                                 <label className="form-check-label" htmlFor={method}></label>
//                               </div>
//                             </div>
//                             <div className="paymnt-line-caps d-flex align-items-center justify-content-start">
//                               <div className="paymnt-caps-icons d-inline-flex">
//                                 <i className={`fa-brands fa-cc-${method} text-success fs-1`}></i>
//                               </div>
//                               <div className="paymnt-caps-details ps-2">
//                                 <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">
//                                   {method.toUpperCase()}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="summary-block d-block mb-3">
//                       <h5 className="fw-semibold fs-6">Summary</h5>
//                       <ul className="list-group list-group-borderless">
//                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
//                           <span className="fw-medium text-sm text-muted mb-0">Payment:</span>
//                           <span className="fw-semibold text-md">$772.40</span>
//                         </li>
//                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
//                           <span className="fw-medium text-sm text-muted mb-0">Payment Method fee</span>
//                           <span className="fw-semibold text-md">$0</span>
//                         </li>
//                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
//                           <span className="fw-medium text-sm text-muted mb-0">Total Price</span>
//                           <span className="fw-semibold text-success text-md">$772.40</span>
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="bott-block mb-3">
//                       <button
//                         className="btn fw-medium btn-primary full-width"
//                         type="button"
//                         onClick={handleSubmit}
//                     ></button>
// 					    </div>
//                     </div>
//                 </div>
//             </div>
// 		</div>
//         </section>
//     );
// };

// export default Bookingform3;




import React, { useState } from "react";
import Roombook from "./Roombook";
// import { useLocation } from "react-router-dom";

const Bookingform3 = () => {
  const [formData, setFormData] = useState({
    billingName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    cityState: "",
    postalCode: "",
    specialNotes: "",
    paymentMethod: "visa",
    autoPay: false,
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.id });
  };

  const handleAutoPayToggle = () => {
    setFormData({ ...formData, autoPay: !formData.autoPay });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <section className="pt-4 gray-simple position-relative">
        <div className="container">
          {/* Stepper */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div id="stepper" className="bs-stepper stepper-outline mb-5">
                <div className="bs-stepper-header">
                  <div className="step completed" data-target="#step-1">
                    <div className="text-center">
                      <button type="button" className="step-trigger mb-0" id="steppertrigger1">
                        <span className="bs-stepper-circle">
                          <i className="fa-solid fa-check"></i>
                        </span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">Tour Review</h6>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="step completed" data-target="#step-2">
                    <div className="text-center">
                      <button type="button" className="step-trigger mb-0" id="steppertrigger2">
                        <span className="bs-stepper-circle">2</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">Traveler Info</h6>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="step active" data-target="#step-3">
                    <div className="text-center">
                      <button type="button" className="step-trigger mb-0" id="steppertrigger3">
                        <span className="bs-stepper-circle">3</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">Make Payment</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  {/* <Roombook/> */}

          {/* Billing Details */}
          <div className="row align-items-start">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="div-title d-flex align-items-center mb-3">
                <h4>Billing Details</h4>
              </div>
              <div className="row align-items-start">
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h4>Basic Details</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {["billingName", "email", "phone", "address1", "address2", "country", "cityState", "postalCode"].map((field, index) => (
                          <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">
                                {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={field}
                                placeholder={field}
                                value={formData[field]}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        ))}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label className="form-label">Special Notes</label>
                            <textarea
                              className="form-control ht-200"
                              name="specialNotes"
                              value={formData.specialNotes}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="side-block card rounded-2 p-3">
                    
                    {/* </div> */} *
                    
                    <div className="summary-block d-block mb-3">
                      <h5 className="fw-semibold fs-6">Summary</h5>
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted mb-0">Payment:</span>
                          <span className="fw-semibold text-md">$772.40</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted mb-0">Payment Method Fee</span>
                          <span className="fw-semibold text-md">$0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted mb-0">Total Price</span>
                          <span className="fw-semibold text-success text-md">$772.40</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bott-block mb-3">
                      <button
                        className="btn fw-medium btn-primary full-width"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit Payment
                      </button>
                    </div>
                  </div>
                </div>

				{/* <div>
            <h1>Booking Summary</h1>
            <p>Hotel: {hotelName}</p>
            <p>Room Type: {room.type}</p>
            <p>Total Price: ₹{transactionDetails.totalPrice.toFixed(2)}</p>
        </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookingform3;










// import React, { useState } from "react";

// const Bookingform3 = ({ room, hotelName, totalPrice }) => {
//   const [formData, setFormData] = useState({
//     billingName: "",
//     email: "",
//     phone: "",
//     address1: "",
//     address2: "",
//     country: "",
//     cityState: "",
//     postalCode: "",
//     specialNotes: "",
//     paymentMethod: "visa",
//     autoPay: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Form Submitted:", { formData, room, hotelName, totalPrice });
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div>
//       <section className="pt-4 gray-simple position-relative">
//         <div className="container">
//           <h4>Booking Form</h4>
//           <p>Hotel: {hotelName}</p>
//           <p>Room Type: {room.type}</p>
//           <p>Total Price: ₹{totalPrice.toFixed(2)}</p>

//           {/* Billing Details */}
//           <div>
//             {["billingName", "email", "phone", "address1", "address2", "country", "cityState", "postalCode"].map(
//               (field, index) => (
//                 <div key={index}>
//                   <label>{field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:</label>
//                   <input
//                     type="text"
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               )
//             )}
//             <button onClick={handleSubmit}>Submit Payment</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Bookingform3;
