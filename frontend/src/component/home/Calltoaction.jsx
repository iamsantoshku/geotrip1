



import React, { useCallback } from "react";

const Calltoaction = () => {
  // memoized submit handler (even if not used yet)
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Add logic here if needed later
  }, []);

  return (
    <div>
      <div
        className="position-relative bg-cover py-5 bg-primary"
        style={{
          backgroundImage: "url('/assets/img/bg.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between lg:px-10">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="calltoAction-wraps position-relative py-5 px-4">
                <div className="ht-40" />
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                    
                    {/* Title Section */}
                    <div className="calltoAction-title mb-5">
                      <h4 className="text-light fs-2 fw-bold lh-base m-0">
                        Subscribe & Get<br />Special Discount with makeustrip
                      </h4>
                    </div>

                    {/* Newsletter Form */}
                    <div className="newsletter-forms mt-md-0 mt-4">
                      <form onSubmit={handleSubmit}>
                        <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                          
                          {/* Input Field */}
                          <div className="col-xl-9 col-lg-8 col-md-8">
                            <div className="form-group m-0">
                              <input
                                type="email"
                                className="form-control bold ps-1 border-0"
                                placeholder="Enter Your Mail!"
                                aria-label="Email address"
                                required
                              />
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="form-group m-0">
                              <button
                                type="submit"
                                className="btn btn-dark fw-medium full-width"
                              >
                                Submit
                                <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                              </button>
                            </div>
                          </div>

                        </div>
                      </form>
                    </div>

                  </div>
                </div>
                <div className="ht-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Calltoaction);
