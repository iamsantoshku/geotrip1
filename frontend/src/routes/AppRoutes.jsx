import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
// import Header from '../component/Header';
import Profile from '../pages/Profile';
import MyBookingsDashboard from '../component/userprofile/MyBookingsDashboard';
import Hotel from '../pages/Hotel';
import Hoteldetails from '../pages/Hoteldetails';
import Flight from '../pages/Flight';
import FlightSearch from '../component/flight/flightserch';
import Flighthome from '../pages/Flighthome';
import Stayhome from '../pages/Stayhome';
import Hotelhome from '../pages/Hotelhome';
import Adminhome from '../admin/components/Adminhome';
import Dashboard from '../admin/components/Dashboard';
import AddAirline from '../admin/AddAirline';
import AddFlight from '../admin/AddFlight';
import HotelAdd from '../admin/HotelAdd';
import Car from '../pages/Car';
import AddCar from '../admin/AddCar';
import Carlisting from '../pages/Carlisting';
import AddRoom from '../admin/AddRoom';
import RoomDetails from '../component/room/RoomDetails';
import Roomdetails from '../pages/Roomdetails';
import Roombook from '../component/room/Roombook';
import Bookingform from '../component/room/Bookingform';
import Bookingform3 from '../component/room/Bookingform3';
import Successfull from '../component/room/Successfull';
import TicketBooking from '../component/flight/TicketBooking';
import Cardetails from '../component/carbooking/Cardetails';
import MyBookings from '../component/userprofile/MyBookings';
import Flightticket from '../component/ticket/Flightticket';
import UserList from '../admin/UserList';
import AllUserBookings from '../admin/AllUserBookings';



const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
};
const AppRoutes = () => {
  return (
    <div>
      
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       {/* <Route path='/login' element={<Login/>}></Route> */}
       <Route path='/user-profile' element={<Profile/>}></Route>
       <Route path='/my-booking' element={<MyBookingsDashboard/>}></Route>
       <Route path='/hotel-list-01' element={<Hotel/>}></Route>
       <Route path='/hotel-details' element={<Hoteldetails/>}></Route>
       <Route path='/flight-list-01' element={<Flight/>}></Route>
       <Route path='/flight-home' element={<Flighthome/>}></Route>
       <Route path='/home-stay' element = {<Stayhome/>}></Route>
       <Route path='/home-hotel' element = {<Hotelhome/>}></Route>
       <Route path='/home-car' element = {<Car/>}></Route>
       <Route path='/car-list' element = {<Carlisting/>}></Route>       
       <Route path="/room-details/:hotelId" element={<Roomdetails />} />
       <Route path="/book/:id" element={<TicketBooking />} />      
       <Route path="/roombook" element={<Roombook />} />
       <Route path='/bookingpage-02.html' element={<Bookingform/>}></Route>
       <Route path='/bookingpage-03.html' element = {<Bookingform3/>}></Route>
       <Route path='/payment-complete' element = {<Successfull/>}></Route>
       <Route path='/my-bookings' element = {<MyBookings/>}></Route>
       <Route path="/ticket/:ticketId" element={<Flightticket />} />      
       <Route path='/carbook' element = {<Cardetails/>}></Route>
       {/* admin  */}

       <Route
          path="/admin-panel"
          element={<ProtectedRoute element={Adminhome} />}
        >
           <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="mysite" element={<HomepageCards />} /> */}
          <Route path="add-airline" element={<AddAirline />} />
          <Route path="add-flight" element={<AddFlight />} />  
          <Route path="add-hotel" element={<HotelAdd/>} />
          <Route path="add-car" element={<AddCar/>} />
          <Route path="add-room" element={<AddRoom/>} />
          <Route path='clients' element={<UserList/>}></Route>
          <Route path='ticketlist' element = {<AllUserBookings/>}></Route>

          </Route>
       </Routes>
      
    </div>
  )
}

export default AppRoutes






// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from '../pages/Home';
// import Profile from '../pages/Profile';
// import MyBookingsDashboard from '../component/userprofile/MyBookingsDashboard';
// import Hotel from '../pages/Hotel';
// import Hoteldetails from '../pages/Hoteldetails';
// import Flight from '../pages/Flight';
// import Flighthome from '../pages/Flighthome';
// import Stayhome from '../pages/Stayhome';
// import Hotelhome from '../pages/Hotelhome';
// import Adminhome from '../admin/components/Adminhome';
// import Dashboard from '../admin/components/Dashboard';
// import AddAirline from '../admin/AddAirline';
// import AddFlight from '../admin/AddFlight';
// import HotelAdd from '../admin/HotelAdd';
// import Car from '../pages/Car';
// import AddCar from '../admin/AddCar';
// import Carlisting from '../pages/Carlisting';
// import AddRoom from '../admin/AddRoom';
// import Roomdetails from '../pages/Roomdetails';
// import Roombook from '../component/room/Roombook';
// import Bookingform from '../component/room/Bookingform';
// import Bookingform3 from '../component/room/Bookingform3';
// import Successfull from '../component/room/Successfull';
// import TicketBooking from '../component/flight/TicketBooking';
// import Cardetails from '../component/carbooking/Cardetails';
// import MyBookings from '../component/userprofile/MyBookings';
// import Flightticket from '../component/ticket/Flightticket';
// import UserList from '../admin/UserList';
// import AllUserBookings from '../admin/AllUserBookings';

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const isAdmin = localStorage.getItem('isAdmin') === 'true';
//   return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
// };

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user-profile" element={<Profile />} />
//       <Route path="/my-booking" element={<MyBookingsDashboard />} />
//       <Route path="/hotel-list-01" element={<Hotel />} />
//       <Route path="/hotel-details" element={<Hoteldetails />} />
//       <Route path="/flight-list-01" element={<Flight />} />
//       <Route path="/flight-home" element={<Flighthome />} />
//       <Route path="/home-stay" element={<Stayhome />} />
//       <Route path="/home-hotel" element={<Hotelhome />} />
//       <Route path="/home-car" element={<Car />} />
//       <Route path="/car-list" element={<Carlisting />} />
//       <Route path="/room-details/:hotelId" element={<Roomdetails />} />
//       <Route path="/book/:id" element={<TicketBooking />} />
//       <Route path="/roombook" element={<Roombook />} />
//       <Route path="/booking-form" element={<Bookingform />} />
//       <Route path="/booking-form-step2" element={<Bookingform3 />} />
//       <Route path="/payment-complete" element={<Successfull />} />
//       <Route path="/my-bookings" element={<MyBookings />} />
//       <Route path="/ticket/:ticketId" element={<Flightticket />} />
//       <Route path="/carbook" element={<Cardetails />} />

//       {/* Admin Panel */}
//       <Route
//         path="/admin-panel"
//         element={<ProtectedRoute element={Adminhome} />}
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="add-airline" element={<AddAirline />} />
//         <Route path="add-flight" element={<AddFlight />} />
//         <Route path="add-hotel" element={<HotelAdd />} />
//         <Route path="add-car" element={<AddCar />} />
//         <Route path="add-room" element={<AddRoom />} />
//         <Route path="clients" element={<UserList />} />
//         <Route path="ticketlist" element={<AllUserBookings />} />
//       </Route>

//       {/* Fallback Route */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
