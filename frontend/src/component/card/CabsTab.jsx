import React from 'react';

const CabsTab = () => {
  return (
    <div className="tab-pane" id="cabs">
      <div className="row gy-3 gx-md-3 gx-sm-2">
        {/* Left Section */}
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
              <div className="form-group hdd-arrow mb-0">
                <select className="pickup form-control fw-bold">
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
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="form-group hdd-arrow mb-0">
                <select className="drop form-control fw-bold">
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
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-xl-4 col-lg-5 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control choosedate fw-bold"
                  placeholder="Choose Pickup Date"
                  readOnly
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="form-group mb-0">
                <button
                  type="button"
                  className="btn btn-primary full-width fw-medium"
                >
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabsTab;
