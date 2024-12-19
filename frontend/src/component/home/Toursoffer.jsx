
// import React from 'react';

// // Reusable TourCard Component
// import TourCard from '../card/TourCard';

// const Toursoffer = () => {
//   const tours = [
//     {
//       discount: '20%',
//       imageSrc: 'ct-6.png',
//       location: 'Los Angeles',
//       tripType: 'Round-trip',
//       duration: '3D/4N',
//       persons: '3',
//       priceRange: '$849 - $999',
//     },
//     {
//       discount: '15%',
//       imageSrc: 'ct-5.png',
//       location: 'United Kingdom',
//       tripType: 'Round-trip',
//       duration: '3D/4N',
//       persons: '2',
//       priceRange: '$399 - $599',
//     },
//     {
//       discount: '30%',
//       imageSrc: 'ct-1.png',
//       location: 'France',
//       tripType: 'Round-trip',
//       duration: '3D/4N',
//       persons: '3',
//       priceRange: '$569 - $799',
//     },
//   ];

//   return (
//     <div>
//       <section className="pt-5 pb-0">
//         <div className="container">
//           <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
//             {tours.map((tour, index) => (
//               <TourCard key={index} {...tour} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Toursoffer;

// import React from 'react'

// const Toursoffer = () => {
//   return (
//     <div>
//       <section class="pt-5 pb-0">
// 			<div class="container">
// 				<div class="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">

// 					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
// 						<div class="pop-touritems">
// 							<a href="#" class="card rounded-3 border br-dashed border-2 m-0">
// 								<div class="offers-container d-flex align-items-center justify-content-start p-2">
// 									<div class="offers-flex position-relative">
// 										<div class="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span
// 												class="label text-light bg-danger fw-medium">20% Off</span></div>
// 										<div class="offers-pic"><img src="src/assets/img/city/ct-6.png" class="img-fluid rounded" width="110" alt="">
// 										</div>
// 									</div>
// 									<div class="offers-captions ps-3">
// 										<h4 class="city fs-6 m-0 fw-bold">
// 											<span>Los Angeles</span>
// 										</h4>
// 										<p class="detail ellipsis-container">
// 											<span class="ellipsis-item__normal">Round-trip</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">3D/4N</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">3 Person</span>
// 										</p>
// 										<div class="booking-wrapes d-flex align-items-center justify-content-between">
// 											<h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">$849 -
// 													$999</span></h5>
// 										</div>
// 									</div>
// 								</div>
// 							</a>
// 						</div>
// 					</div>

// 					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
// 						<div class="pop-touritems">
// 							<a href="#" class="card rounded-3 border br-dashed border-2 m-0">
// 								<div class="offers-container d-flex align-items-center justify-content-start p-2">
// 									<div class="offers-flex position-relative">
// 										<div class="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span
// 												class="label text-light bg-danger fw-medium">15% Off</span></div>
// 										<div class="offers-pic"><img src="src/assets/img/city/ct-5.png" class="img-fluid rounded" width="110" alt="">
// 										</div>
// 									</div>
// 									<div class="offers-captions ps-3">
// 										<h4 class="city fs-6 m-0 fw-bold">
// 											<span>United Kingdom</span>
// 										</h4>
// 										<p class="detail ellipsis-container">
// 											<span class="ellipsis-item__normal">Round-trip</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">3D/4N</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">2 Person</span>
// 										</p>
// 										<div class="booking-wrapes d-flex align-items-center justify-content-between">
// 											<h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">$399 -
// 													$599</span></h5>
// 										</div>
// 									</div>
// 								</div>
// 							</a>
// 						</div>
// 					</div>

// 					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
// 						<div class="pop-touritems">
// 							<a href="#" class="card rounded-3 border br-dashed border-2 m-0">
// 								<div class="offers-container d-flex align-items-center justify-content-start p-2">
// 									<div class="offers-flex position-relative">
// 										<div class="offer-tags position-absolute start-0 top-0 mt-2 ms-2"><span
// 												class="label text-light bg-danger fw-medium">30% Off</span></div>
// 										<div class="offers-pic"><img src="src/assets/img/city/ct-1.png" class="img-fluid rounded" width="110" alt="">
// 										</div>
// 									</div>
// 									<div class="offers-captions ps-3">
// 										<h4 class="city fs-6 m-0 fw-bold">
// 											<span>France</span>
// 										</h4>
// 										<p class="detail ellipsis-container">
// 											<span class="ellipsis-item__normal">Round-trip</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">3D/4N</span>
// 											<span class="separate ellipsis-item__normal"></span>
// 											<span class="ellipsis-item">3 Person</span>
// 										</p>
// 										<div class="booking-wrapes d-flex align-items-center justify-content-between">
// 											<h5 class="fs-5 low-price m-0"><span class="tag-span">From</span> <span class="price">$569 -
// 													$799</span></h5>
// 										</div>
// 									</div>
// 								</div>
// 							</a>
// 						</div>
// 					</div>

// 				</div>
// 			</div>
// 		</section>
//     </div>
//   )
// }

// export default Toursoffer




import React from 'react';

const TourItem = ({ discount, imageSrc, location, tripDetails, priceRange }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      <div className="pop-touritems">
        <a href="#" className="card rounded-3 br-dashed border-2 m-0">
          <div className="offers-container d-flex align-items-center justify-content-start p-2">
            <div className="offers-flex position-relative">
              <div className="offer-tags position-absolute start-0 top-0 mt-2 ms-2">
                <span className="label text-light bg-danger fw-medium">{discount}</span>
              </div>
              <div className="offers-pic">
                <img src={imageSrc} className="img-fluid rounded" width="110" alt={location} />
              </div>
            </div>
            <div className="offers-captions ps-3">
              <h4 className="city fs-6 m-0 fw-bold">
                <span>{location}</span>
              </h4>
              <p className="detail ellipsis-container">
                {tripDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <span className="ellipsis-item__normal">{detail}</span>
                    {index < tripDetails.length - 1 && <span className="separate ellipsis-item__normal"></span>}
                  </React.Fragment>
                ))}
              </p>
              <div className="booking-wrapes d-flex align-items-center justify-content-between">
                <h5 className="fs-5 low-price m-0">
                  <span className="tag-span">From</span> <span className="price">{priceRange}</span>
                </h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const Toursoffer = () => {
  const tours = [
    {
      discount: '20% Off',
      imageSrc: 'src/assets/img/city/ct-6.png',
      location: 'Los Angeles',
      tripDetails: ['Round-trip', '3D/4N', '3 Person'],
      priceRange: '$849 - $999',
    },
    {
      discount: '15% Off',
      imageSrc: 'src/assets/img/city/ct-5.png',
      location: 'United Kingdom',
      tripDetails: ['Round-trip', '3D/4N', '2 Person'],
      priceRange: '$399 - $599',
    },
    {
      discount: '30% Off',
      imageSrc: 'src/assets/img/city/ct-1.png',
      location: 'France',
      tripDetails: ['Round-trip', '3D/4N', '3 Person'],
      priceRange: '$569 - $799',
    },
  ];

  return (
    <div>
      <section className="pt-5 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-3 g-4">
            {tours.map((tour, index) => (
              <TourItem
                key={index}
                discount={tour.discount}
                imageSrc={tour.imageSrc}
                location={tour.location}
                tripDetails={tour.tripDetails}
                priceRange={tour.priceRange}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toursoffer;
