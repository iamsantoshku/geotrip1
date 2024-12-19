// import React from 'react'

// const Bannerhome = () => {
//   return (
//     <div className="image-cover hero-header bg-white" style="background:url(assets/img/banner-7.jpg)no-repeat;" data-overlay="6">
// 			<div className="container">

// 				<!-- Search Form -->
// 				<div className="row justify-content-center align-items-center">
// 					<div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
// 						<div className="position-relative text-center mb-5">
// 							<h1>Starts Your Trip with <span className="position-relative z-4">GeoTrip<span
// 										className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
// 										<svg width="185px" height="23px" viewBox="0 0 445.5 23">
// 											<path className="fill-white opacity-7"
// 												d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
// 											</path>
// 										</svg>
// 									</span></span></h1>
// 							<p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
// 								explore beautiful destinations.</p>
// 						</div>
// 					</div>
// 					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
// 						<div className="search-wrap bg-white rounded-3 p-3">
// 						  <div className="search-upper">
// 							<div className="d-flex align-items-center justify-content-between flex-wrap">
// 							  <div className="flx-start mb-sm-0 mb-2">
// 								<div className="form-check form-check-inline">
// 								  <input className="form-check-input" type="radio" name="trip" id="return" value="option1" checked>
// 								  <label className="form-check-label" for="return">Return</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 								  <input className="form-check-input" type="radio" name="trip" id="oneway" value="option2">
// 								  <label className="form-check-label" for="oneway">One Way</label>
// 								</div>
// 							  </div>
// 							  <div className="flx-end d-flex align-items-center flex-wrap">
// 								<div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
// 								  <div className="booking-form__input guests-input">
// 									<i className="fa-solid fa-user-clock text-muted me-2"></i><button name="guests-btn"
// 									  id="guests-input-btn">1
// 									  Guest</button>
// 									<div className="guests-input__options" id="guests-input-options">
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="adults-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
// 										<span className="guests-input__ctrl plus" id="adults-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="children-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
// 										<span className="guests-input__ctrl plus" id="children-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="room-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
// 										<span className="guests-input__ctrl plus" id="room-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									</div>
// 								  </div>
// 								</div>
// 								<div className="ps-1 pb-3 pt-0 mob-full">
// 								  <div className="dropdowns">
// 									<div className="selections">
// 									  <i className="fa-solid fa-basket-shopping text-muted me-2"></i><span
// 										className="selected">Economy</span>
// 									  <div className="caret"></div>
// 									</div>
// 									<ul className="menu">
// 									  <li className="active">Economy</li>
// 									  <li>Premium Economy</li>
// 									  <li>Premium Economy</li>
// 									  <li>Business/First</li>
// 									  <li>Business</li>
// 									</ul>
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 						  </div>
// 						  <div className="row gx-lg-2 g-3">

// 							<div className="col-xl-6 col-lg-6 col-md-12">
// 							  <div className="row gy-3 gx-lg-2 gx-3">
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 								  <div className="form-group hdd-arrow mb-0">
// 									<select className="leaving form-control fw-bold">
// 									  <option value="">Select</option>
// 									  <option value="ny">New York</option>
// 									  <option value="sd">San Diego</option>
// 									  <option value="sj">San Jose</option>
// 									  <option value="ph">Philadelphia</option>
// 									  <option value="nl">Nashville</option>
// 									  <option value="sf">San Francisco</option>
// 									  <option value="hu">Houston</option>
// 									  <option value="sa">San Antonio</option>
// 									</select>
// 								  </div>
// 								  <div className="btn-flip-icon mt-md-0">
// 									<button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left"></i></button>
// 								  </div>
// 								</div>
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-groupp hdd-arrow mb-0">
// 									<select className="goingto form-control fw-bold">
// 									  <option value="">Select</option>
// 									  <option value="lv">Las Vegas</option>
// 									  <option value="la">Los Angeles</option>
// 									  <option value="kc">Kansas City</option>
// 									  <option value="no">New Orleans</option>
// 									  <option value="kc">Jacksonville</option>
// 									  <option value="lb">Long Beach</option>
// 									  <option value="cl">Columbus</option>
// 									  <option value="cn">Canada</option>
// 									</select>
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 							<div className="col-xl-4 col-lg-4 col-md-12">
// 							  <div className="row gy-3 gx-lg-2 gx-3">
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-group mb-0">
// 									<input className="form-control fw-bold choosedate" type="text" placeholder="Departure.."
// 									  readonly="readonly">
// 								  </div>
// 								</div>
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-group mb-0">
// 									<input className="form-control fw-bold choosedate" type="text" placeholder="Return.."
// 									  readonly="readonly">
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 							<div className="col-xl-2 col-lg-2 col-md-12">
// 							  <div className="form-group mb-0">
// 								<button type="button" className="btn btn-primary full-width fw-medium"><i
// 									className="fa-solid fa-magnifying-glass me-2"></i>Search</button>
// 							  </div>
// 							</div>

// 						  </div>
// 						</div>
// 					  </div>
// 				</div>
// 				<!-- </row> -->

