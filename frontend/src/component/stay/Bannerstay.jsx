



// import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Bannerstay = () => {
//     const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     // Function to handle guest count changes
//     const handleGuestChange = (type, operation) => {
//         setGuests(prevGuests => {
//             const newCount = operation === 'add' ? prevGuests[type] + 1 : prevGuests[type] - 1;
//             if (newCount >= 0) {
//                 return { ...prevGuests, [type]: newCount };
//             }
//             return prevGuests;
//         });
//     };

//     return (
//         <div>
//             <div className="image-cover hero-header bg-white" style={{ background: 'url(/assets/img/banner-8.jpg) no-repeat' }} data-overlay="3">
//                 <div className="container">
//                     {/* Search Form */}
//                     <div className="row justify-content-center align-items-center">
//                         <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//                             <div className="position-relative text-center mb-5">
//                                 <h1>Start Your Trip with <span className="position-relative z-4">GeoTrip
//                                     <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                                         <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                                             <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"></path>
//                                         </svg>
//                                     </span></span></h1>
//                                 <p className="fs-5 fw-light">Take a little break from the work stress of everyday. Discover, plan trips and explore beautiful destinations.</p>
//                             </div>
//                         </div>

//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                             <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
//                                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                                     <div className="col-xl-8 col-lg-7 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                                                 <div className="form-group hdd-arrow border rounded-1 mb-0">
//                                                     <label>Where</label>
//                                                     <select className="goingto form-control border-0">
//                                                         <option value="">Select</option>
//                                                         <option value="ny">New York</option>
//                                                         <option value="sd">San Diego</option>
//                                                         <option value="sj">San Jose</option>
//                                                         <option value="ph">Philadelphia</option>
//                                                         <option value="nl">Nashville</option>
//                                                         <option value="sf">San Francisco</option>
//                                                         <option value="hu">Houston</option>
//                                                         <option value="sa">San Antonio</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                                                 <div className="form-group mb-0">
//                                                     <label>Choose Date</label>
//                                                     <DatePicker
//                                                         selected={startDate}
//                                                         onChange={(dates) => {
//                                                             const [start, end] = dates;
//                                                             setStartDate(start);
//                                                             setEndDate(end);
//                                                         }}
//                                                         startDate={startDate}
//                                                         endDate={endDate}
//                                                         selectsRange
//                                                         inline={false}
//                                                         className="form-control fw-bold"
//                                                         placeholderText="Check-In & Check-Out"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-4 col-lg-5 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                                                 <div className="form-group mb-0">
//                                                     <label>Members</label>
//                                                     <div className="booking-form__input guests-input mixer-auto">
//                                                         <button name="guests-btn" id="guests-input-btn">{guests.adults} Adult(s)</button>
//                                                         <div className="guests-input__options" id="guests-input-options">
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('adults', 'subtract')}>
//                                                                     <i className="fa-solid fa-minus"></i>
//                                                                 </span>
//                                                                 <span className="guests-input__value">{guests.adults} Adult(s)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('adults', 'add')}>
//                                                                     <i className="fa-solid fa-plus"></i>
//                                                                 </span>
//                                                             </div>
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('children', 'subtract')}>
//                                                                     <i className="fa-solid fa-minus"></i>
//                                                                 </span>
//                                                                 <span className="guests-input__value">{guests.children} Child(ren)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('children', 'add')}>
//                                                                     <i className="fa-solid fa-plus"></i>
//                                                                 </span>
//                                                             </div>
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('rooms', 'subtract')}>
//                                                                     <i className="fa-solid fa-minus"></i>
//                                                                 </span>
//                                                                 <span className="guests-input__value">{guests.rooms} Room(s)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('rooms', 'add')}>
//                                                                     <i className="fa-solid fa-plus"></i>
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                                                 <div className="form-group mb-0">
//                                                     <button type="button" className="btn btn-primary full-width rounded-1 fw-medium">
//                                                         <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bannerstay;




// import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useHistory } from 'react-router-dom';

// const Bannerstay = () => {
//     const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     const [city, setCity] = useState('');
//     const history = useHistory();

//     // Function to handle guest count changes
//     const handleGuestChange = (type, operation) => {
//         setGuests(prevGuests => {
//             const newCount = operation === 'add' ? prevGuests[type] + 1 : prevGuests[type] - 1;
//             if (newCount >= 0) {
//                 return { ...prevGuests, [type]: newCount };
//             }
//             return prevGuests;
//         });
//     };

//     // Function to handle the search
//     const handleSearch = () => {
//         // Check if city is entered
//         if (city) {
//             // Navigate to the rental page with the city name
//             history.push(`/rental/${city}`);
//         }
//     };

//     return (
//         <div>
//             <div className="image-cover hero-header bg-white" style={{ background: 'url(/assets/img/banner-8.jpg) no-repeat' }} data-overlay="3">
//                 <div className="container">
//                     {/* Search Form */}
//                     <div className="row justify-content-center align-items-center">
//                         <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
//                             <div className="position-relative text-center mb-5">
//                                 <h1>Start Your Trip with <span className="position-relative z-4">GeoTrip</span></h1>
//                                 <p className="fs-5 fw-light">Take a little break from the work stress of everyday. Discover, plan trips and explore beautiful destinations.</p>
//                             </div>
//                         </div>

