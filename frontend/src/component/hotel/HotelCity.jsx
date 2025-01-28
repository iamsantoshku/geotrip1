import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../../Config/Config";
import Exprience from "../home/Exprience";

const HotelCity = () => {
  const { city } = useParams(); // Get city name from URL
  const location = useLocation(); // Access passed state (search results)
  const hotels = location.state?.hotels || []; // Fallback to an empty array if no state is passed

  const navigate = useNavigate();

  // Navigate to Room Details page
  const handleCardClick = (e, hotelId) => {
    e.preventDefault();
    navigate(`/hotel-details/${hotelId}`);
  };

  return (
    <div className="container mt-5">
      {/* <h1>Hotels in {city}</h1> */}
      <h1 className="text-4xl font-bold text-gray-500 text-center mt-5 mb-8">
        Hotels in {city}
      </h1>


      <h2 className="text-center mb-4 text-2xl font-bold text-red-700">Available Hotels</h2>
      <div className="row">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel._id} className="col-md-4 col-sm-6 mb-4">
              <div
                onClick={(e) => handleCardClick(e, hotel._id)}
                className="card h-100 shadow cursor-pointer"
              >
                <img
                  src={BACKENDURL + `/${hotel.thumbnail}`}
                  className="img-fluid"
                  alt={`Image of ${hotel.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {hotel.location || "Unknown"}
                  </p>
                  <p className="card-text">
                    <strong>Distance:</strong> {hotel.distance || "N/A"} km
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> ₹{hotel.price || "N/A"}{" "}
                    {hotel.originalPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ₹{hotel.originalPrice}
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {hotel.rating || "Not Rated"} ★
                  </p>
                  <p className="card-text">
                    <strong>Amenities:</strong>{" "}
                    {hotel.amenities?.join(", ") || "Not specified"}
                  </p>
                  <p className="card-text">
                    <strong>Cancellation Policy:</strong>{" "}
                    {hotel.cancellationPolicy || "No policy specified"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hotels found. Please refine your search.</p>
        )}
      </div>
      <Exprience/>
    </div>
  );
};

export default HotelCity;