// 			</div>
// 		</div>
//   )
// }

// export default Bannerhome




// import React from "react";
// // import bannerImage from "../../assets/banner-booking.png";
//  // Adjust the path based on your folder structure
//  import bannerImage from "/assets/banner-booking.png"

// const Bannerhome = () => {
//   const handleButtonClick = () => {
//     console.log("Explore Now button clicked!");
//     // Add any functionality you want to trigger on button click
//   };

//   return (
//     <section classNameName="relative bg-blue-500">
//       <div classNameName="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
//         <div classNameName="max-w-3xl text-center sm:text-left">
//           <h1 classNameName="text-3xl font-extrabold sm:text-5xl">
//             Discover Your Next Adventure
//             <strong classNameName="block font-extrabold text-yellow-400">
//               Book Your Flight Now!
//             </strong>
//           </h1>

//           <p classNameName="mt-4 sm:leading-relaxed sm:text-xl text-white">
//             Explore destinations worldwide with the best deals and effortless booking experience.
//           </p>

//           <div classNameName="flex flex-wrap gap-4 mt-8 text-center">
//             <button
//               onClick={handleButtonClick}
//               classNameName="block w-full px-12 py-3 text-sm font-medium text-white bg-yellow-500 rounded shadow sm:w-auto active:bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring"
//             >
//               Explore Now
//             </button>

//             <a
//               href="#destinations"
//               classNameName="block w-full px-12 py-3 text-sm font-medium bg-gray-100 rounded shadow sm:w-auto hover:bg-gray-200 focus:outline-none focus:ring"
//             >
//               View Destinations
//             </a>
//           </div>
//         </div>
//       </div>

//       <img
//         src={bannerImage}
//         alt="Banner Booking"
//         classNameName="absolute inset-0 object-cover w-full h-full opacity-25"
//       />
//     </section>
//   );
// };

// export default Bannerhome;


// import React from 'react'

// const Bannerhome = () => {
//   return (
//     <div className="image-cover hero-header bg-white" style="background:url(assets/img/banner-7.jpg)no-repeat;" data-overlay="6">
// 			<div className="container">

// 				{/* <!-- Search Form --> */}
// 				<div className="row justify-content-center align-items-center">
// 					<div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
// 						<div className="position-relative text-center mb-5">
// 							<h1>Starts Your Trip with <span className="position-relative z-4">GeoTrip<span
// 										className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
// 										<svg width="185px" height="23px" viewBox="0 0 445.5 23">
// 											<path className="fill-white opacity-7"
// 												d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
// 											</path>
// 										</svg>
// 									</span></span></h1>
// 							<p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
// 								explore beautiful destinations.</p>
// 						</div>
// 					</div>
// 					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
// 						<div className="search-wrap bg-white rounded-3 p-3">
// 						  <div className="search-upper">
// 							<div className="d-flex align-items-center justify-content-between flex-wrap">
// 							  <div className="flx-start mb-sm-0 mb-2">
// 								<div className="form-check form-check-inline">
// 								  <input className="form-check-input" type="radio" name="trip" id="return" value="option1" checked/>
// 								  <label className="form-check-label" for="return">Return</label>
// 								</div>
// 								<div className="form-check form-check-inline">
// 								  <input className="form-check-input" type="radio" name="trip" id="oneway" value="option2"/>
// 								  <label className="form-check-label" for="oneway">One Way</label>
// 								</div>
// 							  </div>
// 							  <div className="flx-end d-flex align-items-center flex-wrap">
// 								<div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
// 								  <div className="booking-form__input guests-input">
// 									<i className="fa-solid fa-user-clock text-muted me-2"></i><button name="guests-btn"
// 									  id="guests-input-btn">1
// 									  Guest</button>
// 									<div className="guests-input__options" id="guests-input-options">
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="adults-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
// 										<span className="guests-input__ctrl plus" id="adults-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="children-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
// 										<span className="guests-input__ctrl plus" id="children-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									  <div>
// 										<span className="guests-input__ctrl minus" id="room-subs-btn"><i
// 											className="fa-solid fa-minus"></i></span>
// 										<span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
// 										<span className="guests-input__ctrl plus" id="room-add-btn"><i
// 											className="fa-solid fa-plus"></i></span>
// 									  </div>
// 									</div>
// 								  </div>
// 								</div>
// 								<div className="ps-1 pb-3 pt-0 mob-full">
// 								  <div className="dropdowns">
// 									<div className="selections">
// 									  <i className="fa-solid fa-basket-shopping text-muted me-2"></i><span
// 										className="selected">Economy</span>
// 									  <div className="caret"></div>
// 									</div>
// 									<ul className="menu">
// 									  <li className="active">Economy</li>
// 									  <li>Premium Economy</li>
// 									  <li>Premium Economy</li>
// 									  <li>Business/First</li>
// 									  <li>Business</li>
// 									</ul>
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 						  </div>
// 						  <div className="row gx-lg-2 g-3">

