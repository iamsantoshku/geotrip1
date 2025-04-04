import React from "react";

const Exprience = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">

            {/* Image Section */}
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="position-relative">
                <img
                  src="/assets/img/img-2.webp"
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
                            src="assets/img/team-1.webp"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/assets/img/team-2.webp"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/assets/img/team-3.webp"
                            alt="avatar"
                          />
                        </li>
                        <li className="avatar avatar-md">
                          <img
                            className="avatar-img circle"
                            src="/assets/img/team-4.webp"
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
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="bestExperience-block">
                <p className="fw-medium text-primary text-md text-uppercase mb-0">
                  Memories
                </p>
                <h2 className="fw-bold lh-base">
                  Our Attractive Experience And Services For You!
                </h2>
                <p className="fw-light fs-6">
                Traveling creates unforgettable memories—waking up to a sunrise over the mountains, the salty breeze of an untouched beach, or the laughter of new friends in a foreign land. It’s the joy of discovering hidden alleys, tasting exotic cuisines, and capturing breathtaking landscapes. Every journey tells a story—getting lost in vibrant city streets, dancing under the northern lights, or sharing moments with locals who turn into lifelong friends. Travel isn’t just about places; it’s about experiences that shape us, broaden our minds, and leave footprints on our hearts. The best memories aren’t planned; they’re found in the unexpected adventures
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

export default Exprience;
