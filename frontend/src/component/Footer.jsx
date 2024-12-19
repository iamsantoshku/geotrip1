import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer skin-dark-footer">
        <div>
          <div className="container">
            <div className="row">

              {/* Logo & About Section */}
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget">
                  <div className="d-flex align-items-start flex-column mb-3">
                    <div className="d-inline-block">
                      <img src="src/assets/img/logo-light.png" className="img-fluid" width="160" alt="Footer Logo" />
                    </div>
                  </div>
                  <div className="footer-add pe-xl-3">
                    <p>We make your dream more beautiful & enjoyful with lots of happiness.</p>
                  </div>
                  <div className="foot-socials">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">The Navigation</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Talent Marketplace</a></li>
                    <li><a href="#">Payroll Services</a></li>
                    <li><a href="#">Direct Contracts</a></li>
                    <li><a href="#">Hire Worldwide</a></li>
                    <li><a href="#">Hire in the USA</a></li>
                    <li><a href="#">How to Hire</a></li>
                  </ul>
                </div>
              </div>

              {/* Resources Links */}
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget">
                  <h4 className="widget-title">Our Resources</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Free Business tools</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Upwork Reviews</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Help & Support</a></li>
                  </ul>
                </div>
              </div>

              {/* Company Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">The Company</h4>
                  <ul className="footer-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Trust, Safety & Security</a></li>
                  </ul>
                </div>
              </div>

              {/* Payment & Partners Section */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Payment Methods</h4>
                  <div className="pmt-wrap">
                    <img src="src/assets/img/payment.png" className="img-fluid" alt="Payment Methods" />
                  </div>
                  <div className="our-prtwrap mt-4">
                    <div className="prtn-title">
                      <p className="text-light opacity-75 fw-medium">Our Partners</p>
                    </div>
                    <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                      <div className="pmt-wrap pe-4">
                        <img src="src/assets/img/mytrip.png" className="img-fluid" alt="MyTrip" />
                      </div>
                      <div className="pmt-wrap pe-4">
                        <img src="src/assets/img/tripadv.png" className="img-fluid" alt="TripAdvisor" />
                      </div>
                      <div className="pmt-wrap pe-4">
                        <img src="src/assets/img/goibibo.png" className="img-fluid" alt="Goibibo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom border-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">

              <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="mb-0">© 2023 GeoTrip Design by Themezhub.</p>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                  <li><a href="#">Terms of services</a></li>
                  <li className="ms-3"><a href="#">Privacy Policies</a></li>
                  <li className="ms-3"><a href="#">Cookies</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
