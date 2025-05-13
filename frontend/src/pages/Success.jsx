// src/pages/Success.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="Success Icon"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your booking has been confirmed. You will receive a confirmation email shortly.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate("/my-bookings")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition duration-300"
          >
            View Booking Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