//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                             <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
//                                 <div className="row gy-3 gx-md-3 gx-sm-2">
//                                     <div className="col-xl-8 col-lg-7 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                                                 <div className="form-group hdd-arrow border rounded-1 mb-0">
//                                                     <label>Where</label>
//                                                     <input 
//                                                         type="text" 
//                                                         className="form-control" 
//                                                         placeholder="Enter city name"
//                                                         value={city}
//                                                         onChange={(e) => setCity(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                                                 <div className="form-group mb-0">
//                                                     <label>Choose Date</label>
//                                                     <DatePicker
//                                                         selected={startDate}
//                                                         onChange={(dates) => {
//                                                             const [start, end] = dates;
//                                                             setStartDate(start);
//                                                             setEndDate(end);
//                                                         }}
//                                                         startDate={startDate}
//                                                         endDate={endDate}
//                                                         selectsRange
//                                                         inline={false}
//                                                         className="form-control fw-bold"
//                                                         placeholderText="Check-In & Check-Out"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-4 col-lg-5 col-md-12">
//                                         <div className="row gy-3 gx-md-3 gx-sm-2">
//                                             <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                                                 <div className="form-group mb-0">
//                                                     <label>Members</label>
//                                                     <div className="booking-form__input guests-input mixer-auto">
//                                                         <button name="guests-btn" id="guests-input-btn">{guests.adults} Adult(s)</button>
//                                                         <div className="guests-input__options" id="guests-input-options">
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('adults', 'subtract')}><i className="fa-solid fa-minus"></i></span>
//                                                                 <span className="guests-input__value">{guests.adults} Adult(s)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('adults', 'add')}><i className="fa-solid fa-plus"></i></span>
//                                                             </div>
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('children', 'subtract')}><i className="fa-solid fa-minus"></i></span>
//                                                                 <span className="guests-input__value">{guests.children} Child(ren)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('children', 'add')}><i className="fa-solid fa-plus"></i></span>
//                                                             </div>
//                                                             <div>
//                                                                 <span className="guests-input__ctrl minus" onClick={() => handleGuestChange('rooms', 'subtract')}><i className="fa-solid fa-minus"></i></span>
//                                                                 <span className="guests-input__value">{guests.rooms} Room(s)</span>
//                                                                 <span className="guests-input__ctrl plus" onClick={() => handleGuestChange('rooms', 'add')}><i className="fa-solid fa-plus"></i></span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                                                 <div className="form-group mb-0">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn btn-primary full-width rounded-1 fw-medium"
//                                                         onClick={handleSearch}
//                                                     >
//                                                         <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bannerstay;



import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Bannerstay = () => {
    const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [city, setCity] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook



    // Function to handle guest count changes
    const handleGuestChange = (type, operation) => {
        setGuests(prevGuests => {
            const newCount = operation === 'add' ? prevGuests[type] + 1 : prevGuests[type] - 1;
            if (newCount >= 0) {
                return { ...prevGuests, [type]: newCount };
            }
            return prevGuests;
        });
    };

    // Function to handle the search
    const handleSearch = () => {
        // Check if city is entered
        if (city) {
            // Navigate to the rental page with the city name
            navigate(`/rental/${city}/rental-list/`);
        }
    };

    return (
        <div>
            <div className="image-cover hero-header bg-white" style={{ background: 'url(tourbanner.png) no-repeat' }} data-overlay="3">
                <div className="container">
                    {/* Search Form */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                            <div className="position-relative text-center mb-5">
                                <h1>Start Your Trip with <span className="position-relative z-4">GeoTrip</span></h1>
                                <p className="fs-5 fw-light">Take a little break from the work stress of everyday. Discover, plan trips and explore beautiful destinations.</p>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 px-lg-5">
                            <div className="search-wrap with-label bg-white rounded-3 p-3 pt-4">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="row gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="form-group hdd-arrow border rounded-1 mb-0">
                                                    <label>Where</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter city name"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className=" form-group hdd-arrow border rounded-1 mb-0">
                                                    <label>Choose Date</label>
                                                    {/* <DatePicker
                                                        selected={startDate}
                                                        onChange={(dates) => {
                                                            const [start, end] = dates;
                                                            setStartDate(start);
                                                            setEndDate(end);
                                                        }}
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        selectsRange
                                                        inline={false}
                                                        className="h-14"
                                                        placeholderText="Check-In & Check-Out"
                                                    /> */}
                                                    <input type='date' className="form-control fw-bold"
                                                    selected={startDate}
                                                    onChange={(dates) => {
                                                        const [start, end] = dates;
                                                        setStartDate(start);
                                                        setEndDate(end);
                                                    }}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    selectsRange
                                                    placeholderText="Check-In & Check-Out"
                                                    >
                        
                        </input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="row gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                                <div className="form-group mb-0">
                                                    <label>Guests</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        min="1"
                                                        value={guests}
                                                        onChange={(e) => setGuests(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group mb-0">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary full-width rounded-1 fw-medium"
                                                        onClick={handleSearch}
                                                    >
                                                        <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannerstay;




