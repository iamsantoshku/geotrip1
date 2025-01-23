




// import React from "react";
// import FilterBar from "./FilterBar";
// // import { Pagination } from "react-bootstrap";
// import Pagination from "./Pagination";

// const hotels = [
//   {
//     id: 1,
//     name: "Mercure Singapore Tyrwhitt",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-1.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 2,
//     name: "Hotel Calmo Chinatown",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-2.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 3,
//     name: "Siloso Beach Resort - Sentosa",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-3.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 4,
//     name: "Mercure Singapore Tyrwhitt",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-4.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 5,
//     name: "Mercure Singapore Tyrwhitt",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-5.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 6,
//     name: "Mercure Singapore Tyrwhitt",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-6.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 7,
//     name: "Hotel Calmo Chinatown",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-7.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
//   {
//     id: 8,
//     name: "Mercure Singapore Tyrwhitt",
//     location: "Delhi",
//     distance: "3.5 Km From Delhi",
//     price: 59,
//     originalPrice: 79,
//     rating: 4.8,
//     reviews: 3014,
//     image: "assets/img/hotel/hotel-8.jpg",
//     facilities: ["Cooling", "Pet Allow", "Free WiFi", "Food", "Parking", "Spa & Massage"],
//     cancellation: "Free Cancellation Till 10 Aug 23",
//     discount: "15% Off",
//   },
// ];

// const HotelCard = ({ hotel }) => (
//   <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
//     <div className="pop-touritem">
//       <a href="#" className="card rounded-3 m-0">
//         <div className="flight-thumb-wrapper">
//           <div className="popFlights-item-overHidden">
//             <img src={hotel.image} className="img-fluid" alt={`Image of ${hotel.name}`} />
//           </div>
//         </div>
//         <div className="touritem-middle position-relative p-3">
//           <h4 className="city fs-title m-0 fw-bold">{hotel.name}</h4>
//           <p className="detail">
//             {hotel.location} <span className="separate">|</span> {hotel.distance}
//           </p>
//           <div className="touritem-centrio mt-4">
//             <span className="label bg-light-success text-success">{hotel.cancellation}</span>
//             <ul className="aments-lists mt-2">
//               {hotel.facilities.map((facility, index) => (
//                 <li key={index} className="text-dark d-inline-flex align-items-center">
//                   <i className="fa-solid fa-check text-success me-1"></i> {facility}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="trsms-foots mt-4 d-flex align-items-end justify-content-between">
//             <div>
//               <span className="label bg-seegreen text-light">{hotel.discount}</span>
//               <div className="text-dark fw-bold fs-4">US${hotel.price}</div>
//               <div className="text-muted text-decoration-line-through">US${hotel.originalPrice}</div>
//               <div className="text-muted">Per Night</div>
//             </div>
//             <div className="d-flex flex-column align-items-end">
//               <span className="text-md fw-medium">Exceptional</span>
//               <span className="text-muted">{hotel.reviews} reviews</span>
//               <div className="square--40 bg-primary text-light">{hotel.rating}</div>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   </div>
// );

// const Hoteldet = () => {
//   return (
//     <div>
//       <section className="gray-simple">
//         <div className="container">
//           <div className="row justify-content-between">
//             <div className="col-xl-4 col-lg-4 col-md-4">
//               <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing {hotels.length} Search Results</h5>
//             </div>
//             <FilterBar/>

            
//           </div>         
//           <div className="row g-4">
//             {hotels.map((hotel) => (
//               <HotelCard key={hotel.id} hotel={hotel} />
//             ))}
//           </div>         
//           <Pagination/>
          
//         </div>
        

//       </section>
//     </div>
//   );
// };

// export default Hoteldet;





import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import axios from 'axios';  // Import axios to fetch data
import { BACKENDURL } from "../../Config/Config";
import { useNavigate } from "react-router-dom";
import Roombook from "../room/Roombook";