// 							<div className="col-xl-6 col-lg-6 col-md-12">
// 							  <div className="row gy-3 gx-lg-2 gx-3">
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 								  <div className="form-group hdd-arrow mb-0">
// 									<select className="leaving form-control fw-bold">
// 									  <option value="">Select</option>
// 									  <option value="ny">New York</option>
// 									  <option value="sd">San Diego</option>
// 									  <option value="sj">San Jose</option>
// 									  <option value="ph">Philadelphia</option>
// 									  <option value="nl">Nashville</option>
// 									  <option value="sf">San Francisco</option>
// 									  <option value="hu">Houston</option>
// 									  <option value="sa">San Antonio</option>
// 									</select>
// 								  </div>
// 								  <div className="btn-flip-icon mt-md-0">
// 									<button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left"></i></button>
// 								  </div>
// 								</div>
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-groupp hdd-arrow mb-0">
// 									<select className="goingto form-control fw-bold">
// 									  <option value="">Select</option>
// 									  <option value="lv">Las Vegas</option>
// 									  <option value="la">Los Angeles</option>
// 									  <option value="kc">Kansas City</option>
// 									  <option value="no">New Orleans</option>
// 									  <option value="kc">Jacksonville</option>
// 									  <option value="lb">Long Beach</option>
// 									  <option value="cl">Columbus</option>
// 									  <option value="cn">Canada</option>
// 									</select>
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 							<div className="col-xl-4 col-lg-4 col-md-12">
// 							  <div className="row gy-3 gx-lg-2 gx-3">
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-group mb-0">
// 									<input className="form-control fw-bold choosedate" type="text" placeholder="Departure.."
// 									  readonly="readonly"/>
// 								  </div>
// 								</div>
// 								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 								  <div className="form-group mb-0">
// 									<input className="form-control fw-bold choosedate" type="text" placeholder="Return.."
// 									  readonly="readonly"/>
// 								  </div>
// 								</div>
// 							  </div>
// 							</div>
// 							<div className="col-xl-2 col-lg-2 col-md-12">
// 							  <div className="form-group mb-0">
// 								<button type="button" className="btn btn-primary full-width fw-medium"><i
// 									className="fa-solid fa-magnifying-glass me-2"></i>Search</button>
// 							  </div>
// 							</div>

// 						  </div>
// 						</div>
// 					  </div>
// 				</div>
// 				{/* <!-- </row> --> */}

// 			</div>
// 		</div>


//   )
// }

// export default Bannerhome



// import React, { useState } from "react";

// const Bannerhome = () => {
//   const [tripType, setTripType] = useState("return");
//   const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
//   const [selectedClass, setSelectedClass] = useState("Economy");

//   const updateGuestCount = (type, operation) => {
//     setGuests((prev) => {
//       const newValue = operation === "add" ? prev[type] + 1 : Math.max(0, prev[type] - 1);
//       return { ...prev, [type]: newValue };
//     });
//   };

//   return (
//     <div
//       className="image-cover hero-header bg-white"
//       style={{
//         background: "url(assets/img/banner-7.jpg) no-repeat",
//         backgroundSize: "cover",
//       }}
//       data-overlay="6"
//     >
//       <div className="container">
//         {/* Search Form */}
//         <div className="row justify-content-center align-items-center">
//           <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//             <div className="position-relative text-center mb-5">
//               <h1>
//                 Starts Your Trip with{" "}
//                 <span className="position-relative z-4">
//                   GeoTrip
//                   <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                     {/* SVG content can remain unchanged */}
//                   </span>
//                 </span>
//               </h1>
//               <p className="fs-5 fw-light">
//                 Take a little break from the work stress of everyday. Discover,
//                 plan trips, and explore beautiful destinations.
//               </p>
//             </div>
//           </div>
//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//             <div className="search-wrap bg-white rounded-3 p-3">
//               <div className="search-upper">
//                 <div className="d-flex align-items-center justify-content-between flex-wrap">
//                   {/* Trip Type */}
//                   <div className="flx-start mb-sm-0 mb-2">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="return"
//                         value="return"
//                         checked={tripType === "return"}
//                         onChange={() => setTripType("return")}
//                       />
//                       <label className="form-check-label" htmlFor="return">
//                         Return
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="oneway"
//                         value="oneway"
//                         checked={tripType === "oneway"}
//                         onChange={() => setTripType("oneway")}
//                       />
//                       <label className="form-check-label" htmlFor="oneway">
//                         One Way
//                       </label>
//                     </div>
//                   </div>
//                   {/* Guests and Class */}
//                   <div className="flx-end d-flex align-items-center flex-wrap">
//                     {/* Guests Input */}
//                     <div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
//                       <div className="booking-form__input guests-input">
//                         <i className="fa-solid fa-user-clock text-muted me-2"></i>
//                         <button>
//                           {guests.adults} Adult(s), {guests.children} Child(ren),{" "}
//                           {guests.rooms} Room(s)
//                         </button>
//                         {/* Guests Dropdown */}
//                         <div className="guests-input__options">
//                           {["adults", "children", "rooms"].map((type) => (
//                             <div key={type}>
//                               <span
//                                 className="guests-input__ctrl minus"
//                                 onClick={() => updateGuestCount(type, "subtract")}
//                               >
//                                 <i className="fa-solid fa-minus"></i>
//                               </span>
//                               <span className="guests-input__value">
//                                 {guests[type]} {type.charAt(0).toUpperCase() + type.slice(1)}
//                               </span>
//                               <span
//                                 className="guests-input__ctrl plus"
//                                 onClick={() => updateGuestCount(type, "add")}
//                               >
//                                 <i className="fa-solid fa-plus"></i>
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     {/* Class Selection */}
//                     <div className="ps-1 pb-3 pt-0 mob-full">
//                       <div className="dropdowns">
//                         <div className="selections">
//                           <i className="fa-solid fa-basket-shopping text-muted me-2"></i>
//                           <span className="selected">{selectedClass}</span>
//                           <div className="caret"></div>
//                         </div>
//                         {/* Dropdown Menu */}
//                         <ul className="menu">
//                           {["Economy", "Premium Economy", "Business/First"].map(
//                             (cls) => (
//                               <li
//                                 key={cls}
//                                 className={selectedClass === cls ? "active" : ""}
//                                 onClick={() => setSelectedClass(cls)}
//                               >
//                                 {cls}
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Add more content as needed */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bannerhome;




