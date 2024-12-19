










import React from "react";

const venueData = [
  {
    id: 1,
    name: "Long Beach",
    rating: 4.8,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "120 Rooms",
    image: "/assets/img/attr/attr-1.jpg",
  },
  {
    id: 2,
    name: "Jacksonville",
    rating: 4.7,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "78 Rooms",
    image: "/assets/img/attr/attr-2.jpg",
  },
  {
    id: 3,
    name: "Kansas City",
    rating: 4.9,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "65 Rooms",
    image: "/assets/img/attr/attr-3.jpg",
  },
  {
    id: 4,
    name: "Los Angeles",
    rating: 4.6,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "23 Rooms",
    image: "/assets/img/attr/attr-4.jpg",
  },
  {
    id: 5,
    name: "San Antonio",
    rating: 4.7,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "45 Rooms",
    image: "/assets/img/attr/attr-5.jpg",
  },
  {
    id: 6,
    name: "Philadelphia",
    rating: 4.8,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "35 Rooms",
    image: "/assets/img/attr/attr-6.jpg",
  },
  {
    id: 7,
    name: "San Jose",
    rating: 4.9,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "48 Rooms",
    image: "/assets/img/attr/attr-8.jpg",
  },
  {
    id: 8,
    name: "San Diego",
    rating: 4.7,
    description:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    priceRange: "$492 - $799",
    rooms: "85 Rooms",
    image: "/assets/img/attr/attr-7.jpg",
  },
];

const VenueCard = ({ venue }) => (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
    <div className="pop-touritem">
      <div className="card rounded-3 border m-0">
        <div className="flight-thumb-wrapper">
          <div className="popFlights-item-overHidden">
            <img src={venue.image} className="img-fluid" alt={venue.name} />
          </div>
        </div>
        <div className="touritem-middle position-relative p-3">
          <div className="touritem-flexxer">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="city fs-6 m-0 fw-bold">{venue.name}</h4>
              <span className="city-rates">
                <i className="fa-solid fa-star text-warning me-1"></i>
                <span className="fw-bold text-dark">{venue.rating}</span>
              </span>
            </div>
            <div className="detail ellipsis-container mt-2">
              <p className="m-0 text-md">{venue.description}</p>
            </div>
            <div className="flight-footer">
              <h5 className="fs-5 low-price m-0">
                <span className="tag-span">From</span>{" "}
                <span className="price">{venue.priceRange}</span>
              </h5>
              <div className="rates">
                <div className="rat-reviews">
                  <span>{venue.rooms}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-wrapes d-flex align-items-center mt-3">
            <button className="btn btn-md btn-light-primary fw-medium rounded full-width me-2">
              Request Book
              <i className="fa-solid fa-arrow-trend-up ms-2"></i>
            </button>
            <button className="btn btn-md btn-light-success fs-5 px-3 rounded ms-1">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PopularVenues = () => (
  <section>
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
          <div className="secHeading-wrap text-center mb-5">
            <h2>Hot & Trending Venues</h2>
            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center gy-4 gx-xl-3 gx-3">
        {venueData.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  </section>
);

export default PopularVenues;
