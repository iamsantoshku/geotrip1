// import React from 'react'

// const Herosearch = () => {
//   return (
   
//         <div class="search-explore-wrap">
// 			<div class="container">
// 				<div class="row">
// 					<div class="col-xl-12 col-lg-12 col-md-12">

// 						<div class="search-wrap with-label overio">
// 							<div class="row">

// 								<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
// 									<div class="fliore">
// 										<div class="rounded-top-3 d-inline-flex overflow-hidden">
// 											<ul class="nav nav-tabs simple-tabs medium border-0 justify-content-center" id="tour-pills-tab" role="tablist">
// 												<li class="nav-item">
// 													<a class="nav-link active" data-bs-toggle="tab" href="#hotels"><i class="fa-solid fa-hotel me-2"></i>Hotels</a>
// 												</li>
// 												<li class="nav-item">
// 													<a class="nav-link" data-bs-toggle="tab" href="#flights"><i class="fa-solid fa-jet-fighter me-2"></i>Flights</a>
// 												</li>
// 												<li class="nav-item">
// 													<a class="nav-link" data-bs-toggle="tab" href="#tours"><i class="fa-solid fa-globe me-2"></i>Tour</a>
// 												</li>
// 												<li class="nav-item">
// 													<a class="nav-link" data-bs-toggle="tab" href="#cabs"><i class="fa-solid fa-car me-2"></i>Cab</a>
// 												</li>
// 											</ul>
// 										</div>

// 										<div class="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
// 											<div class="tab-pane show active" id="hotels">
// 												<div class="row gy-3 gx-md-3 gx-sm-2">

// 													<div class="col-xl-8 col-lg-7 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 																<div class="form-group hdd-arrow mb-0">
// 																	<select class="goingto form-control fw-bold hdd-arrow">
// 																		<option value="">Select</option>
// 																		<option value="ny">New York</option>
// 																		<option value="sd">San Diego</option>
// 																		<option value="sj">San Jose</option>
// 																		<option value="ph">Philadelphia</option>
// 																		<option value="nl">Nashville</option>
// 																		<option value="sf">San Francisco</option>
// 																		<option value="hu">Houston</option>
// 																		<option value="sa">San Antonio</option>
// 																	</select>
// 																</div>
// 															</div>
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 																<div class="form-group mb-0">
// 																	<input type="text" class="form-control fw-bold" placeholder="Check-In & Check-Out"
// 																		id="checkinout" readonly="readonly">
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="col-xl-4 col-lg-5 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
// 																<div class="form-group mb-0">
// 																	<div class="booking-form__input guests-input mixer-auto">
// 																		<button name="guests-btn" id="guests-input-btn">1 Guest</button>
// 																		<div class="guests-input__options" id="guests-input-options">
// 																			<div>
// 																				<span class="guests-input__ctrl minus" id="adults-subs-btn"><i
// 																						class="fa-solid fa-minus"></i></span>
// 																				<span class="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
// 																				<span class="guests-input__ctrl plus" id="adults-add-btn"><i
// 																						class="fa-solid fa-plus"></i></span>
// 																			</div>
// 																			<div>
// 																				<span class="guests-input__ctrl minus" id="children-subs-btn"><i
// 																						class="fa-solid fa-minus"></i></span>
// 																				<span class="guests-input__value"><span id="guests-count-children">0</span>Children</span>
// 																				<span class="guests-input__ctrl plus" id="children-add-btn"><i
// 																						class="fa-solid fa-plus"></i></span>
// 																			</div>
// 																			<div>
// 																				<span class="guests-input__ctrl minus" id="room-subs-btn"><i
// 																						class="fa-solid fa-minus"></i></span>
// 																				<span class="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
// 																				<span class="guests-input__ctrl plus" id="room-add-btn"><i
// 																						class="fa-solid fa-plus"></i></span>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</div>
// 															</div>
// 															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
// 																<div class="form-group mb-0">
// 																	<button type="button" class="btn btn-primary full-width fw-medium"><i
// 																			class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
// 																</div>
// 															</div>
// 														</div>
// 													</div>

// 												</div>	
// 											</div>
// 											<div class="tab-pane" id="flights">
// 												<div class="row gx-lg-2 g-3">