// import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";

// const optionsFrom = [
//     { value: "ny", label: "New York" },
//     { value: "sd", label: "San Diego" },
//     { value: "chi", label: "Chicago" },
//     { value: "hou", label: "Houston" },
//   ];

//   const optionsTo = [
//     { value: "lv", label: "Las Vegas" },
//     { value: "la", label: "Los Angeles" },
//     { value: "mia", label: "Miami" },
//     { value: "sf", label: "San Francisco" },
//   ];


// const Bannerhome = () => {
//   const [tripType, setTripType] = useState('return');
//   const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 0 });
//   const [selectedClass, setSelectedClass] = useState('Economy');
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [selectedFrom, setSelectedFrom] = useState(null);
//   const [selectedTo, setSelectedTo] = useState(null);



//   const handleGuestChange = (type, operation) => {
//     setGuests((prevGuests) => {
//       const newValue = operation === 'add' ? prevGuests[type] + 1 : Math.max(0, prevGuests[type] - 1);
//       return { ...prevGuests, [type]: newValue };
//     });
//   };

//   const handleTripTypeChange = (e) => {
//     setTripType(e.target.value);
//   };

//   const handleClassSelect = (newClass) => {
//     setSelectedClass(newClass);
//   };

//   return (
//     <div
//       className="image-cover hero-header bg-white"
//       style={{ background: 'url(assets/img/banner-7.jpg) no-repeat' }}
//       data-overlay="6"
//     >
//       <div className="container">
//         {/* Search Form */}
//         <div className="row justify-content-center align-items-center">
//           <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//             <div className="position-relative text-center mb-5">
//               <h1>
//                 Starts Your Trip with{' '}
//                 <span className="position-relative z-4">
//                   GeoTrip
//                   <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                     <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                       <path
//                         className="fill-white opacity-7"
//                         d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5..."
//                       ></path>
//                     </svg>
//                   </span>
//                 </span>
//               </h1>
//               <p className="fs-5 fw-light">
//                 Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.
//               </p>
//             </div>
//           </div>

//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//             <div className="search-wrap bg-white rounded-3 p-3">
//               <div className="search-upper">
//                 <div className="d-flex align-items-center justify-content-between flex-wrap">
//                   <div className="flx-start mb-sm-0 mb-2">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="return"
//                         value="return"
//                         checked={tripType === 'return'}
//                         onChange={handleTripTypeChange}
//                       />
//                       <label className="form-check-label" htmlFor="return">
//                         Return
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="oneway"
//                         value="oneway"
//                         checked={tripType === 'oneway'}
//                         onChange={handleTripTypeChange}
//                       />
//                       <label className="form-check-label" htmlFor="oneway">
//                         One Way
//                       </label>
//                     </div>
//                   </div>

//                   <div className="flx-end d-flex align-items-center flex-wrap">
//                     <div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
//                       <div className="booking-form__input guests-input">
//                         <i className="fa-solid fa-user-clock text-muted me-2"></i>
//                         <button name="guests-btn" id="guests-input-btn">
//                           {guests.adults} Adult{guests.adults > 1 ? 's' : ''}
//                         </button>
//                         <div className="guests-input__options" id="guests-input-options">
//                           {['adults', 'children', 'rooms'].map((type) => (
//                             <div key={type}>
//                               <span
//                                 className="guests-input__ctrl minus"
//                                 onClick={() => handleGuestChange(type, 'subtract')}
//                               >
//                                 <i className="fa-solid fa-minus"></i>
//                               </span>
//                               <span className="guests-input__value">
//                                 <span id={`guests-count-${type}`}>{guests[type]}</span>{' '}
//                                 {type.charAt(0).toUpperCase() + type.slice(1)}
//                               </span>
//                               <span
//                                 className="guests-input__ctrl plus"
//                                 onClick={() => handleGuestChange(type, 'add')}
//                               >
//                                 <i className="fa-solid fa-plus"></i>
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="ps-1 pb-3 pt-0 mob-full">
//                       <div className="dropdowns">
//                         <div className="selections">
//                           <i className="fa-solid fa-basket-shopping text-muted me-2"></i>
//                           <span className="selected">{selectedClass}</span>
//                           <div className="caret"></div>
//                         </div>
//                         <ul className="menu">
//                           {['Economy', 'Premium Economy', 'Business', 'First Class'].map((cls) => (
//                             <li
//                               key={cls}
//                               className={cls === selectedClass ? 'active' : ''}
//                               onClick={() => handleClassSelect(cls)}
//                             >
//                               {cls}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="row gx-lg-2 g-3">


