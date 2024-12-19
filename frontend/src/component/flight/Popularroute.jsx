// import React from 'react'

// const Popularroute = () => {
//   return (
//     <div>
//         <section class="py-5">
// 			<div class="container">

// 				<div class="row align-items-center justify-content-between mb-3">
// 					<div class="col-8">
// 						<div class="upside-heading">
// 							<h5 class="fw-bold fs-6 m-0">All International Routes</h5>
// 						</div>
// 					</div>
// 					<div class="col-4">
// 						<div class="text-end grpx-btn">
// 							<a href="#" class="btn btn-light-primary btn-md fw-medium">More<i
// 									class="fa-solid fa-arrow-trend-up ms-2"></i></a>
// 						</div>
// 					</div>
// 				</div>

// 				<div class="row">
// 					<div class="col-xl-12 col-lg-12 col-md-12">

// 						<div class="destinationList-wrap">
// 							<div class="tabs-control-slider">
// 								<ul class="nav nav-pills medium" id="pills-tab" role="tablist">
// 									<li class="nav-item mb-2" role="presentation">
// 										<button class="nav-link active" id="pills-flsfirst-tab" data-bs-toggle="pill"
// 											data-bs-target="#pills-flsfirst" type="button" role="tab" aria-controls="pills-flsfirst"
// 											aria-selected="true">Flights To Popular Countries</button>
// 									</li>
// 									<li class="nav-item mb-2" role="presentation">
// 										<button class="nav-link" id="pills-flssecond-tab" data-bs-toggle="pill"
// 											data-bs-target="#pills-flssecond" type="button" role="tab" aria-controls="pills-flssecond"
// 											aria-selected="false">Flights To Popular Destinations</button>
// 									</li>
// 									<li class="nav-item mb-2" role="presentation">
// 										<button class="nav-link" id="pills-flsthird-tab" data-bs-toggle="pill"
// 											data-bs-target="#pills-flsthird" type="button" role="tab" aria-controls="pills-flsthird"
// 											aria-selected="false">Popular Flights</button>
// 									</li>
// 									<li class="nav-item mb-2" role="presentation">
// 										<button class="nav-link" id="pills-flsfourth-tab" data-bs-toggle="pill"
// 											data-bs-target="#pills-flsfourth" type="button" role="tab" aria-controls="pills-flsfourth"
// 											aria-selected="false">Popular Airlines</button>
// 									</li>
// 								</ul>
// 							</div>
// 							<div class="tab-content pt-2" id="pills-tabContent">
// 								<div class="tab-pane fade show active" id="pills-flsfirst" role="tabpanel"
// 									aria-labelledby="pills-flsfirst-tab" tabindex="0">
// 									<div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>France</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>New York</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>India</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></a></li>
// 											</ul>
// 										</div>

// 									</div>
// 								</div>
// 								<div class="tab-pane fade" id="pills-flssecond" role="tabpanel" aria-labelledby="pills-flssecond-tab"
// 									tabindex="0">
// 									<div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>France</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>New York</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>India</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></a></li>
// 											</ul>
// 										</div>

// 									</div>
// 								</div>
// 								<div class="tab-pane fade" id="pills-flsthird" role="tabpanel" aria-labelledby="pills-flsthird-tab"
// 									tabindex="0">
// 									<div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>France</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>New York</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>India</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></a></li>
// 											</ul>
// 										</div>

// 									</div>
// 								</div>
// 								<div class="tab-pane fade" id="pills-flsfourth" role="tabpanel" aria-labelledby="pills-flsfourth-tab"
// 									tabindex="0">
// 									<div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>France</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Turkey</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Japan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Itly</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Poland</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>South Korea</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Spain</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Maxico</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Austria</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Canada</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Thailand</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>New York</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Russia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Vietnaam</span></a>
// 												</li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Denver</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Liverpool</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Indonesia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Chaina</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Zarmeny</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Purtugal</span></a></li>
// 											</ul>
// 										</div>

// 										<div class="col">
// 											<ul class="flightsLists-Wraps p-0">
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>India</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Malaysia</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Pakistan</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Los Vegas</span></a></li>
// 												<li><a href="#" class="text-md text-muted-2"><span>Flight</span> To <span>Singapure</span></a></li>
// 											</ul>
// 										</div>

// 									</div>
// 								</div>
// 							</div>

// 						</div>

// 					</div>
// 				</div>
// 			</div>
// 		</section>
      
//     </div>
//   )
// }

// export default Popularroute





import React from 'react';

// Example data structure
const routesData = [
  {
    tabName: 'Flights To Popular Countries',
    key: 'popular-countries',
    destinations: [
      ['France', 'Turkey', 'Japan', 'Italy', 'Poland'],
      ['South Korea', 'Spain', 'Mexico', 'Austria', 'Canada'],
      ['Thailand', 'New York', 'Russia', 'Vietnam', 'Denver'],
      ['Liverpool', 'Indonesia', 'China', 'Armenia', 'Portugal'],
      ['India', 'Malaysia', 'Pakistan', 'Las Vegas', 'Singapore'],
    ],
  },
  {
    tabName: 'Flights To Popular Destinations',
    key: 'popular-destinations',
    destinations: [
      ['Paris', 'Istanbul', 'Tokyo', 'Venice', 'Warsaw'],
      ['Seoul', 'Barcelona', 'Mexico City', 'Vienna', 'Toronto'],
    ],
  },
  // Add more tabs as needed
];

const PopularRoute = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-3">
          <div className="col-8">
            <h5 className="fw-bold fs-6 m-0">All International Routes</h5>
          </div>
          <div className="col-4 text-end">
            <button className="btn btn-light-primary btn-md fw-medium">
              More
              <i className="fa-solid fa-arrow-trend-up ms-2"></i>
            </button>
          </div>
        </div>

        <ul className="nav nav-pills medium mb-3" id="pills-tab" role="tablist">
          {routesData.map((route, index) => (
            <li className="nav-item mb-2" key={route.key}>
              <button
                className={`nav-link ${index === 0 ? 'active' : ''}`}
                id={`pills-${route.key}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${route.key}`}
                type="button"
                role="tab"
                aria-controls={`pills-${route.key}`}
                aria-selected={index === 0}
              >
                {route.tabName}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content pt-2" id="pills-tabContent">
          {routesData.map((route, index) => (
            <div
              key={route.key}
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={`pills-${route.key}`}
              role="tabpanel"
              aria-labelledby={`pills-${route.key}-tab`}
            >
              <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
                {route.destinations.map((column, colIndex) => (
                  <div className="col" key={colIndex}>
                    <ul className="flightsLists-Wraps p-0">
                      {column.map((destination, destIndex) => (
                        <li key={destIndex}>
                          <a href="#" className="text-md text-muted-2">
                            <span>Flight</span> To <span>{destination}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoute;