// 													<div class="col-xl-5 col-lg-5 col-md-12">
// 													  <div class="row gy-3 gx-lg-2 gx-3">
// 														<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 														  <div class="form-group hdd-arrow mb-0">
// 															<select class="leaving form-control fw-bold">
// 															  <option value="">Select</option>
// 															  <option value="ny">New York</option>
// 															  <option value="sd">San Diego</option>
// 															  <option value="sj">San Jose</option>
// 															  <option value="ph">Philadelphia</option>
// 															  <option value="nl">Nashville</option>
// 															  <option value="sf">San Francisco</option>
// 															  <option value="hu">Houston</option>
// 															  <option value="sa">San Antonio</option>
// 															</select>
// 														  </div>
// 														  <div class="btn-flip-icon mt-md-0">
// 															<button class="p-0 m-0 text-primary"><i class="fa-solid fa-right-left"></i></button>
// 														  </div>
// 														</div>
// 														<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 														  <div class="form-groupp hdd-arrow mb-0">
// 															<select class="goingto form-control fw-bold">
// 															  <option value="">Select</option>
// 															  <option value="lv">Las Vegas</option>
// 															  <option value="la">Los Angeles</option>
// 															  <option value="kc">Kansas City</option>
// 															  <option value="no">New Orleans</option>
// 															  <option value="kc">Jacksonville</option>
// 															  <option value="lb">Long Beach</option>
// 															  <option value="cl">Columbus</option>
// 															  <option value="cn">Canada</option>
// 															</select>
// 														  </div>
// 														</div>
// 													  </div>
// 													</div>
// 													<div class="col-xl-4 col-lg-4 col-md-12">
// 													  <div class="row gy-3 gx-lg-2 gx-3">
// 														<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 														  <div class="form-group mb-0">
// 															<input class="form-control fw-bold choosedate" type="text" placeholder="Departure.." readonly="readonly">
// 														  </div>
// 														</div>
// 														<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 														  <div class="form-group mb-0">
// 															<input class="form-control fw-bold choosedate" type="text" placeholder="Return.." readonly="readonly">
// 														  </div>
// 														</div>
// 													  </div>
// 													</div>
// 													<div class="col-xl-2 col-lg-2 col-md-12">
// 													  <div class="form-groupp hdd-arrow mb-0">
// 														<select class="occupant form-control fw-bold">
// 														  <option value="">Select</option>
// 														  <option value="lv">01 Adult</option>
// 														  <option value="la">02 Adult</option>
// 														  <option value="kc">03 Adult</option>
// 														  <option value="no">04 Adult</option>
// 														  <option value="kc">05 Adult</option>
// 														  <option value="lb">06 Adult</option>
// 														  <option value="cl">07 Adult</option>
// 														  <option value="cn">08 Adult</option>
// 														</select>
// 													  </div>
// 													</div>
// 													<div class="col-xl-1 col-lg-1 col-md-12">
// 													  <div class="form-group mb-0">
// 														<button type="button" class="btn btn-primary full-width fw-medium"><i
// 															class="fa-solid fa-magnifying-glass fs-5"></i></button>
// 													  </div>
// 													</div>

// 												  </div>
// 											</div>
// 											<div class="tab-pane" id="tours">
// 												<div class="row gy-3 gx-md-3 gx-sm-2">

// 													<div class="col-xl-8 col-lg-7 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 																<div class="form-group hdd-arrow mb-0">
// 																	<select class="goingto form-control fw-bold">
// 																		<option value="">Select</option>
// 																		<option value="ny">New York</option>
// 																		<option value="sd">San Diego</option>
// 																		<option value="sj">San Jose</option>
// 																		<option value="ph">Philadelphia</option>
// 																		<option value="nl">Nashville</option>
// 																		<option value="sf">San Francisco</option>
// 																		<option value="hu">Houston</option>
// 																		<option value="sa">San Antonio</option>
// 																	</select>
// 																</div>
// 															</div>
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 																<div class="form-group mb-0">
// 																	<input type="text" class="form-control choosedate fw-bold" placeholder="Choose Date" readonly="readonly">
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="col-xl-4 col-lg-5 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
// 																<div class="form-group hdd-arrow mb-0">
// 																	<select class="tour form-control fw-bold">
// 																		<option value="">Select</option>
// 																		<option value="ny">Family Package</option>
// 																		<option value="sd">Honymoon Package</option>
// 																		<option value="sj">Group Package</option>
// 																		<option value="ph">Desert</option>
// 																		<option value="nl">History</option>
// 																	</select>
// 																</div>
// 															</div>
// 															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
// 																<div class="form-group mb-0">
// 																	<button type="button" class="btn btn-primary full-width fw-medium"><i
// 																			class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
// 																</div>
// 															</div>
// 														</div>
// 													</div>

// 												</div>
// 											</div>
// 											<div class="tab-pane" id="cabs">
// 												<div class="row gy-3 gx-md-3 gx-sm-2">