// <div className="col-xl-6 col-lg-6 col-md-12">
//       <div className="row gy-3 gx-lg-2 gx-3">
//         {/* "Going From" Select */}
//         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//           <div className="form-group hdd-arrow mb-0">
//             <Select
//               options={optionsFrom}
//               value={selectedFrom}
//               onChange={(selectedOption) => setSelectedFrom(selectedOption)}
//               placeholder="Going From..."
//               isSearchable
//               className="fw-bold"
//             />
//           </div>
//           <div className="btn-flip-icon mt-md-0">
//             <button className="p-0 m-0 text-primary">
//               <i className="fa-solid fa-right-left"></i>
//             </button>
//           </div>
//         </div>

//         {/* "Going To" Select */}
//         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//           <div className="form-group mb-0">
//             <Select
//               options={optionsTo}
//               value={selectedTo}
//               onChange={(selectedOption) => setSelectedTo(selectedOption)}
//               placeholder="Going To..."
//               isSearchable
//               className="fw-bold"
//             />
//           </div>
//         </div>
//       </div>
//     </div>


//                <div className="col-xl-4 col-lg-4 col-md-12">
//       <div className="row gy-3 gx-lg-2 gx-3">
//         {/* Departure Date Picker */}
//         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//           <div className="form-group mb-0">
//             <DatePicker
//               selected={departureDate}
//               onChange={(date) => setDepartureDate(date)}
//               className="form-control fw-bold choosedate"
//               placeholderText="Departure.."
//               dateFormat="dd/MM/yyyy"
//             />
//           </div>
//         </div>

//         {/* Return Date Picker */}
//         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//           <div className="form-group mb-0">
//             <DatePicker
//               selected={returnDate}
//               onChange={(date) => setReturnDate(date)}
//               className="form-control fw-bold choosedate"
//               placeholderText="Return.."
//               dateFormat="dd/MM/yyyy"
//               minDate={departureDate} // Prevent selecting return date before departure
//             />
//           </div>
//         </div>
//       </div>
//     </div>


//                 <div className="col-xl-2 col-lg-2 col-md-12">
//                   <button className="btn btn-primary btn-block w-100 h-100">
//                     <i className="fa-solid fa-search me-2"></i>Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bannerhome;






// import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";

// // Predefined options
// const defaultOptionsFrom = [
//   { value: "ny", label: "New York" },
//   { value: "sd", label: "San Diego" },
//   { value: "chi", label: "Chicago" },
//   { value: "hou", label: "Houston" },
// ];

// const defaultOptionsTo = [
//   { value: "lv", label: "Las Vegas" },
//   { value: "la", label: "Los Angeles" },
//   { value: "mia", label: "Miami" },
//   { value: "sf", label: "San Francisco" },
// ];

// const Bannerhome = () => {
//   const [tripType, setTripType] = useState('return');
//   const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 0 });
//   const [selectedClass, setSelectedClass] = useState('Economy');
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [selectedFrom, setSelectedFrom] = useState(null);
//   const [selectedTo, setSelectedTo] = useState(null);
//   const [optionsFrom, setOptionsFrom] = useState(defaultOptionsFrom);
//   const [optionsTo, setOptionsTo] = useState(defaultOptionsTo);

//   // Handle Guest Change
//   const handleGuestChange = (type, operation) => {
//     setGuests((prevGuests) => {
//       const newValue = operation === 'add' ? prevGuests[type] + 1 : Math.max(0, prevGuests[type] - 1);
//       return { ...prevGuests, [type]: newValue };
//     });
//   };

//   // Handle Trip Type Change
//   const handleTripTypeChange = (e) => {
//     setTripType(e.target.value);
//   };

//   // Handle Class Selection
//   const handleClassSelect = (newClass) => {
//     setSelectedClass(newClass);
//   };

//   // Add Custom Option
//   const handleAddCustomOption = (inputValue, setOptions, selectedValue, setSelected) => {
//     const customOption = { value: inputValue.toLowerCase().replace(/ /g, '-'), label: inputValue };
//     setOptions((prevOptions) => [...prevOptions, customOption]);
//     setSelected(customOption);
//   };

