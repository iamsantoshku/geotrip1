// import React from 'react'

// const Carlist = () => {
//   return (
//     <div class="col-xl-9 col-lg-8 col-md-12">

// 						<div class="row align-items-center justify-content-between">
// 							<div class="col-xl-4 col-lg-4 col-md-4">
// 								<h5 class="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
// 							</div>
// 							<div class="col-xl-8 col-lg-8 col-md-12">
// 								<div class="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
// 									<div class="flsx-first me-2">
// 										<div class="bg-white rounded py-2 px-3">
// 											<div class="form-check form-switch">
// 												<input class="form-check-input" type="checkbox" role="switch" id="mapoption">
// 												<label class="form-check-label ms-1" for="mapoption">Map</label>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="flsx-first mt-sm-0 mt-2">
// 										<ul class="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm"
// 											id="filtersblocks" role="tablist">
// 											<li class="nav-item" role="presentation">
// 												<button class="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button"
// 													role="tab" aria-selected="true">Our Trending</button>
// 											</li>
// 											<li class="nav-item" role="presentation">
// 												<button class="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button"
// 													role="tab" aria-selected="false">Most Popular</button>
// 											</li>
// 											<li class="nav-item" role="presentation">
// 												<button class="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab"
// 													aria-selected="false">Lowest Price</button>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						<div class="row align-items-center g-4 mt-2">

// 							<!-- Single List -->
// 							<div class="col-xl-12 col-lg-12 col-md-12">
// 								<div class="card list-layout-block rounded-3 p-3">
// 									<div class="row">

// 										<div class="col-xl-4 col-lg-3 col-md">
// 											<div class="cardImage__caps rounded-2 overflow-hidden h-100">
// 												<img class="img-fluid h-100 object-fit" src="assets/img/car.jpg" alt="image">
// 											</div>
// 										</div>

// 										<div class="col-xl col-lg col-md">
// 											<div class="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
// 												<h4 class="fs-5 fw-bold mb-1">Toyota Aygo</h4>
// 												<ul class="row g-2 p-0">
// 													<li class="col-auto">
// 														<p class="text-muted-2 text-md">SUV</p>
// 													</li>
// 													<li class="col-auto">
// 														<p class="text-muted-2 text-md fw-bold">.</p>
// 													</li>
// 													<li class="col-auto">
// 														<p class="text-muted-2 text-md">AC</p>
// 													</li>
// 													<li class="col-auto">
// 														<p class="text-muted-2 text-md fw-bold">.</p>
// 													</li>
// 													<li class="col-auto">
// 														<p class="text-muted-2 text-md">5 Seats</p>
// 													</li>
// 												</ul>
// 												<div class="detail ellipsis-container mt-3">
// 													<span class="ellipsis">Manual</span>
// 													<span class="ellipsis">1 Large Bag</span>
// 													<span class="ellipsis">1 Small Bag</span>
// 													<span class="ellipsis">Disel</span>
// 												</div>
// 												<div class="position-relative mt-3">
// 													<div class="fw-medium text-dark">600Kms included. After that $15/Kms</div>
// 													<div class="text-md text-muted">Free waiting up to 45 minutes</div>
// 												</div>
// 												<div class="position-relative mt-4">
// 													<div class="d-block position-relative"><span class="label bg-light-success text-success">Free
// 															Cancellation, till 1 hour of Pick up</span></div>
// 													<div class="text-md">
// 														<p class="m-0"><a href="#" class="text-primary">Login</a> & get additional $15 Off Using
// 															<span class="text-primary">Visa card</span>
// 														</p>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<div
// 											class="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
// 											<div class="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
// 												<div class="col-auto text-start text-md-end">
// 													<div class="text-md text-dark fw-medium">Exceptional</div>
// 													<div class="text-md text-muted-2">3,014 reviews</div>
// 												</div>
// 												<div class="col-auto">
// 													<div class="square--40 rounded-2 bg-primary text-light">4.8</div>
// 												</div>
// 											</div>

// 											<div class="position-relative mt-auto full-width">
// 												<div class="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
// 													<span class="label bg-success text-light">15% Off</span>
// 												</div>
// 												<div class="d-flex align-items-center justify-content-start justify-content-md-end">
// 													<div class="text-muted-2 fw-medium text-decoration-line-through me-2">US$79</div>
// 													<div class="text-dark fw-bold fs-3">$59</div>
// 												</div>
// 												<div
// 													class="d-flex align-items-start align-items-md-end justify-content-start justify-content-md-end flex-column mb-2">
// 													<div class="text-muted-2 text-sm">+$22 taxes & Fees</div>
// 												</div>
// 												<div class="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
// 													<a href="#" class="btn btn-md btn-primary full-width fw-medium px-lg-4">See Availability<i
// 															class="fa-solid fa-arrow-trend-up ms-2"></i></a>
// 												</div>
// 											</div>
// 										</div>

// 									</div>
// 								</div>
// 							</div>
//     </div>                  
//   )
// }

// export default Carlist




import React, { useEffect, useState } from "react";
// import CarCard from "./CarCard";
import Carcard1 from "./Carcard1";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";

const Carlist = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cars from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get( BACKENDURL + "/api/v1/cars/getallcars"); // Adjust API endpoint
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="col-xl-9 col-lg-8 col-md-12">
      <div className="row align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h5 className="fw-bold fs-6 mb-lg-0 mb-3">
            Showing {cars.length} Search Results
          </h5>
        </div>
      </div>

      <div className="row align-items-center g-4 mt-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cars.map((car) => <Carcard1 key={car._id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Carlist;