// 													<div class="col-xl-8 col-lg-7 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
// 																<div class="form-group hdd-arrow mb-0">
// 																	<select class="pickup form-control fw-bold">
// 																		<option value="">Select</option>
// 																		<option value="ny">New York</option>
// 																		<option value="sd">San Diego</option>
// 																		<option value="sj">San Jose</option>
// 																		<option value="ph">Philadelphia</option>
// 																		<option value="nl">Nashville</option>
// 																		<option value="sf">San Francisco</option>
// 																		<option value="hu">Houston</option>
// 																		<option value="sa">San Antonio</option>
// 																	</select>
// 																</div>
// 															</div>
// 															<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
// 																<div class="form-group hdd-arrow mb-0">
// 																	<select class="drop form-control fw-bold">
// 																		<option value="">Select</option>
// 																		<option value="ny">New York</option>
// 																		<option value="sd">San Diego</option>
// 																		<option value="sj">San Jose</option>
// 																		<option value="ph">Philadelphia</option>
// 																		<option value="nl">Nashville</option>
// 																		<option value="sf">San Francisco</option>
// 																		<option value="hu">Houston</option>
// 																		<option value="sa">San Antonio</option>
// 																	</select>
// 																</div>
// 															</div>
// 														</div>
// 													</div>
// 													<div class="col-xl-4 col-lg-5 col-md-12">
// 														<div class="row gy-3 gx-md-3 gx-sm-2">
// 															<div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
// 																<div class="form-group mb-0">
// 																	<input type="text" class="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readonly="readonly">
// 																</div>
// 															</div>
// 															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
// 																<div class="form-group mb-0">
// 																	<button type="button" class="btn btn-primary full-width fw-medium"><i
// 																			class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
// 																</div>
// 															</div>
// 														</div>
// 													</div>

// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>

// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
      
    
//   )
// }

// export default Herosearch




// import React, { useState } from "react";

// // Main Herosearch Component
// const Herosearch = () => {
//   const [activeTab, setActiveTab] = useState("hotels");

//   const tabs = [
//     { id: "hotels", label: "Hotels", icon: "fa-solid fa-hotel" },
//     { id: "flights", label: "Flights", icon: "fa-solid fa-jet-fighter" },
//     { id: "tours", label: "Tours", icon: "fa-solid fa-globe" },
//     { id: "cabs", label: "Cabs", icon: "fa-solid fa-car" },
//   ];

//   return (
//     <div className="search-explore-wrap">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-12 col-lg-12 col-md-12">
//             <div className="search-wrap with-label overio">
//               {/* Tab Navigation Component */}
//               <TabNavigation
//                 tabs={tabs}
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />

//               {/* Tab Content */}
//               <div className="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
//                 {activeTab === "hotels" && <HotelsTab />}
//                 {activeTab === "flights" && <FlightsTab />}
//                 {activeTab === "tours" && <ToursTab />}
//                 {activeTab === "cabs" && <CabsTab />}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Tab Navigation Component
// const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
//   return (
//     <ul className="nav nav-tabs">
//       {tabs.map((tab) => (
//         <li key={tab.id} className="nav-item">
//           <button
//             className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             <i className={tab.icon}></i> {tab.label}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// // Tab Components
// const HotelsTab = () => (
//   <div className="tab-pane show active">
//     <h3>Search for Hotels</h3>
//     {/* Hotels search form */}
//   </div>
// );

// const FlightsTab = () => (
//   <div className="tab-pane">
//     <h3>Search for Flights</h3>
//     {/* Flights search form */}
//   </div>
// );

// const ToursTab = () => (
//   <div className="tab-pane">
//     <h3>Search for Tours</h3>
//     {/* Tours search form */}
//   </div>
// );

// const CabsTab = () => (
//   <div className="tab-pane">
//     <h3>Search for Cabs</h3>
//     {/* Cabs search form */}
//   </div>
// );

// export default Herosearch;


import React from 'react';
import FlightsTab from '../card/FlightsTab';
import ToursTab from '../card/ToursTab';
import CabsTab from '../card/CabsTab';
import HotelsTab from '../card/HotelsTab';

const HeroSearch = () => {
  return (
    <div className="search-explore-wrap lg:px-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="search-wrap with-label overio">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="fliore">
                    <div className="rounded-top-3 d-inline-flex overflow-hidden">
                      <ul
                        className="nav nav-tabs simple-tabs medium border-0 justify-content-center"
                        id="tour-pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#hotels"
                          >
                            <i className="fa-solid fa-hotel me-2"></i>Hotels
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#flights"
                          >
                            <i className="fa-solid fa-jet-fighter me-2"></i>
                            Flights
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#tours"
                          >
                            <i className="fa-solid fa-globe me-2"></i>Tour
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#cabs"
                          >
                            <i className="fa-solid fa-car me-2"></i>Cab
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content bg-white rounded-bottom-3 shadow-wrap p-3">
                      
                      <HotelsTab/>
                      {/* Add the rest of the tabs similar to hotels */}
                      <FlightsTab/>
                      <ToursTab/>
                      <CabsTab/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