//   return (
//     <div
//       className="image-cover hero-header bg-white"
//       style={{ background: 'url(assets/img/banner-7.jpg) no-repeat' }}
//       data-overlay="6"
//     >
//       <div className="container">
//         {/* Search Form */}
//         <div className="row justify-content-center align-items-center">
//           <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//             <div className="position-relative text-center mb-5">
//               <h1>
//                 Starts Your Trip with{' '}
//                 <span className="position-relative z-4">
//                   GeoTrip
//                 </span>
//               </h1>
//               <p className="fs-5 fw-light">
//                 Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.
//               </p>
//             </div>
//           </div>

//           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//             <div className="search-wrap bg-white rounded-3 p-3">
//               <div className="search-upper">
//                 <div className="d-flex align-items-center justify-content-between flex-wrap">
//                   <div className="flx-start mb-sm-0 mb-2">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="return"
//                         value="return"
//                         checked={tripType === 'return'}
//                         onChange={handleTripTypeChange}
//                       />
//                       <label className="form-check-label" htmlFor="return">
//                         Return
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="trip"
//                         id="oneway"
//                         value="oneway"
//                         checked={tripType === 'oneway'}
//                         onChange={handleTripTypeChange}
//                       />
//                       <label className="form-check-label" htmlFor="oneway">
//                         One Way
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Inputs */}
//               <div className="row gx-lg-2 g-3">
//                 {/* Going From */}
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                   <Select
//                     options={optionsFrom}
//                     value={selectedFrom}
//                     onChange={(selectedOption) => setSelectedFrom(selectedOption)}
//                     onInputChange={(inputValue, { action }) => {
//                       if (action === 'input-blur' || action === 'menu-close') {
//                         handleAddCustomOption(inputValue, setOptionsFrom, selectedFrom, setSelectedFrom);
//                       }
//                     }}
//                     placeholder="Going From..."
//                     isSearchable
//                     className="form-control"
//                   />
//                 </div>

//                 {/* Going To */}
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                   <Select
//                     options={optionsTo}
//                     value={selectedTo}
//                     onChange={(selectedOption) => setSelectedTo(selectedOption)}
//                     onInputChange={(inputValue, { action }) => {
//                       if (action === 'input-blur' || action === 'menu-close') {
//                         handleAddCustomOption(inputValue, setOptionsTo, selectedTo, setSelectedTo);
//                       }
//                     }}
//                     placeholder="Going To..."
//                     isSearchable
//                     className="form-control"
//                   />
//                 </div>
//               </div>

//               {/* Departure and Return Dates */}
//               <div className="row gx-lg-2 g-3 mt-3">
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                   <DatePicker
//                     selected={departureDate}
//                     onChange={(date) => setDepartureDate(date)}
//                     className="form-control"
//                     placeholderText="Departure..."
//                     dateFormat="dd/MM/yyyy"
//                   />
//                 </div>
//                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                   <DatePicker
//                     selected={returnDate}
//                     onChange={(date) => setReturnDate(date)}
//                     className="form-control"
//                     placeholderText="Return..."
//                     dateFormat="dd/MM/yyyy"
//                     minDate={departureDate}
//                   />
//                 </div>
//               </div>

//               {/* Search Button */}
//               <div className="col-xl-12 mt-4">
//                 <button className="btn btn-primary w-100">
//                   <i className="fa-solid fa-search me-2"></i>Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bannerhome;


// import React from 'react'

// const Bannerhome = () => {

//   return (
//     <div>

