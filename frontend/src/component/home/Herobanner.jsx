// import React from 'react';

// const Herobanner = () => {
//   const banners = [
//     {
//       id: 1,
//       title: 'Starts Your Trip with makeustrip',
//       description: 'Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.',
//       buttonText: 'Explore More',
//       // background: '/assets/img/banner.jpg',
//       background: '/flightbanner.png',
//     },
//     {
//       id: 2,
//       title: 'Explore The World Around',
//       description: 'Find breathtaking adventures waiting for you around the globe. Your journey begins here!',
//       buttonText: 'Discover Now',
//       background: '/assets/img/banner-3.jpg',
//     },
//   ];

//   return (
//     <div id="myCarousel" className="carousel slide carousel-fade mb-6">
//       <div className="carousel-inner">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${index === 0 ? 'active' : ''} bg-cover full-height`}
//             style={{ background: `url(${banner.background}) no-repeat center center / cover` }}
//             data-overlay="6"
//           >
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1>
//                   {banner.title.split('GeoTrip')[0]}
//                   <span className="position-relative z-4">
//                     {/* makeustrip */}
//                     <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                       <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                         <path
//                           className="fill-white opacity-7"
//                           d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c..."
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                 </h1>
//                 <p className="fs-5 fw-light">{banner.description}</p>
//                 <p className="mt-5">
//                   <a className="btn btn-primary px-5" href="#">
//                     {banner.buttonText} <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Herobanner;




// import React from 'react';

// const Herobanner = () => {
//   const banners = [
//     {
//       id: 1,
//       title: 'Starts Your Trip with makeustrip',
//       description: 'Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.',
//       buttonText: 'Explore More',
//       background: '/flightbanner.png',
//     },
//     {
//       id: 2,
//       title: 'Explore The World Around',
//       description: 'Find breathtaking adventures waiting for you around the globe. Your journey begins here!',
//       buttonText: 'Discover Now',
//       background: '/assets/img/banner-3.jpg',
//     },
//   ];

//   return (
//     <div id="myCarousel" className="carousel slide carousel-fade mb-6">
//       <div className="carousel-inner">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${index === 0 ? 'active' : ''} bg-cover full-height`}
//             style={{ 
//               backgroundImage: `url(${banner.background})`, 
//               backgroundSize: "cover", 
//               backgroundPosition: "center", 
//               backgroundRepeat: "no-repeat",
//               width: "1520px", // Ensuring the full width
//               height: "495px" // Ensuring the full height
//             }}
//             data-overlay="6"
//           >
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1>
//                   {banner.title.split('GeoTrip')[0]}
//                   <span className="position-relative z-4">
//                     <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
//                       <svg width="185px" height="23px" viewBox="0 0 445.5 23">
//                         <path
//                           className="fill-white opacity-7"
//                           d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c..."
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                 </h1>
//                 <p className="fs-5 fw-light">{banner.description}</p>
//                 <p className="mt-5">
//                   <a className="btn btn-primary px-5" href="#">
//                     {banner.buttonText} <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Herobanner;




import React from "react";

const Herobanner = () => {
  const banners = [
    {
      id: 1,
      title: "Starts Your Trip with Makeustrip",
      description:
        "Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.",
      buttonText: "Explore More",
      background: "/flightbanner.png",
    },
    {
      id: 2,
      title: "Explore The World Around",
      description:
        "Find breathtaking adventures waiting for you around the globe. Your journey begins here!",
      buttonText: "Discover Now",
      background: "/assets/img/banner-3.jpg",
    },
  ];

  return (
    <div id="myCarousel" className="carousel slide carousel-fade mb-6">
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${
              index === 0 ? "active" : ""
            } bg-cover full-height`}
            style={{
              backgroundImage: `url(${banner.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%", // Full width
              minHeight: "595px", // Default height
              height: "auto", // Auto height for responsiveness
            }}
            data-overlay="6"
          >
            <div className="container">
              <div className="carousel-caption text-center">
                {/* <h1 className="banner-title">
                  {banner.title.split("Makeustrip")[0]}
                  <span className="position-relative z-4">
                    <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                      <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                        <path
                          className="fill-white opacity-7"
                          d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c..."
                        />
                      </svg>
                    </span>
                  </span>
                </h1> */}
                <h1 className="text-5xl">{banner.title}</h1>
                <p className="fs-5 fw-light">{banner.description}</p>
                <p className="mt-5">
                  <a className="btn btn-primary px-5" href="flight">
                    {banner.buttonText}{" "}
                    <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herobanner;


// import React from 'react';

// const Herobanner = () => {
//   const banners = [
//     {
//       id: 1,
//       title: 'Starts Your Trip with makeustrip',
//       description: 'Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.',
//       buttonText: 'Explore More',
//       background: '/flightbanner.png',
//     },
//     {
//       id: 2,
//       title: 'Explore The World Around',
//       description: 'Find breathtaking adventures waiting for you around the globe. Your journey begins here!',
//       buttonText: 'Discover Now',
//       background: '/assets/img/banner-3.jpg',
//     },
//   ];

//   return (
//     <div id="myCarousel" className="carousel slide carousel-fade mb-6">
//       <div className="carousel-inner">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${index === 0 ? 'active' : ''} full-height`}
//             style={{ backgroundImage: `url(${banner.background})` }}
//           >
//             <div className="overlay"></div>
//             <div className="container">
//               <div className="carousel-caption">
//                 <h1>{banner.title}</h1>
//                 <p className="fs-5 fw-light">{banner.description}</p>
//                 <p className="mt-5">
//                   <a className="btn btn-primary px-5" href="#">
//                     {banner.buttonText} <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Herobanner;


