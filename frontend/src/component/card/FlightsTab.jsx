import React from 'react';

const FlightsTab = () => {
  return (
    <div className="tab-pane" id="flights">
      <div className="row gx-lg-2 g-3">
        <div className="col-xl-5 col-lg-5 col-md-12">
          <div className="row gy-3 gx-lg-2 gx-3">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
              <div className="form-group hdd-arrow mb-0">
                <select className="leaving form-control fw-bold">
                  <option value="">Select</option>
                  <option value="ny">New York</option>
                  <option value="sd">San Diego</option>
                  <option value="sj">San Jose</option>
                  <option value="ph">Philadelphia</option>
                  <option value="nl">Nashville</option>
                  <option value="sf">San Francisco</option>
                  <option value="hu">Houston</option>
                  <option value="sa">San Antonio</option>
                </select>
              </div>
              <div className="btn-flip-icon mt-md-0">
                <button className="p-0 m-0 text-primary">
                  <i className="fa-solid fa-right-left"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="form-groupp hdd-arrow mb-0">
                <select className="goingto form-control fw-bold">
                  <option value="">Select</option>
                  <option value="lv">Las Vegas</option>
                  <option value="la">Los Angeles</option>
                  <option value="kc">Kansas City</option>
                  <option value="no">New Orleans</option>
                  <option value="kc">Jacksonville</option>
                  <option value="lb">Long Beach</option>
                  <option value="cl">Columbus</option>
                  <option value="cn">Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-12">
          <div className="row gy-3 gx-lg-2 gx-3">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="form-group mb-0">
                <input
                  className="form-control fw-bold choosedate"
                  type="text"
                  placeholder="Departure.."
                  readOnly
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="form-group mb-0">
                <input
                  className="form-control fw-bold choosedate"
                  type="text"
                  placeholder="Return.."
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-2 col-lg-2 col-md-12">
          <div className="form-groupp hdd-arrow mb-0">
            <select className="occupant form-control fw-bold">
              <option value="">Select</option>
              <option value="lv">01 Adult</option>
              <option value="la">02 Adult</option>
              <option value="kc">03 Adult</option>
              <option value="no">04 Adult</option>
              <option value="kc">05 Adult</option>
              <option value="lb">06 Adult</option>
              <option value="cl">07 Adult</option>
              <option value="cn">08 Adult</option>
            </select>
          </div>
        </div>

        <div className="col-xl-1 col-lg-1 col-md-12">
          <div className="form-group mb-0">
            <button
              type="button"
              className="btn btn-primary full-width fw-medium"
            >
              <i className="fa-solid fa-magnifying-glass fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsTab;
