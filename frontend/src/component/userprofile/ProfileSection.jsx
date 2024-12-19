import React from "react";
import AvatarUpload from "./AvatarUpload";
import UpdateAccount from "./UpdateAccount";
// import "./ProfileSection.css"; // Include your CSS file for styling

const ProfileSection = () => {
    return (
        <section className="pt-5 gray-simple position-relative">
            <div className="container">
                {/* Offcanvas Toggle */}
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <button
                            className="btn btn-dark fw-medium full-width d-block d-lg-none"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDashboard"
                            aria-controls="offcanvasDashboard"
                        >
                            <i className="fa-solid fa-gauge me-2"></i>Dashboard Navigation
                        </button>
                        <div
                            className="offcanvas offcanvas-start"
                            data-bs-scroll="true"
                            data-bs-backdrop="false"
                            tabIndex="-1"
                            id="offcanvasDashboard"
                            aria-labelledby="offcanvasScrollingLabel"
                        >
                            <div className="offcanvas-header gray-simple">
                                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                                    Offcanvas with body scrolling
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body p-0">
                                <ul className="user-Dashboard-longmenu">
                                    <li className="active">
                                        <a href="user-profile">
                                            <i className="fa-regular fa-id-card me-2"></i>My Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="my-booking">
                                            <i className="fa-solid fa-ticket me-2"></i>My Booking
                                        </a>
                                    </li>
                                    <li>
                                        <a href="travelers.html">
                                            <i className="fa-solid fa-user-group me-2"></i>Travelers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="payment-detail.html">
                                            <i className="fa-solid fa-wallet me-2"></i>Payment Details
                                        </a>
                                    </li>
                                    <li>
                                        <a href="my-wishlists.html">
                                            <i className="fa-solid fa-shield-heart me-2"></i>My Wishlist
                                        </a>
                                    </li>
                                    <li>
                                        <a href="settings.html">
                                            <i className="fa-solid fa-sliders me-2"></i>Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="delete-account.html">
                                            <i className="fa-solid fa-trash-can me-2"></i>Delete Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login.html">
                                            <i className="fa-solid fa-power-off me-2"></i>Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start justify-content-between gx-xl-4">
                    {/* User Card */}
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card rounded-2 me-xl-5 mb-4">
                            <div className="card-top bg-primary position-relative">
                                <div className="position-absolute end-0 top-0 mt-4 me-3">
                                    <a href="login.html" className="square--40 circle bg-light-dark text-light">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </a>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="crd-thumbimg text-center">
                                        <div className="p-2 d-flex align-items-center justify-content-center brd">
                                            <img
                                                src="/assets/img/team-1.jpg"
                                                className="img-fluid circle"
                                                width="120"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="crd-capser text-center">
                                        <h5 className="mb-0 text-light fw-semibold">Adam K. Divliars</h5>
                                        <span className="text-light opacity-75 fw-medium text-md">
                                            <i className="fa-solid fa-location-dot me-2"></i>California, USA
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Completion */}
                            <div className="card-middle mt-5 mb-4 px-4">
                                <div className="revs-wraps mb-3">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                                        <span className="text-dark fw-semibold text-md">75%</span>
                                    </div>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Example"
                                        aria-valuenow="87"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ height: "7px" }}
                                    >
                                        <div className="progress-bar bg-success" style={{ width: "87%" }}></div>
                                    </div>
                                </div>
                                <div className="crd-upgrades">
                                    <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button">
                                        <i className="fa-solid fa-sun me-2"></i>Upgrade Pro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        {/* Personal Information */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4>
                                    <i className="fa-solid fa-file-invoice me-2"></i>Personal Information
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="row align-items-center justify-content-start">

                                    <AvatarUpload />
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" defaultValue="Adam K" />
                                        </div>
                                    </div>
                                    {/* Add more fields */}

                                    <div className="row">
                                        {/* Last Name */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" defaultValue="Divliars" />
                                            </div>
                                        </div>

                                        {/* Email ID */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Email ID</label>
                                                <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" />
                                            </div>
                                        </div>

                                        {/* Mobile */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Mobile</label>
                                                <input type="text" className="form-control" defaultValue="9856542563" />
                                            </div>
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="date" className="form-control" defaultValue="2000-02-04" />
                                            </div>
                                        </div>

                                        {/* Gender */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Gender</label>
                                                <input type="text" className="form-control" defaultValue="Male" />
                                            </div>
                                        </div>

                                        {/* About Info */}
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">About Info</label>
                                                <textarea
                                                    className="form-control ht-120"
                                                    defaultValue="Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    

                                </div>
                                
                            </div>

                        </div>
                        <UpdateAccount/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
