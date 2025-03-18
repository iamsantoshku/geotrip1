// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer skin-dark-footer">
//         <div>
//           <div className="container">
//             <div className="row">

//               {/* Logo & About Section */}
//               <div className="col-lg-3 col-md-4">
//                 <div className="footer-widget">
//                   <div className="d-flex align-items-start flex-column mb-3">
//                     <div className="d-inline-block">
//                       {/* <img src="/assets/img/logo-light.png" className="img-fluid" width="160" alt="Footer Logo" /> */}
//                       <img src="/footerlogo.png" className="img-fluid" width="180" alt="Footer Logo" />
//                     </div>
//                   </div>
//                   <div className="footer-add pe-xl-3">
//                     <p>Your trusted travel partner! We offer seamless bookings, budget-friendly packages & unforgettable journeys. Explore hassle-free today!</p>
//                   </div>
//                   <div className="foot-socials">
//                     <ul>
//                       <li><a href="https://www.facebook.com/makeustrips/"><i className="fa-brands fa-facebook"></i></a></li>
//                       <li><a href="https://www.linkedin.com/company/makeustrip/"><i className="fa-brands fa-linkedin"></i></a></li>
//                       {/* <li><a href=""><i className="fa-brands fa-youtube"></i></a></li> */}
//                       <li><a href="https://www.instagram.com/makeus.trip/"><i className="fa-brands fa-instagram"></i></a></li>
//                       {/* <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li> */}
//                       <li><a href="https://twitter.com/makeustrip"><i className="fa-brands fa-twitter"></i></a></li>
//                       <li><a href="https://in.pinterest.com/makeustrip"><i className="fa-brands fa-pinterest"></i></a></li>

//                       {/* <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li> */}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation Links */}
//               <div className="col-lg-2 col-md-4">
//                 <div className="footer-widget">
//                   <h4 className="widget-title">The Navigation</h4>
//                   <ul className="footer-menu">
//                     <li><a href="#">Term of Services</a></li>
//                     <li><a href="#">Privecy Policy</a></li>
//                     <li><a href="#">Refund and Cancellation</a></li>
//                     <li><a href="#">Trust, Safety & Security</a></li>
//                     <li><a href="#">Cookies</a></li>
                   
//                   </ul>
//                 </div>
//               </div>

//               {/* Resources Links */}
              

//               {/* Company Links */}
//               <div className="col-lg-2 col-md-6">
//                 <div className="footer-widget">
//                   <h4 className="widget-title">The Company</h4>
//                   <ul className="footer-menu">
//                     <li><a href="/about-us">About Us</a></li>
                    
//                     <li><a href="contact-us">Contact Us</a></li>
//                     <li><a href="https://affiliateformarketing.com/">Afflicate Program</a></li>
//                     <li><a href="classic-blog">Blog</a></li>
//                     <li><a href="#">Trust, Safety & Security</a></li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Payment & Partners Section */}
//               <div className="col-lg-3 col-md-6">
//                 <div className="footer-widget">
//                   <h4 className="widget-title">Payment Methods</h4>
//                   <div className="pmt-wrap">
//                     <img src="/assets/img/payment.png" className="img-fluid" alt="Payment Methods" />
//                   </div>
//                   <div className="our-prtwrap mt-4">
//                     <div className="prtn-title">
//                       <p className="text-light opacity-75 fw-medium">Our Partners</p>
//                     </div>
//                     <div className="prtn-thumbs d-flex align-items-center justify-content-start">
//                       <div className="pmt-wrap pe-4">
//                         <img src="/assets/img/mytrip.png" className="img-fluid" alt="MyTrip" />
//                       </div>
//                       <div className="pmt-wrap pe-4">
//                         <img src="/assets/img/tripadv.png" className="img-fluid" alt="TripAdvisor" />
//                       </div>
//                       <div className="pmt-wrap pe-4">
//                         <img src="/assets/img/goibibo.png" className="img-fluid" alt="Goibibo" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="footer-bottom border-top">
//           <div className="container">
//             <div className="row align-items-center justify-content-between">

//               <div className="col-xl-6 col-lg-6 col-md-6">
//                 <a href="https://www.webreakglobal.com/"><p  className="mb-0">© 2025 Makeustrip Developed by WebReak Global.</p></a>
                
//               </div>

//               <div className="col-xl-6 col-lg-6 col-md-6">
//                 <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
//                   <li><a href="/term-of-service">Terms of services</a></li>
//                   <li className="ms-3"><a href="/privecy-policy">Privacy Policies</a></li>
//                   <li className="ms-3"><a href="/cookies">Cookies</a></li>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;



import React from "react";

const Footer = () => {
  return (
    <footer className="footer skin-dark-footer">
      <div className="container">
        <div className="row">

          {/* Logo & About Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <div className="mb-3">
                <img src="/footerlogo.png" className="img-fluid" width="180" alt="Footer Logo" />
              </div>
              <p>Your trusted travel partner! We offer seamless bookings, budget-friendly packages & unforgettable journeys. Explore hassle-free today!</p>
              <div className="foot-socials">
                <ul className="d-flex gap-3 list-unstyled">
                  <li><a href="https://www.facebook.com/makeustrips/"><i className="fa-brands fa-facebook"></i></a></li>
                       <li><a href="https://www.linkedin.com/company/makeustrip/"><i className="fa-brands fa-linkedin"></i></a></li>
                       {/* <li><a href=""><i className="fa-brands fa-youtube"></i></a></li> */}
                       <li><a href="https://www.instagram.com/makeus.trip/"><i className="fa-brands fa-instagram"></i></a></li>
                       {/* <li><a href="#"><i className="fa-brands fa-google-plus"></i></a></li> */}
                       <li><a href="https://twitter.com/makeustrip"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a href="https://in.pinterest.com/makeustrip"><i className="fa-brands fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Navigation</h4>
              <ul className="footer-menu">
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund & Cancellation</a></li>
                <li><a href="#">Trust, Safety & Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Company</h4>
              <ul className="footer-menu">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="https://affiliateformarketing.com/">Affiliate Program</a></li>
                <li><a href="/classic-blog">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Payment & Partners Section */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Payment Methods</h4>
              <img src="/assets/img/payment.png" className="img-fluid mb-3" alt="Payment Methods" />
              <h5 className="widget-title mt-3">Our Partners</h5>
              {/* <div className="d-flex gap-3">
                <img src="/assets/img/mytrip.png" className="img-fluid" alt="MyTrip" />
                <img src="/assets/img/tripadv.png" className="img-fluid" alt="TripAdvisor" />
                <img src="/assets/img/goibibo.png" className="img-fluid" alt="Goibibo" />
              </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom border-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            <div className="col-md-6 text-center text-md-start">
              <a href="https://www.webreakglobal.com/">
                <p className="mb-0">© 2025 Makeustrip | Developed by WebReak Global</p>
              </a>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <ul className="d-flex justify-content-center justify-content-md-end list-unstyled m-0">
                <li><a href="/term-of-service">Terms of Service</a></li>
                <li className="ms-3"><a href="/privacy-policy">Privacy Policy</a></li>
                <li className="ms-3"><a href="/cookies">Cookies</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
