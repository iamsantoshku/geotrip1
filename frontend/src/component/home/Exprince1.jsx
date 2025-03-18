import React from "react";

const Exprince1 = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">

            {/* Image Section */}
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="position-relative ml-20">
                <img
                  src="/makeustripaboutus.png"
                  className="img-fluid rounded-3 position-relative z-1"
                  alt="Experience"
                />
                <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-2">
                  <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2 shadow-wrap">
                    
                    {/* Avatar Group */}
                    <div className="me-4">
                      <h6 className="fw-normal">Client</h6>
                      <ul className="avatar-group mb-0">
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/img2.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/img3.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/img3.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="img2.jpg"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <div className="avatar-img circle bg-primary">
                            <span className="text-white position-absolute top-50 start-50 translate-middle small">
                              1K+
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Rating Section */}
                    <div>
                      <h6 className="fw-normal mb-3">Rating</h6>
                      <h6 className="m-0">
                        4.5<i className="fa-solid fa-star text-warning ms-1"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-xl-5 col-lg-6 col-md-6 -ml-7">
              <div className="bestExperience-block -ml-10">
                <p className="fw-medium text-primary text-md text-uppercase mb-0">
                  About Us
                </p>
                
                <p className="fw-light fs-6">
                Make Us Trip offers holiday packages that fit different budgets and travel needs. Our team handles travel planning, itinerary design, hotel bookings, ticket reservations, and transport. We work 24/7 to create smooth travel experiences. We offer trips for families, couples, solo travellers, and groups. Each journey is planned with care to give you a smooth experience. No matter if you are on the way to a honeymoon, family vacation, or adventure tour, we take care of all the details. We aim to make travel simple and convenient. We emphasize quality, affordability, and convenience. With years of experience, we bring destinations closer to travellers. Experience hassle-free travel with trusted services. Explore the world with Make Us Trip.

                </p>
                <div className="d-inline-flex mt-4">
                  <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                    <h6 className="fw-bold fs-3 m-0">33</h6>
                    <p className="m-0 text-sm text-muted-2">Year Experience</p>
                  </div>
                  <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple me-3">
                    <h6 className="fw-bold fs-3 m-0">78</h6>
                    <p className="m-0 text-sm text-muted-2">
                      Destination Collaboration
                    </p>
                  </div>
                  <div className="d-inline-flex flex-column justify-content-center align-items-center py-3 px-3 rounded gray-simple">
                    <h6 className="fw-bold fs-3 m-0">25K</h6>
                    <p className="m-0 text-sm text-muted-2">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Exprince1;
