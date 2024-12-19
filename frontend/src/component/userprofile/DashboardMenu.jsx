import React from 'react';
// import './DashboardMenu.css'; // Import your CSS file here for styling

const DashboardMenu = () => {
    return (
        <div className="dashboard-menus border-top d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <ul className="user-Dashboard-menu">
                            <li className="active">
                                <a href="my-profile.html">
                                    <i className="fa-regular fa-id-card me-2"></i>
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a href="my-booking.html">
                                    <i className="fa-solid fa-ticket me-2"></i>
                                    My Booking
                                </a>
                            </li>
                            <li>
                                <a href="travelers.html">
                                    <i className="fa-solid fa-user-group me-2"></i>
                                    Travelers
                                </a>
                            </li>
                            <li>
                                <a href="payment-detail.html">
                                    <i className="fa-solid fa-wallet me-2"></i>
                                    Payment Details
                                </a>
                            </li>
                            <li>
                                <a href="my-wishlists.html">
                                    <i className="fa-solid fa-shield-heart me-2"></i>
                                    My Wishlist
                                </a>
                            </li>
                            <li>
                                <a href="settings.html">
                                    <i className="fa-solid fa-sliders me-2"></i>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="delete-account.html">
                                    <i className="fa-solid fa-trash-can me-2"></i>
                                    Delete Profile
                                </a>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i className="fa-solid fa-power-off me-2"></i>
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;
