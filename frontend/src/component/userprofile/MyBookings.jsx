// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";
// import Bookingdas from "./Bookingdas";
// import Flightbook from "./Flightbook";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState({
//     hotelBookings: [],
//     flightBookings: [],
//     carBookings: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Fetch token from local storage
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/myBookings", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBookings(response.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch bookings. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) return <div className="text-center mt-5">Loading...</div>;
//   if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <Bookingdas bookings={bookings}/>     
//       <section>
//         <h2 className="text-xl font-semibold mb-4">Hotel Bookings</h2>


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//           {bookings.hotelBookings.length > 0 ? (
//             bookings.hotelBookings.map((hotel) => (
//               <div key={hotel._id} className="card border br-dashed mb-6 w-full lg:w-[36rem]">

//                 <div className="card-header p-6 border-bottom flex flex-col lg:flex-row justify-between items-start lg:items-center">

//                   <div className="flex items-center">
//                     <div className="square--50 circle bg-light-danger text-danger flex-shrink-0 text-center flex items-center justify-center">
//                       <i className="fa-solid fa-hotel text-xl"></i>
//                     </div>

//                     <div className="ms-4">
//                       <h6 className="card-title text-dark text-lg font-bold mb-1">{hotel.hotelName}</h6>
//                       <ul className="nav nav-divider text-sm text-muted">
//                         <li className="nav-item">Booking ID: {hotel._id}</li>
//                         <li className="nav-item ms-3">
//                           <span className="text-dark font-medium">{hotel.duration}</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>


//                   <div className="mt-4 lg:mt-0">
//                     <a href="#" className="btn btn-md btn-light-seegreen font-medium px-6 py-2">
//                       Manage Booking
//                     </a>
//                   </div>
//                 </div>


//                 <div className="card-body p-6">
//                   <div className="row g-4">
//                     <div className="col-6 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Check-In</span>
//                       <h6 className="text-base font-bold">{hotel.createdAt}</h6>
//                     </div>

//                     <div className="col-6 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Check-Out</span>
//                       <h6 className="text-base font-bold">{hotel.checkOut}</h6>
//                     </div>

//                     <div className="col-12 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Total Guest</span>
//                       <h6 className="text-base font-bold">{hotel.guests.length}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No hotel bookings available.</p>
//           )}
//         </div>
//       </section>

//       {/* Flight Bookings */}
//       <section className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Flight Bookings</h2>

//         <Flightbook/>
//       </section>

//       {/* Car Bookings */}
//       <section className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Car Bookings</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
//           {bookings.carBookings.length > 0 ? (
//             bookings.carBookings.map((car) => (
//               <div key={car._id} className="card border br-dashed mb-4">
//                 {/* Card header */}
//                 <div className="card-header border-b flex flex-col md:flex-row justify-between items-start md:items-center p-4">
//                   {/* Icon and Title */}
//                   <div className="flex items-center">
//                     <div className="square--50 circle bg-light-success text-success flex-shrink-0 text-center flex items-center justify-center">
//                       <i className="fa-solid fa-car text-lg"></i>
//                     </div>
//                     {/* Title */}
//                     <div className="ml-3">
//                       <h6 className="card-title text-dark text-lg font-bold mb-1">
//                         {car.carName}
//                       </h6>
//                       <ul className="nav nav-divider text-sm text-muted">
//                         <li className="nav-item">Booking ID: {car.bookingId}</li>
//                         <li className="nav-item ml-3">
//                           <span className="text-dark font-medium">
//                             {Array.isArray(car.models) ? car.models.join(", ") : "N/A"}
//                           </span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <div className="mt-4 md:mt-0">
//                     <a href="#" className="btn btn-md btn-light-seegreen font-medium">
//                       Manage Booking
//                     </a>
//                   </div>
//                 </div>

//                 {/* Card body */}
//                 <div className="card-body p-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Pickup Address
//                       </span>
//                       <h6 className="text-base font-bold">{car.pickupAddress}</h6>
//                     </div>

