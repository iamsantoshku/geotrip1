import React, { useState } from "react";

const HotelsTab = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  const handleIncrement = (type) => {
    if (type === "adults") setAdults(adults + 1);
    if (type === "children") setChildren(children + 1);
    if (type === "rooms") setRooms(rooms + 1);
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) setAdults(adults - 1);
    if (type === "children" && children > 0) setChildren(children - 1);
    if (type === "rooms" && rooms > 0) setRooms(rooms - 1);
  };

  return (
    <div className="tab-pane show active" id="hotels">
      <div className="row gy-3 gx-md-3 gx-sm-2">
        {/* Left Section */}
        <div className="col-xl-8 col-lg-7 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
              <div className="form-group hdd-arrow mb-0">
                <select className="goingto form-control fw-bold hdd-arrow">
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
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control fw-bold"
                  placeholder="Check-In & Check-Out"
                  id="checkinout"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-xl-4 col-lg-5 col-md-12">
          <div className="row gy-3 gx-md-3 gx-sm-2">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <div className="form-group mb-0">
                <div className="booking-form__input guests-input mixer-auto">
                  <button name="guests-btn" id="guests-input-btn">
                    {adults} Guest
                  </button>
                  <div className="guests-input__options" id="guests-input-options">
                    <div>
                      <span
                        className="guests-input__ctrl minus"
                        id="adults-subs-btn"
                        onClick={() => handleDecrement("adults")}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </span>
                      <span className="guests-input__value">
                        <span id="guests-count-adults">{adults}</span> Adults
                      </span>
                      <span
                        className="guests-input__ctrl plus"
                        id="adults-add-btn"
                        onClick={() => handleIncrement("adults")}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div>
                      <span
                        className="guests-input__ctrl minus"
                        id="children-subs-btn"
                        onClick={() => handleDecrement("children")}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </span>
                      <span className="guests-input__value">
                        <span id="guests-count-children">{children}</span>{" "}
                        Children
                      </span>
                      <span
                        className="guests-input__ctrl plus"
                        id="children-add-btn"
                        onClick={() => handleIncrement("children")}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                    <div>
                      <span
                        className="guests-input__ctrl minus"
                        id="room-subs-btn"
                        onClick={() => handleDecrement("rooms")}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </span>
                      <span className="guests-input__value">
                        <span id="guests-count-room">{rooms}</span> Rooms
                      </span>
                      <span
                        className="guests-input__ctrl plus"
                        id="room-add-btn"
                        onClick={() => handleIncrement("rooms")}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </span>
                    </div>
                  </div>
                </div>
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

export default HotelsTab;
