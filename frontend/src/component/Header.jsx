
import React from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../pages/Login';
import Currency from './Currency';
import Country from './Country';
// import { AuthContextProvider } from '../context/authContext';
import { authContext } from '../context/authContext';
import { useContext } from 'react';
import AccountDropdown from './userprofile/AccountDropdown';

// SkqQGUBOM7pWq44o-pass 
const Header = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUserLoggedIn = localStorage.getItem("token") !== "null";
  const { user, token } = useContext(authContext);

  const location = useLocation();

  const isHomePage = location.pathname === '/';
  
  const [showModal, setShowModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const [showSignupModal, setShowSignupModal] = useState(false);

  const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className="header header-transparent theme">
    <div className={`header theme ${isHomePage ? 'header-transparent' : 'bg-gray-300'} lg:px-10`}>
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            

<a className="nav-brand static-show" href="/">
              {isScrolled && isHomePage ? (
                <img src="/assets/img/logo-light.png" className="logo" alt="Scrolled Logo" />
              ) : (
                <img src="/assets/img/logo.png" className="logo" alt="Default Logo" />
              )}
            </a>
            <a className="nav-brand mob-show" href="/">
              <img src="/assets/img/logo.png" className="logo" alt="Logo" />
            </a>
            <div className="nav-toggle"></div>
            <div className="mobile_nav">
              <ul>
                <li className="currencyDropdown me-2">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setShowCurrencyModal(true);
                  }} className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal">
                    <span className="fw-medium">INR</span>
                  </a>
                </li>
                <li className="languageDropdown me-2">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setShowCountryModal(true);
                  }} className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                    <img src="/assets/img/flag/flag.png" className="img-fluid" width="17" alt="Country" />
                  </a>
                </li>
                <li>
                  {isUserLoggedIn ? (
                    <div>
                      <AccountDropdown/>
                    </div>
                  ):
                  <a href="#" onClick={() => setShowModal(true)} className="bg-light-primary text-primary rounded" data-bs-toggle="modal" data-bs-target="#login">
                    <i className="fa-regular fa-circle-user fs-6"></i>
                  </a>

                  }
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
            <ul className="nav-menu">
              <li>
                <a href="JavaScript:Void(0);">
                  Home<span className="submenu-indicator"></span>
                </a>

                
                
              </li>
              <li>
                <a href="JavaScript:Void(0);">
                  Listing<span className="submenu-indicator"></span>
                </a>
                
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="JavaScript:Void(0);">
                      Hotel<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="hotel-list">Hotel list 01</a></li>
                      
                      <li><a href="hotel-details">Hotel Detail 01</a></li>
                     
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Flight<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="flight-list-01">Flight List 01</a></li>
                      <li><a href="flight-list-02.html">Flight List 02</a></li>
                      <li><a href="Flight-detail.html">Flight Detail</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Rental<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="property-list">Rental List 01</a></li>
                     
                      <li><a href="rental-detail.html">Rental Detail</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Car<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="car-list">Car List 01</a></li>
                      
                      <li><a href="car-detail.html">Car Detail</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="JavaScript:Void(0);">
                      Destination<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="destination-01.html">Destination List 01</a></li>
                      <li><a href="destination-02.html">Destination List 02</a></li>
                      <li><a href="destination-03.html">Destination List 03</a></li>
                      <li><a href="destination-detail.html">Destination Detail</a></li>
                    </ul>
                  </li>
                  {/* <li><a href="join-us.html">Join with GeoTrip</a></li>
                  <li><a href="add-listing.html">Add Listing</a></li>
                  <li><a href="compare-listing.html">Compare Listing</a></li>
                  <li><a href="booking-page.html">Booking Page</a></li>
                  <li><a href="my-profile.html">User Dashboard</a></li> */}
                </ul>
              </li>
              <li>
                <a href="JavaScript:Void(0);">
                  Pages<span className="submenu-indicator"></span>
                </a>
                
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="JavaScript:Void(0);">
                      Blog<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="classic-blog">Classic Blog</a></li>
                      
                    </ul>
                  </li>
                  
                  <li><a href="about-us.html">About Us</a></li>
                  
                  <li>
                    <a href="JavaScript:Void(0);">
                      Contact Us<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li><a href="contact-v1.html">Contact V.01</a></li>
                      <li><a href="contact-v2.html">Contact V.02</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="JavaScript:Void(0);">
                  Menu<span className="submenu-indicator"></span>
                </a>
                
                <ul className="nav-dropdown nav-submenu xxl-menu">
                  <li>
                    <a href="stay">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4">
                          <i className="fa-solid fa-spa"></i>
                        </div>
                        <div className="mega-last ps-2">
                          <h6 className="mb-0 ft-bold fs-13">Stay</h6>
                          <p className="m-0 fs-10 text-muted">Top Rated Hotels</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="flight">
                      <div className="mega-advance-menu">
                        <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4">
                          <i className="fa-solid fa-plane-departure"></i>
                        </div>
                        <div className="mega-last ps-2">
                          <h6 className="mb-0 ft-bold fs-13">Flight</h6>
                          <p className="m-0 fs-10 text-muted">Top Rated Flights</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
										<a href="hotel">
											<div className="mega-advance-menu">
												<div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i
														className="fa-solid fa-hotel"></i></div>
												<div className="mega-last ps-2">
													<h6 className="lh-base fs-6 font--bold m-0">Hotel</h6>
													<p className="text-sm-muted m-0">Beautiful Place for stays</p>
												</div>
											</div>
										</a>
									</li>
                  <li>
										<a href="car">
											<div className="mega-advance-menu">
												<div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i
														className="fa-brands fa-dropbox"></i></div>
												<div className="mega-last ps-2">
													<h6 className="lh-base fs-6 font--bold m-0">Cabs</h6>
													<p className="text-sm-muted m-0">Beautiful Place for stays</p>
												</div>
											</div>
										</a>
									</li>
                </ul>
              </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li className="currencyDropdown me-2">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCurrencyModal(true);
                  }}
                >
                  <span className="fw-medium">INR</span>
                </a>
              </li>


              {/* <Currency/> */}
              <Currency
                show={showCurrencyModal}
                onClose={() => setShowCurrencyModal(false)}
              />

              {/* Language Dropdown */}

              <li className="languageDropdown me-2">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCountryModal(true);
                  }}
                >
                  <img
                    src="/assets/img/flag/flag.png"
                    className="img-fluid"
                    width="17"
                    alt="Country"
                  />
                </a>
              </li>

              <Country
                show={showCountryModal}
                onClose={() => setShowCountryModal(false)}
              />

              {/* Sign In / Register */}
              
           <li className="list-buttons light">
            {isUserLoggedIn ?(
              <div>
                <AccountDropdown/>
              </div>
            ):
           
            <a href="/#" onClick={() => setShowModal(true)}>
              <i className="fa-regular fa-circle-user fs-6 me-2"></i>
              Sign In / Register
            </a>                           
            }
             </li>
            </ul>
            {/* <Login/> */}
            <Login showModal={showModal} setShowModal={setShowModal} />
           
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;