//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Drop Address
//                       </span>
//                       <h6 className="text-base font-bold">{car.dropAddress}</h6>
//                     </div>

//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Booked By
//                       </span>
//                       <h6 className="text-base font-bold">{car.bookedBy}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No car bookings available.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyBookings;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";
// import Bookingdas from "./Bookingdas";
// import Flightbook from "./Flightbook";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState({
//     hotelBookings: [],
//     flightBookings: [],
//     carBookings: [],

//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   // const [cancelled, setcancelled] = useState(false);

//   const handleCancelBooking = async (bookingId) => {
//     try {
//       const token = localStorage.getItem("token"); // Fetch token from local storage
//       const response = await axios.patch(
//         `${BACKENDURL}/api/v1/bookings/cancel/${bookingId}`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       if (response.data.success) {
//         setcancelled(true);
//         alert("Booking cancelled successfully!");

//         setBookings((prevBookings) => ({
//           ...prevBookings,
//           hotelBookings: prevBookings.hotelBookings.filter(
//             (booking) => booking._id !== bookingId
//           ),
//         }));
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to cancel booking. Please try again.");
//     }
//   };

// // const [cancelledBookings, setCancelledBookings] = useState([]);



//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Fetch token from local storage
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/myBookings", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setBookings(response.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch bookings. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) return <div className="text-center mt-5">Loading...</div>;
//   if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <Bookingdas bookings={bookings}/>    
//       <section>
//         <h2 className="text-xl font-semibold mb-4">Hotel Bookings</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//           {bookings.hotelBookings.length > 0 ? (
//             bookings.hotelBookings.map((hotel) => (
//               <div key={hotel._id} className="card border br-dashed mb-6 w-full lg:w-[36rem]">
//                 <div className="card-header p-6 border-bottom flex flex-col lg:flex-row justify-between items-start lg:items-center">
//                   <div className="flex items-center">
//                     <div className="square--50 circle bg-light-danger text-danger flex-shrink-0 text-center flex items-center justify-center">
//                       <i className="fa-solid fa-hotel text-xl"></i>
//                     </div>
//                     <div className="ms-4">
//                       <h6 className="card-title text-dark text-lg font-bold mb-1">{hotel.hotelName}</h6>
//                       <ul className="nav nav-divider text-sm text-muted">
//                         <li className="nav-item">Booking ID: {hotel._id}</li>
//                         <li className="nav-item ms-3">
//                           <span className="text-dark font-medium">{hotel.duration}</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="mt-4 lg:mt-0 flex">
//                     <button
//                       onClick={() => handleCancelBooking(hotel._id)}
//                       className="btn btn-md btn-light-danger font-medium px-6 py-2 mr-2"
//                     >
//                       Cancel Booking
//                     </button>

//                     <a href="#" className="btn btn-md btn-light-seegreen font-medium px-6 py-2">
//                       Manage Booking
//                     </a>
//                   </div>
//                 </div>
//                 <div className="card-body p-6">
//                   <div className="row g-4">
//                     <div className="col-6 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Check-In</span>
//                       <h6 className="text-base font-bold">{hotel.createdAt}</h6>
//                     </div>
//                     <div className="col-6 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Check-Out</span>
//                       <h6 className="text-base font-bold">{hotel.checkOut}</h6>
//                     </div>
//                     <div className="col-12 lg:col-4">
//                       <span className="block text-sm font-medium text-muted">Total Guest</span>
//                       <h6 className="text-base font-bold">{hotel.guests.length}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No hotel bookings available.</p>
//           )}
//         </div>
//       </section>

//       <section className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Flight Bookings</h2>

//         <Flightbook/>
//       </section>

