// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const FlightsTab = () => {

//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     departDate: '',
//     returnDate: '',
//   });
//   const navigate = useNavigate();


//   const navToSearchPage = () => {
//     const { from, to, departDate, returnDate } = formData;
//     navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     handleFormDataChange({ ...formData, [name]: value });
//   };
//   return (
//     <div className="tab-pane" id="flights">
//       <div className="row gx-lg-2 g-3">
//         <div className="col-xl-5 col-lg-5 col-md-12">
//           <div className="row gy-3 gx-lg-2 gx-3">
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">


//               <div className="form-group hdd-arrow mb-0">
//                 <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
//                 <input
//                   type="text"
//                   name="from"
//                   className="leaving form-control fw-bold bg-gray-50 text-lg rounded-lg"
//                   value={formData.from}
//                   onChange={handleInputChange}
//                   placeholder="Enter city name"
//                 />
//               </div>
//               <div className="btn-flip-icon mt-md-0">
//                 <button className="p-0 m-0 text-primary">
//                   <i className="fa-solid fa-right-left"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">


//               <div className="form-group hdd-arrow mb-0">
//                 <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
//                 <input
//                   type="text"
//                   name="to"
//                   className="goingto form-control fw-bold bg-gray-50 text-lg rounded-lg"
//                   value={formData.to}
//                   onChange={handleInputChange}
//                   placeholder="Enter city name"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-xl-4 col-lg-4 col-md-12">
//             <div className="row gy-3 gx-lg-2 gx-3">
//               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">


//                 <div className="form-group mb-0">
//                   <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
//                   <input
//                     name="departDate"
//                     className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
//                     type="date"
//                     value={formData.departDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

//                 <div className="form-group mb-0">
//                   <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
//                   <input
//                     name="returnDate"
//                     className="form-control fw-bold choosedate bg-gray-50 text-lg rounded-lg"
//                     type="date"
//                     value={formData.returnDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-xl-2 col-lg-2 col-md-12">
//             <div className="form-groupp hdd-arrow mb-0">
//               <select className="occupant form-control fw-bold">
//                 <option value="">Select</option>
//                 <option value="lv">01 Adult</option>
//                 <option value="la">02 Adult</option>
//                 <option value="kc">03 Adult</option>
//                 <option value="no">04 Adult</option>
//                 <option value="kc">05 Adult</option>
//                 <option value="lb">06 Adult</option>
//                 <option value="cl">07 Adult</option>
//                 <option value="cn">08 Adult</option>
//               </select>
//             </div>
//           </div>

//           <div className="col-xl-1 col-lg-1 col-md-12">
//             <div className="form-group mb-0">
//               <button
//                 type="button"
//                 className="btn btn-primary full-width fw-medium"
//               >
//                 <i className="fa-solid fa-magnifying-glass fs-5"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
    
//   </div>
//     );
// };

// export default FlightsTab;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const FlightsTab = () => {
//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     departDate: '',
//     returnDate: '',
//   });

//   const navigate = useNavigate();

//   const navToSearchPage = () => {
//     const { from, to, departDate, returnDate } = formData;
//     navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="tab-pane" id="flights">
//       <div className="row gx-3 align-items-center">
//         {/* From City */}
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
//             <input
//               type="text"
//               name="from"
//               className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
//               value={formData.from}
//               onChange={handleInputChange}
//               placeholder="Enter city name"
//             />
//           </div>
//         </div>

//         {/* To City */}
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
//             <input
//               type="text"
//               name="to"
//               className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
//               value={formData.to}
//               onChange={handleInputChange}
//               placeholder="Enter city name"
//             />
//           </div>
//         </div>

//         {/* Departure Date */}
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
//             <input
//               type="date"
//               name="departDate"
//               className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
//               value={formData.departDate}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Return Date */}
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
//             <input
//               type="date"
//               name="returnDate"
//               className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
//               value={formData.returnDate}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Occupants */}
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="occupants" className="form-label fw-bold text-lg">Occupants</label>
//             <select className="form-control fw-bold bg-gray-50 text-lg rounded-lg">
//               <option value="">Select</option>
//               <option value="1">1 Adult</option>
//               <option value="2">2 Adults</option>
//               <option value="3">3 Adults</option>
//               <option value="4">4 Adults</option>
//               <option value="5">5 Adults</option>
//               <option value="6">6 Adults</option>
//               <option value="7">7 Adults</option>
//               <option value="8">8 Adults</option>
//             </select>
//           </div>
//         </div>

//         {/* Search Button */}
//         <div className="col-auto">
//           <div className="form-group">
//             <button
//               type="button"
//               className="btn btn-primary fw-medium px-4"
//               onClick={navToSearchPage}
//             >
//               <i className="fa-solid fa-magnifying-glass fs-5"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightsTab;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlightsTab = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
  });

  const navigate = useNavigate();

  const navToSearchPage = () => {
    const { from, to, departDate, returnDate } = formData;
    navigate(`/flight?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="tab-pane" id="flights">
      <div className="row gx-3 gy-3 align-items-center">
        {/* From City */}
        <div className="col-md-2 col-12">
          <div className="form-group">
            <label htmlFor="from" className="form-label fw-bold text-lg">From City</label>
            <input
              type="text"
              name="from"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="Enter city name"
            />
          </div>
        </div>

        {/* To City */}
        <div className="col-md-2 col-12">
          <div className="form-group">
            <label htmlFor="to" className="form-label fw-bold text-lg">To City</label>
            <input
              type="text"
              name="to"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="Enter city name"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="col-md-2 col-12">
          <div className="form-group">
            <label htmlFor="departDate" className="form-label fw-bold text-lg">Departure Date</label>
            <input
              type="date"
              name="departDate"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.departDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Return Date */}
        <div className="col-md-2 col-12">
          <div className="form-group">
            <label htmlFor="returnDate" className="form-label fw-bold text-lg">Return Date</label>
            <input
              type="date"
              name="returnDate"
              className="form-control fw-bold bg-gray-50 text-lg rounded-lg"
              value={formData.returnDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Occupants */}
        <div className="col-md-2 col-12">
          <div className="form-group">
            <label htmlFor="occupants" className="form-label fw-bold text-lg">Occupants</label>
            <select className="form-control fw-bold bg-gray-50 text-lg rounded-lg">
              <option value="">Select</option>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5 Adults</option>
              <option value="6">6 Adults</option>
              <option value="7">7 Adults</option>
              <option value="8">8 Adults</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="col-md-2 col-12 text-md-end text-center">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary fw-medium px-4 w-100"
              onClick={navToSearchPage}
            >
              <i className="fa-solid fa-magnifying-glass fs-5"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsTab;