//       <div
//         className="image-cover hero-header bg-white"
//         style={{
//           backgroundImage: "url(assets/img/banner-7.jpg)",
//           backgroundRepeat: "no-repeat",
//         }}
//         data-overlay="6">
//         <div class="container">
//           <div class="row justify-content-center align-items-center">
//             <div class="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//               <div class="position-relative text-center mb-5">
//                 <h1>Starts Your Trip with <span class="position-relative z-4">GeoTrip<span
//                   class="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                   <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                     <path class="fill-white opacity-7"
//                       d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
//                     </path>
//                   </svg>
//                 </span></span></h1>
//                 <p class="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
//                   explore beautiful destinations.</p>
//               </div>
//             </div>
//             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div class="search-wrap bg-white rounded-3 p-3">
//                 <div class="search-upper">
//                   <div class="d-flex align-items-center justify-content-between flex-wrap">
//                     <div class="flx-start mb-sm-0 mb-2">
//                       <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="radio" name="trip" id="return" value="option1" checked />
//                         <label class="form-check-label" for="return">Return</label>
//                       </div>
//                       <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="radio" name="trip" id="oneway" value="option2" />
//                         <label class="form-check-label" for="oneway">One Way</label>
//                       </div>
//                     </div>
//                     <div class="flx-end d-flex align-items-center flex-wrap">
//                       <div class="px-sm-2 pb-3 pt-0 ps-0 mob-full">
//                         <div class="booking-form__input guests-input">
//                           <i class="fa-solid fa-user-clock text-muted me-2"></i><button name="guests-btn"
//                             id="guests-input-btn">1
//                             Guest</button>
//                           <div class="guests-input__options" id="guests-input-options">
//                             <div>
//                               <span class="guests-input__ctrl minus" id="adults-subs-btn"><i
//                                 class="fa-solid fa-minus"></i></span>
//                               <span class="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
//                               <span class="guests-input__ctrl plus" id="adults-add-btn"><i
//                                 class="fa-solid fa-plus"></i></span>
//                             </div>
//                             <div>
//                               <span class="guests-input__ctrl minus" id="children-subs-btn"><i
//                                 class="fa-solid fa-minus"></i></span>
//                               <span class="guests-input__value"><span id="guests-count-children">0</span>Children</span>
//                               <span class="guests-input__ctrl plus" id="children-add-btn"><i
//                                 class="fa-solid fa-plus"></i></span>
//                             </div>
//                             <div>
//                               <span class="guests-input__ctrl minus" id="room-subs-btn"><i
//                                 class="fa-solid fa-minus"></i></span>
//                               <span class="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
//                               <span class="guests-input__ctrl plus" id="room-add-btn"><i
//                                 class="fa-solid fa-plus"></i></span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="ps-1 pb-3 pt-0 mob-full">
//                         <div class="dropdowns">
//                           <div class="selections">
//                             <i class="fa-solid fa-basket-shopping text-muted me-2"></i><span
//                               class="selected">Economy</span>
//                             <div class="caret"></div>
//                           </div>
//                           <ul class="menu">
//                             <li class="active">Economy</li>
//                             <li>Premium Economy</li>
//                             <li>Premium Economy</li>
//                             <li>Business/First</li>
//                             <li>Business</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="row gx-lg-2 g-3">

//                   <div class="col-xl-6 col-lg-6 col-md-12">
//                     <div class="row gy-3 gx-lg-2 gx-3">
//                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                         <div class="form-group hdd-arrow mb-0">
//                           <select class="leaving form-control fw-bold">
//                             <option value="">Select</option>
//                             <option value="ny">New York</option>
//                             <option value="sd">San Diego</option>
//                             <option value="sj">San Jose</option>
//                             <option value="ph">Philadelphia</option>
//                             <option value="nl">Nashville</option>
//                             <option value="sf">San Francisco</option>
//                             <option value="hu">Houston</option>
//                             <option value="sa">San Antonio</option>
//                           </select>
//                         </div>
//                         <div class="btn-flip-icon mt-md-0">
//                           <button class="p-0 m-0 text-primary"><i class="fa-solid fa-right-left"></i></button>
//                         </div>
//                       </div>
//                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div class="form-groupp hdd-arrow mb-0">
//                           <select class="goingto form-control fw-bold">
//                             <option value="">Select</option>
//                             <option value="lv">Las Vegas</option>
//                             <option value="la">Los Angeles</option>
//                             <option value="kc">Kansas City</option>
//                             <option value="no">New Orleans</option>
//                             <option value="kc">Jacksonville</option>
//                             <option value="lb">Long Beach</option>
//                             <option value="cl">Columbus</option>
//                             <option value="cn">Canada</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   <div class="col-xl-4 col-lg-4 col-md-12">
//                     <div class="row gy-3 gx-lg-2 gx-3">
//                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div class="form-group mb-0">
//                           <input class="form-control fw-bold choosedate" type="date" placeholder="Departure.."
//                           />
//                         </div>
//                       </div>
//                       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div class="form-group mb-0">
//                           <input class="form-control fw-bold choosedate" type="date" placeholder="Return.."
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="col-xl-2 col-lg-2 col-md-12">
//                     <div class="form-group mb-0">
//                       <button type="button" class="btn btn-primary full-width fw-medium"><i
//                         class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>

//     </div>
//   )
// }

// export default Bannerhome

// import React, { useState } from "react";
// // import "./Bannerhome.css";

// const Bannerhome = () => {
//   const [flightType, setFlightType] = useState("oneway");
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     departDate: "",
//     returnDate: "",
//   });

//   const handleTripTypeChange = (type) => {
//     setFlightType(type);
//   };

//   const handleFormDataChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFlightSearch = () => {
//     // Implement search functionality or trigger parent callback
//     console.log("Searching for flights", { flightType, ...formData });
//   };

//   return (
//     <div className="bannerhome">
//       <div className="bannerhome-content">
//         <h1 className="bannerhome-title">Welcome to Your Next Adventure</h1>
//         <p className="bannerhome-description">Find the best flights and explore the world with ease.</p>

//         <div className="booking-form">
//           <div className="trip-type">
//             <button
//               className={flightType === "oneway" ? "active" : ""}
//               onClick={() => handleTripTypeChange("oneway")}
//             >
//               One Way
//             </button>
//             <button
//               className={flightType === "return" ? "active" : ""}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           <div className="form-fields">
//             <input
//               type="text"
//               name="from"
//               placeholder="From"
//               value={formData.from}
//               onChange={handleFormDataChange}
//             />
//             <input
//               type="text"
//               name="to"
//               placeholder="To"
//               value={formData.to}
//               onChange={handleFormDataChange}
//             />
//             <input
//               type="date"
//               name="departDate"
//               placeholder="Departure Date"
//               value={formData.departDate}
//               onChange={handleFormDataChange}
//             />
//             {flightType === "return" && (
//               <input
//                 type="date"
//                 name="returnDate"
//                 placeholder="Return Date"
//                 value={formData.returnDate}
//                 onChange={handleFormDataChange}
//               />
//             )}
//           </div>