//       <section className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Car Bookings</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
//           {bookings.carBookings.length > 0 ? (
//             bookings.carBookings.map((car) => (
//               <div key={car._id} className="card border br-dashed mb-4">
//                 {/* Card header */}
//                 <div className="card-header border-b flex flex-col md:flex-row justify-between items-start md:items-center p-4">
//                   {/* Icon and Title */}
//                   <div className="flex items-center">
//                     <div className="square--50 circle bg-light-success text-success flex-shrink-0 text-center flex items-center justify-center">
//                       <i className="fa-solid fa-car text-lg"></i>
//                     </div>
//                     {/* Title */}
//                     <div className="ml-3">
//                       <h6 className="card-title text-dark text-lg font-bold mb-1">
//                         {car.carName}
//                       </h6>
//                       <ul className="nav nav-divider text-sm text-muted">
//                         <li className="nav-item">Booking ID: {car.bookingId}</li>
//                         <li className="nav-item ml-3">
//                           <span className="text-dark font-medium">
//                             {Array.isArray(car.models) ? car.models.join(", ") : "N/A"}
//                           </span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <div className="mt-4 md:mt-0">
//                     <a href="#" className="btn btn-md btn-light-seegreen font-medium">
//                       Manage Booking
//                     </a>
//                   </div>
//                 </div>

//                 {/* Card body */}
//                 <div className="card-body p-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Pickup Address
//                       </span>
//                       <h6 className="text-base font-bold">{car.pickupAddress}</h6>
//                     </div>

//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Drop Address
//                       </span>
//                       <h6 className="text-base font-bold">{car.dropAddress}</h6>
//                     </div>

//                     <div>
//                       <span className="block text-sm font-medium text-muted">
//                         Booked By
//                       </span>
//                       <h6 className="text-base font-bold">{car.bookedBy}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No car bookings available.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyBookings;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";
import Bookingdas from "./Bookingdas";
import Flightbook from "./Flightbook";


