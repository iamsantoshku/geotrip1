


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