//           <button className="search-button" onClick={handleFlightSearch}>
//             Search Flights
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bannerhome;


// import React, { useState } from "react";
// import "./Bannerhome.css";

// const Bannerhome = () => {
//   const [flightType, setFlightType] = useState("oneway");
//   const [formData, setFormData] = useState({
//     from: "",
//     to: "",
//     departDate: "",
//     returnDate: "",
//   });

//   const handleTripTypeChange = (type) => {
//     setFlightType(type);
//   };

//   const handleFormDataChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFlightSearch = () => {
//     console.log("Searching for flights", { flightType, ...formData });
//   };

//   return (
//     <div className="bannerhome">
//       <div className="bannerhome-content">
//         <h1 className="bannerhome-title">Welcome to Your Next Adventure</h1>
//         <p className="bannerhome-description">
//           Find the best flights and explore the world with ease.
//         </p>

//         <div className="booking-form">
//           <div className="trip-type">
//             <button
//               className={flightType === "oneway" ? "active" : ""}
//               onClick={() => handleTripTypeChange("oneway")}
//             >
//               One Way
//             </button>
//             <button
//               className={flightType === "return" ? "active" : ""}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           <div className="form-fields">
//             <input
//               type="text"
//               name="from"
//               placeholder="From"
//               value={formData.from}
//               onChange={handleFormDataChange}
//             />
//             <input
//               type="text"
//               name="to"
//               placeholder="To"
//               value={formData.to}
//               onChange={handleFormDataChange}
//             />
//             <input
//               type="date"
//               name="departDate"
//               placeholder="Departure Date"
//               value={formData.departDate}
//               onChange={handleFormDataChange}
//             />
//             {flightType === "return" && (
//               <input
//                 type="date"
//                 name="returnDate"
//                 placeholder="Return Date"
//                 value={formData.returnDate}
//                 onChange={handleFormDataChange}
//               />
//             )}
//           </div>

//           <button className="search-button" onClick={handleFlightSearch}>
//             Search Flights
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bannerhome;






import React, { useState } from "react";

const BookTicketBox = ({
  formData = {
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
  }, // Initialize default formData
  handleFormDataChange, // Ensure this function properly updates the state in the parent component
  handleFlightSearch,
}) => {
  const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

  const handleTripTypeChange = (type) => {
    setIsReturn(type === "return");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ ...formData, [name]: value });
  };

  return (
    <div
      
      className="image-cover hero-header bg-white"
         style={{
           backgroundImage: "url(src/assets/img/banner-7.jpg)",
           backgroundRepeat: "no-repeat",
        }} 
    >


      {/* Header Section */}
      <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
        <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
          A World Of Luxury Awaits For You
        </h1>
        <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
          We Provide Our Best Facilities For You
        </h3>
      </div>

      <div className="bg-white bg-opacity-90 p-3 pb-10 rounded-lg shadow-lg w-[90vw] md:w-[85vw] lg:w-[90vw]">
        {/* Buttons for One Way and Return */}
        <div className="flex gap-2 mb-5 justify-center">
          <button
            className={`px-4 py-2 rounded-lg ${!isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("oneWay")}
          >
            One Way
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${isReturn ? "bg-orange-500" : "bg-orange-50"} hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("return")}
          >
            Return
          </button>
        </div>

        {/* Form Inputs - All in one row */}
        <div className="row gy-3 gx-lg-2 gx-3 d-flex align-items-center justify-content-between">
          {/* From City */}
          <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 position-relative">
            <div className="form-group hdd-arrow mb-0">
              <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
              <input
                type="text"
                name="from"                
                className="leaving form-control fw-bold bg-gray-50 text-lg rounded-lg"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Enter city name"
              />
            </div>
          </div>

          {/* To City */}
          <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
            <div className="form-group hdd-arrow mb-0">
              <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
              <input
                type="text"
                name="to"
                className="goingto form-control fw-bold bg-gray-50 text-lg rounded-lg"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="Enter city name"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="form-group mb-0">
              <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
              <input
                name="departDate"
                className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
                type="date"
                value={formData.departDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Return Date (if applicable) */}
          {isReturn && (
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="form-group mb-0">
                <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
                <input
                  name="returnDate"
                  className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
                  type="date"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          {/* Search Button */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 -mb-7">
            <div className="form-group mb-0">
              <button
                type="button"
                className="btn btn-primary full-width fw-medium text-white px-4 py-3 rounded-lg"
                onClick={handleFlightSearch}
              >
                <i className="fa-solid fa-magnifying-glass me-2"></i>Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketBox;