const MyBookings = () => {
  const [bookings, setBookings] = useState({
    hotelBookings: [],
    flightBookings: [],
    carBookings: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem("token"); // Fetch token from local storage
      const response = await axios.patch(
        `${BACKENDURL}/api/v1/bookings/cancel/${bookingId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Booking cancelled successfully!");

        // Update the booking status in the state
        setBookings((prevBookings) => ({
          ...prevBookings,
          hotelBookings: prevBookings.hotelBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, bookingStatus: "cancelled" }
              : booking
          ),
        }));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to cancel booking. Please try again.");
    }
  };

  const handleCarCancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem("token"); // Fetch token from local storage
      const response = await axios.patch(
        `${BACKENDURL}/api/v1/bookings/carcancelled/${bookingId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Car booking cancelled successfully!");

        // Update the booking status in the state
        setBookings((prevBookings) => ({
          ...prevBookings,
          carBookings: prevBookings.carBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, bookingStatus: "cancelled" }
              : booking
          ),
        }));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to cancel car booking. Please try again.");
    }
  };
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token"); // Fetch token from local storage
        const response = await axios.get(`${BACKENDURL}/api/v1/auth/myBookings`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch bookings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <Bookingdas bookings={bookings} />
      <section>
        <h2 className="text-xl font-semibold mb-4">Hotel Bookings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {bookings.hotelBookings.length > 0 ? (
            bookings.hotelBookings.map((hotel) => (
              <div
                key={hotel._id}
                className={`card border ${hotel.bookingStatus === "cancelled" ? "bg-gray-200" : ""
                  } br-dashed mb-6 w-full lg:w-[36rem]`}
              >
                <div className="card-header p-6 border-bottom flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex items-center">
                    <div className="square--50 circle bg-light-danger text-danger flex-shrink-0 text-center flex items-center justify-center">
                      <i className="fa-solid fa-hotel text-xl"></i>
                    </div>
                    <div className="ms-4">
                      <h6 className="card-title text-dark text-lg font-bold mb-1">
                        {hotel.hotelName}
                      </h6>
                      <ul className="nav nav-divider text-sm text-muted">
                        <li className="nav-item">Booking ID: {hotel._id}</li>
                        <li className="nav-item ms-3">
                          <span className="text-dark font-medium">
                            {hotel.duration}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 flex">
                    {hotel.bookingStatus !== "cancelled" ? (
                      <button
                        onClick={() => handleCancelBooking(hotel._id)}
                        className="btn btn-md btn-light-danger font-medium px-6 py-2 mr-2"
                      >
                        Cancel Booking
                      </button>
                    ) : (
                      <span className="text-red-500 font-medium px-6 py-2 mr-2">
                        Cancelled
                      </span>
                    )}
                    <a
                      href="#"
                      className={`btn btn-md ${hotel.bookingStatus === "cancelled"
                          ? "btn-light-gray"
                          : "btn-light-seegreen"
                        } font-medium px-6 py-2`}
                      disabled={hotel.bookingStatus === "cancelled"}
                    >
                      Manage Booking
                    </a>
                  </div>
                </div>
                <div className="card-body p-6">
                  <div className="row g-4">
                    <div className="col-6 lg:col-4">
                      <span className="block text-sm font-medium text-muted">
                        Check-In
                      </span>
                      <h6 className="text-base font-bold">
                        {hotel.createdAt}
                      </h6>
                    </div>
                    <div className="col-6 lg:col-4">
                      <span className="block text-sm font-medium text-muted">
                        Hotel rent per day
                      </span>
                      <h6 className="text-base font-bold">{hotel.transactionDetails.

                        totalPrice}</h6>
                    </div>
                    <div className="col-12 lg:col-4">
                      <span className="block text-sm font-medium text-muted">
                        Total Guest
                      </span>
                      <h6 className="text-base font-bold">
                        {hotel.guests.length}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hotel bookings available.</p>
          )}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Flight Bookings</h2>

        <Flightbook />
      </section>

      <section className="mt-3">
        <h2 className="text-xl font-semibold mb-4">Car Bookings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {bookings.carBookings.length > 0 ? (
            bookings.carBookings.map((car) => (
              <div key={car._id} className="card border br-dashed mb-4">
                {/* Card header */}
                <div className="card-header border-b flex flex-col md:flex-row justify-between items-start md:items-center p-4">
                  {/* Icon and Title */}
                  <div className="flex items-center">
                    <div className="square--50 circle bg-light-success text-success flex-shrink-0 text-center flex items-center justify-center">
                      <i className="fa-solid fa-car text-lg"></i>
                    </div>
                    {/* Title */}
                    <div className="ml-3">
                      <h6 className="card-title text-dark text-lg font-bold mb-1">
                        {car.carName}
                      </h6>
                      <ul className="nav nav-divider text-sm text-muted">
                        <li className="nav-item">Booking ID: {car._id}</li>
                        <li className="nav-item ml-3">
                          <span className="text-dark font-medium">
                            {Array.isArray(car.models) ? car.models.join(", ") : "N/A"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 flex">
                    {car.bookingStatus !== "cancelled" ? (
                      <button
                        onClick={() => handleCarCancelBooking(car._id)}
                        className="btn btn-md btn-light-danger font-medium px-6 py-2 mr-2"
                      >
                        Cancel Booking
                      </button>
                    ) : (
                      <span className="text-red-500 font-medium px-6 py-2 mr-2">
                        Cancelled
                      </span>
                    )}
                    <a
                      href="#"
                      className={`btn btn-md ${car.bookingStatus === "cancelled"
                          ? "btn-light-gray"
                          : "btn-light-seegreen"
                        } font-medium px-6 py-2`}
                      disabled={car.bookingStatus === "cancelled"}
                    >
                      Manage Booking
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="card-body p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Pickup Address
                      </span>
                      <h6 className="text-base font-bold">{car.pickupAddress}</h6>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Drop Address
                      </span>
                      <h6 className="text-base font-bold">{car.dropAddress}</h6>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-muted">
                        Booking price
                      </span>
                      <h6 className="text-base font-bold">{car.
                        price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No car bookings available.</p>
          )}
        </div>
      </section>;
    </div>
  );
};

export default MyBookings;

