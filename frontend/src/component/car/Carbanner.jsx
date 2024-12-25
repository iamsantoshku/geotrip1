import React from 'react'

const Carbanner = () => {
  return (
    <div>
        <div class="py-5 bg-primary position-relative">
			<div class="container">

				{/* <!-- Search Form --> */}
				<div class="row justify-content-center align-items-center">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<div class="search-wrap position-relative">
							<div class="row align-items-end gy-3 gx-md-3 gx-sm-2">

								<div class="col-xl-8 col-lg-7 col-md-12">
									<div class="row gy-3 gx-md-3 gx-sm-2">
										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
											<div class="form-group hdd-arrow mb-0">
												<label class="text-light text-uppercase opacity-75">Pickup Location</label>
												<select class="pickup form-control fw-bold">
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
										<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
											<div class="form-group mb-0">
												<label class="text-light text-uppercase opacity-75">Select Date</label>
												<input type="text" class="form-control fw-bold" placeholder="Check-In & Check-Out"
													id="checkinout" readonly="readonly"/>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-5 col-md-12">
									<div class="row align-items-end gy-3 gx-md-3 gx-sm-2">
										<div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
											<div class="form-group hdd-arrow mb-0">
												<label class="text-light text-uppercase opacity-75">Drop Location</label>
												<select class="drop form-control fw-bold">
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
										<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
											<div class="form-group mb-0">
												<button type="button" class="btn btn-whites text-primary full-width fw-medium"><i
														class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
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
  )
}

export default Carbanner



// import React, { useState } from 'react';
// import axios from 'axios';

// const Carbanner = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropLocation, setDropLocation] = useState('');
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });
//   const [cars, setCars] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.post('http://localhost:4040/api/v1/cars/searchcar', {
//         pickupLocation,
//         dropLocation,
//         dateRange,
//       });
//       setCars(response.data.cars);
// 	  console.log(response.data.cars)
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="py-5 bg-primary position-relative">
//         <div className="container">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap position-relative">
//                 <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                   <div className="col-xl-8 col-lg-7 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                         <div className="form-group hdd-arrow mb-0">
//                           <label className="text-light text-uppercase opacity-75">Pickup Location</label>
//                           <select
//                             className="pickup form-control fw-bold"
//                             value={pickupLocation}
//                             onChange={(e) => setPickupLocation(e.target.value)}
//                           >
//                             <option value="">Select</option>
//                             <option value="New York">New York</option>
//                             <option value="San Diego">San Diego</option>
//                             <option value="San Jose">San Jose</option>
//                             <option value="Philadelphia">Philadelphia</option>
//                             <option value="Nashville">Nashville</option>
//                             <option value="San Francisco">San Francisco</option>
//                             <option value="Houston">Houston</option>
//                             <option value="San Antonio">San Antonio</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label className="text-light text-uppercase opacity-75">Select Date</label>
//                           <input
//                             type="text"
//                             className="form-control fw-bold"
//                             placeholder="Start Date - End Date"
//                             onChange={(e) =>
//                               setDateRange({ start: e.target.value.split(' - ')[0], end: e.target.value.split(' - ')[1] })
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-4 col-lg-5 col-md-12">
//                     <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                         <div className="form-group hdd-arrow mb-0">
//                           <label className="text-light text-uppercase opacity-75">Drop Location</label>
//                           <select
//                             className="drop form-control fw-bold"
//                             value={dropLocation}
//                             onChange={(e) => setDropLocation(e.target.value)}
//                           >
//                             <option value="">Select</option>
//                             <option value="New York">New York</option>
//                             <option value="San Diego">San Diego</option>
//                             <option value="San Jose">San Jose</option>
//                             <option value="Philadelphia">Philadelphia</option>
//                             <option value="Nashville">Nashville</option>
//                             <option value="San Francisco">San Francisco</option>
//                             <option value="Houston">Houston</option>
//                             <option value="San Antonio">San Antonio</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                         <div className="form-group mb-0">
//                           <button
//                             type="button"
//                             className="btn btn-whites text-primary full-width fw-medium"
//                             onClick={handleSearch}
							
//                           >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Display Cars */}
//               <div className="mt-5">
//                 <h3 className="text-light">Available Cars</h3>
//                 <div className="row">
//                   {cars.map((car) => (
//                     <div className="col-md-4" key={car._id}>
//                       <div className="card">
//                         <img src={car.imageUrl} className="card-img-top" alt={car.name} />
//                         <div className="card-body">
//                           <h5 className="card-title">{car.name}</h5>
//                           <p className="card-text">
//                             Pickup: {car.pickupLocation} <br />
//                             Drop: {car.dropLocation} <br />
//                             Price: ${car.pricePerDay}/day
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* End Display Cars */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carbanner;



// import React, { useState } from 'react';
// import CarList from './CarList';

// const Carbanner = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropLocation, setDropLocation] = useState('');
//   const [date, setDate] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/cars/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ pickupLocation, dropLocation, date }),
//       });
//       const data = await response.json();
//       setSearchResults(data);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="py-5 bg-primary position-relative">
//         <div className="container">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//               <div className="search-wrap position-relative">
//                 <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                   <div className="col-xl-8 col-lg-7 col-md-12">
//                     <div className="row gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
//                         <div className="form-group hdd-arrow mb-0">
//                           <label className="text-light text-uppercase opacity-75">Pickup Location</label>
//                           <input
//                             type="text"
//                             className="form-control fw-bold"
//                             placeholder="Enter pickup location"
//                             value={pickupLocation}
//                             onChange={(e) => setPickupLocation(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
//                         <div className="form-group mb-0">
//                           <label className="text-light text-uppercase opacity-75">Select Date</label>
//                           <input
//                             type="text"
//                             className="form-control fw-bold"
//                             placeholder="Check-In & Check-Out"
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-4 col-lg-5 col-md-12">
//                     <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
//                       <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
//                         <div className="form-group mb-0">
//                           <label className="text-light text-uppercase opacity-75">Drop Location</label>
//                           <input
//                             type="text"
//                             className="form-control fw-bold"
//                             placeholder="Enter drop location"
//                             value={dropLocation}
//                             onChange={(e) => setDropLocation(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
//                         <div className="form-group mb-0">
//                           <button
//                             type="button"
//                             className="btn btn-whites text-primary full-width fw-medium"
//                             onClick={handleSearch}
//                           >
//                             <i className="fa-solid fa-magnifying-glass me-2"></i>Search
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <CarList cars={searchResults} />
//     </div>
//   );
// };

// export default Carbanner;