// const HotelCard = ({ hotel }) => (
//   <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
//     <div className="pop-touritem">
//       <a href="#" className="card rounded-3 m-0">
//         <div className="flight-thumb-wrapper">
//           <div className="popFlights-item-overHidden">
//             <img
//               src={BACKENDURL + `/${hotel.thumbnail}`}  // Adjust to your backend URL for image
//               className="img-fluid"
//               alt={`Image of ${hotel.name}`}
//             />
//           </div>
//         </div>
//         <div className="touritem-middle position-relative p-3">
//           <h4 className="city fs-title m-0 fw-bold">{hotel.name}</h4>
//           <p className="detail">
//             {hotel.location} <span className="separate">|</span> {hotel.distance} km
//           </p>
//           <div className="touritem-centrio mt-4">
//             <p>free cancellation</p><span className="label bg-light-success text-success"> 
//               {hotel.cancellationPolicy}
//             </span>
//             <ul className="aments-lists mt-2">
//               {hotel.amenities.map((facility, index) => (
//                 <li key={index} className="text-dark d-inline-flex align-items-center">
//                   <i className="fa-solid fa-check text-success me-1"></i> {facility}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="trsms-foots mt-4 d-flex align-items-end justify-content-between">
//             <div>
//               <span className="label bg-seegreen text-light">
//                 {hotel.discount}% Off
//               </span>
//               <div className="text-dark fw-bold fs-4">US${hotel.price}</div>
//               <div className="text-muted text-decoration-line-through">
//                 US${hotel.originalPrice}
//               </div>
//               <div className="text-muted">Per Night</div>
//             </div>
//             <div className="d-flex flex-column align-items-end">
//               <span className="text-md fw-medium">Exceptional</span>
//               <span className="text-muted">{hotel.reviews} reviews</span>
//               <div className="square--40 bg-primary text-light">
//                 {hotel.rating}
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   </div>
// );



const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  // Navigate to Room Details page when a user clicks on the card
  const handleCardClick = (e) => {
    e.preventDefault();
    navigate(`/hotel-details/${hotel._id}`);
  };
  
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="pop-touritem shadow-sm">
        {/* Hotel Card Link */}
        <a href="room-details" onClick={handleCardClick} className="card rounded-3 m-0 text-decoration-none">
          {/* Hotel Thumbnail */}
          <div className="flight-thumb-wrapper">
            <div className="popFlights-item-overHidden">

<img
              src={BACKENDURL + `/${hotel.thumbnail}`}  // Adjust to your backend URL for image
              className="img-fluid"
              alt={`Image of ${hotel.name}`}
            />
 
            </div>
          </div>

          {/* Hotel Information */}
          <div className="touritem-middle position-relative p-3">
            {/* Hotel Name and Location */}
            <h4 className="city fs-title m-0 fw-bold">{hotel.name}</h4>
            <p className="detail text-secondary mb-2">
              {hotel.location} <span className="separate text-muted">|</span> {hotel.distance} km from center
            </p>

            {/* Cancellation Policy */}
            <div className="touritem-centrio mt-2 d-flex align-items-center">
              <p className="mb-0 text-success fw-bold">Free cancellation</p>
              <span className="label bg-light-success text-success ms-2">
                {hotel.cancellationPolicy}
              </span>
            </div>

            {/* Amenities */}
            <ul className="aments-lists mt-2 list-unstyled d-flex flex-wrap">
              {hotel.amenities.slice(0, 3).map((facility, index) => (
                <li key={index} className="text-dark d-inline-flex align-items-center me-3">
                  <i className="fa-solid fa-check text-success me-1"></i> {facility}
                </li>
              ))}
            </ul>

            {/* Price, Discount, and Rating */}
            <div className="trsms-foots mt-3 d-flex align-items-end justify-content-between">
              {/* Price Section */}
              <div>
                <span className="label bg-success text-light mb-1 px-2 py-1 rounded">
                  {hotel.discount}% Off
                </span>
                <div className="text-dark fw-bold fs-5">US${hotel.price}</div>
                <div className="text-muted text-decoration-line-through small">
                  US${hotel.originalPrice}
                </div>
                <div className="text-muted small">Per Night</div>
              </div>

              {/* Rating Section */}
              <div className="d-flex flex-column align-items-end">
                <span className="text-success fw-medium">Exceptional</span>
                <span className="text-muted small">{hotel.reviews} reviews</span>
                <div
                  className="square--40 bg-primary text-light d-flex justify-content-center align-items-center rounded"
                  style={{ width: "40px", height: "40px" }}
                >
                  {hotel.rating}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};



const Hoteldet = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotel data from your API
    axios
      .get(BACKENDURL + "/api/v1/hotels/hotelss") // Adjust URL to your actual API endpoint
      .then((response) => {
        setHotels(response.data);  // Assuming the data is in the response's data property
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, []);

  return (
    <div>
      <section className="gray-simple">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <h5 className="fw-bold fs-6 mb-lg-0 mb-3">
                Showing {hotels.length} Search Results
              </h5>
            </div>
            <FilterBar />
          </div>
          <div className="row g-4">
            {hotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
              
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default Hoteldet;
