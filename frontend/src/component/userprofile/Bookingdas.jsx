import React from 'react';

const Bookingdas = ({bookings}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i className="fa-solid fa-ticket me-2"></i>My Bookings
        </h4>
      </div>
      <div className="card-body">
        <div className="row align-items-center justify-content-start">
          <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
              <li className="col-md-3 col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="allbkk"
                  defaultChecked
                />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="allbkk"
                >
                  All Booking:{bookings.length}
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="processing"
                />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="processing"
                >
                  Processing (02)
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="cancelled"
                />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="cancelled"
                >
                  Cancelled (04)
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="completed"
                />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="completed"
                >
                  Completed (10)
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingdas;

