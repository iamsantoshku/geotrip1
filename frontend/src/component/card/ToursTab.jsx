



// import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from 'react-router-dom';

// const ToursTab = () => {
//     const [tourType, setTourType] = useState('');
//     const [destination, setDestination] = useState('');
//     const [startDate, setStartDate] = useState(null);
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (destination && tourType) {
//             navigate(`/rental/${destination}/rental-list/`);
//         }
//     };

//     return (
//         <div className="tab-pane" id="tours">
//             <div className="row d-flex align-items-end gap-3">
//                 {/* Destination Input */}
//                 <div className="col-lg-3 col-md-4">
//                     <div className="form-group border rounded-1 mb-0">
//                         <label className="fw-bold">Destination</label>
//                         <input 
//                             type="text" 
//                             className="form-control fw-bold" 
//                             placeholder="Enter destination" 
//                             value={destination} 
//                             onChange={(e) => setDestination(e.target.value)} 
//                         />
//                     </div>
//                 </div>

//                 {/* Date Picker */}
//                 <div className="col-lg-3 col-md-4 ">
//                     <div className=" form-group border rounded-1 mb-0">
//                         <label className="fw-bold ">Choose Date</label>
//                         {/* <DatePicker
//                             selected={startDate}
//                             onChange={(date) => setStartDate(date)}
//                             className="form-control fw-bold "
//                             placeholderText="Select a date"
//                         /> */}
//                         <input type='date' className="form-control fw-bold">
                        
//                         </input>
                        
//                     </div>
//                 </div>

//                 {/* Tour Type Dropdown */}
//                 <div className="col-lg-3 col-md-4">
//                     <div className="form-group border rounded-1 mb-0">
//                         <label className="fw-bold">Tour Type</label>
//                         <select 
//                             className="form-control fw-bold"
//                             value={tourType}
//                             onChange={(e) => setTourType(e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             <option value="family">Family Package</option>
//                             <option value="honeymoon">Honeymoon Package</option>
//                             <option value="group">Group Package</option>
//                             <option value="desert">Desert Tour</option>
//                             <option value="history">History Tour</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Search Button */}
//                 <div className="col-lg-2 col-md-3">
//                     <div className="form-group mb-0">
//                         <button
//                             type="button"
//                             className="btn btn-primary full-width fw-medium w-100"
//                             onClick={handleSearch}
//                         >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ToursTab;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ToursTab = () => {
//     const [tourType, setTourType] = useState('');
//     const [destination, setDestination] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         if (destination && tourType) {
//             navigate(`/rental/${destination}/rental-list/`);
//         }
//     };

//     return (
//         <div className="tab-pane fade show active" id="tours" role="tabpanel" aria-labelledby="tours-tab">
//             <div className="row d-flex align-items-end gap-3">
//                 {/* Destination Input */}
//                 <div className="col-lg-3 col-md-4">
//                     <div className="form-group border rounded-1 mb-0">
//                         <label className="fw-bold">Destination</label>
//                         <input 
//                             type="text" 
//                             className="form-control fw-bold" 
//                             placeholder="Enter destination" 
//                             value={destination} 
//                             onChange={(e) => setDestination(e.target.value)} 
//                         />
//                     </div>
//                 </div>

//                 {/* Date Picker */}
//                 <div className="col-lg-3 col-md-4">
//                     <div className="form-group border rounded-1 mb-0">
//                         <label className="fw-bold">Choose Date</label>
//                         <input 
//                             type="date" 
//                             className="form-control fw-bold"
//                             value={startDate}
//                             onChange={(e) => setStartDate(e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 {/* Tour Type Dropdown */}
//                 <div className="col-lg-3 col-md-4">
//                     <div className="form-group border rounded-1 mb-0">
//                         <label className="fw-bold">Tour Type</label>
//                         <select 
//                             className="form-control fw-bold"
//                             value={tourType}
//                             onChange={(e) => setTourType(e.target.value)}
//                         >
//                             <option value="">Select</option>
//                             <option value="family">Family Package</option>
//                             <option value="honeymoon">Honeymoon Package</option>
//                             <option value="group">Group Package</option>
//                             <option value="desert">Desert Tour</option>
//                             <option value="history">History Tour</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Search Button */}
//                 <div className="col-lg-2 col-md-3">
//                     <div className="form-group mb-0">
//                         <button
//                             type="button"
//                             className="btn btn-primary full-width fw-medium w-100"
//                             onClick={handleSearch}
//                         >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ToursTab;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ToursTab = () => {
    const [tourType, setTourType] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (destination && tourType) {
            navigate(`/rental/${destination}/`);
        }
    };

    return (
        <div className="tab-pane show active" id="tours">
            <div className="row gy-3 gx-md-3 gx-sm-2">
                <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                            <div className="form-group mb-0">
                                <label>Destination</label>
                                <input type="text" className="form-control" placeholder="Enter destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group mb-0">
                                <label>Choose Date</label>
                                <input type="date" className="form-control fw-bold" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <div className="form-group mb-0">
                                <label>Tour Type</label>
                                <select className="form-control" value={tourType} onChange={(e) => setTourType(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="family">Family Package</option>
                                    <option value="honeymoon">Honeymoon Package</option>
                                    <option value="group">Group Package</option>
                                    <option value="desert">Desert Tour</option>
                                    <option value="history">History Tour</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium" onClick={handleSearch}>
                                    <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursTab;
