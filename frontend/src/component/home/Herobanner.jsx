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




// import React from "react";

// const Herobanner = () => {
//   const banners = [
//     {
//       id: 1,
//       title: "Starts Your Trip with Makeustrip",
//       description:
//         "Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.",
//       buttonText: "Explore More",
//       background: "/flightbanner.png",
//     },
//     {
//       id: 2,
//       title: "Explore The World Around",
//       description:
//         "Find breathtaking adventures waiting for you around the globe. Your journey begins here!",
//       buttonText: "Discover Now",
//       background: "/assets/img/banner-3.jpg",
//     },
//   ];

//   return (
//     <div id="myCarousel" className="carousel slide carousel-fade mb-6">
//       <div className="carousel-inner">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${
//               index === 0 ? "active" : ""
//             } bg-cover full-height`}
//             style={{
//               backgroundImage: `url(${banner.background})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               width: "100%", // Full width
//               minHeight: "595px", // Default height
//               height: "auto", // Auto height for responsiveness
//             }}
//             data-overlay="6"
//           >
//             <div className="container">
//               <div className="carousel-caption text-center">
//                 {/* <h1 className="banner-title">
//                   {banner.title.split("Makeustrip")[0]}
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
//                 </h1> */}
//                 <h1 className="text-5xl">{banner.title}</h1>
//                 <p className="fs-5 fw-light">{banner.description}</p>
//                 <p className="mt-5">
//                   <a className="btn btn-primary px-5" href="flight">
//                     {banner.buttonText}{" "}
//                     <i className="fa-solid fa-arrow-trend-up ms-2"></i>
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



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
// import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Swiper modules
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Herobanner = () => {
//   const banners = [
//     {
//       id: 1,
//       title: "Start Your Trip with Make Us Trip",
//       description:
//         "Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.",
//       buttonText: "Explore More",
//       background: "/flightbanner.png",
//     },
//     {
//       id: 2,
//       title: "Explore The World Around",
//       description:
//         "Find breathtaking adventures waiting for you around the globe. Your journey begins here!",
//       buttonText: "Discover Now",
//       background: "/assets/img/destination/tr-4.jpg",
      
//     },
//     {
//       id: 3,
//       title: "Wander. Explore. Experience.",
//       description:
//         "Escape the ordinary and explore breathtaking destinations around the world. Find the perfect getaway tailored just for you!",
//       buttonText: "Book Now",
//       background: "/tourbanner.png",
//     },
//     {
//       id: 4,
//       title: "Your Perfect Trip Starts Here!",
//       description:
//         "Find exclusive travel deals, flight bookings, and vacation packages to your dream destinations. Let’s make memories together!",
//       buttonText: "Discover More",
//       background: "/hotelbanner.png",
//     },
//     {
//       id: 5,
//       title: "Adventure is Calling!",
//       description:
//         "From tropical beaches to snowy peaks, explore destinations that inspire your soul. Where will your next journey take you?",
//       buttonText: "Find Your Escape",
//       background: "/cabbanner.png",
//     },
//   ];

//   return (
//     <Swiper
//       spaceBetween={0} // No gap between slides
//       slidesPerView={1} // Show 1 slide at a time
//       autoplay={{ delay: 8000, disableOnInteraction: false }} // Auto-slide every 6 seconds
//       loop={true} // Infinite loop
//       pagination={{ clickable: true }} // Enable pagination
//       navigation={true} // Enable navigation arrows
//       modules={[Autoplay, Navigation, Pagination]} // Include modules
//       className="mySwiper"
//     >
//       {banners.map((banner) => (
//         <SwiperSlide key={banner.id}>
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               minHeight: "595px",
//               backgroundImage: `url(${banner.background})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               color: "#fff",
//             }}
//           >
//             {/* Dark Overlay */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(0, 0, 0, 0.5)", // Dark overlay effect
//               }}
//             ></div>

//             {/* Content */}
//             <div
//               style={{
//                 position: "relative",
//                 padding: "20px",
//                 zIndex: 2, // Ensures text appears above overlay
//               }}
//             >
//               <h1
//                 className="text-5xl"
//                 style={{
//                   color: banner.id === 4 || banner.id === 5 ? "white" : "#fff",
//                 }}
//               >
//                 {banner.title}
//               </h1>
//               <p
//                 className="fs-5 fw-light"
//                 style={{
//                   color: banner.id === 4 || banner.id === 5 ? "orange" : "#fff",
//                 }}
//               >
//                 {banner.description}
//               </p>
//               <p className="mt-5">
//                 <a className="btn btn-primary px-5" href="flight">
//                   {banner.buttonText}{" "}
//                   <i className="fa-solid fa-arrow-trend-up ms-2"></i>
//                 </a>
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Herobanner;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay, Pagination } from "swiper/modules"; // Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";

const Herobanner = () => {
  const banners = [
    {
      id: 1,
      title: "Start Your Trip with Make Us Trip",
      description:
        "Take a little break from the work stress of everyday. Discover, plan trips, and explore beautiful destinations.",
      buttonText: "Explore More",
      background: "/flightbanner.webp",
    },
    // {
    //   id: 2,
    //   title: "Explore The World Around",
    //   description:
    //     "Find breathtaking adventures waiting for you around the globe. Your journey begins here!",
    //   buttonText: "Discover Now",
    //   background: "/assets/img/destination/tr-4.jpg",
    // },
    {
      id: 3,
      title: "Wander. Explore. Experience.",
      description:
        "Escape the ordinary and explore breathtaking destinations around the world. Find the perfect getaway tailored just for you!",
      buttonText: "Book Now",
      background: "/tourbanner.webp",
    },
    {
      id: 4,
      title: "Your Perfect Trip Starts Here!",
      description:
        "Find exclusive travel deals, flight bookings, and vacation packages to your dream destinations. Let’s make memories together!",
      buttonText: "Discover More",
      background: "/hotelbanner.webp",
    },
    {
      id: 5,
      title: "Adventure is Calling!",
      description:
        "From tropical beaches to snowy peaks, explore destinations that inspire your soul. Where will your next journey take you?",
      buttonText: "Find Your Escape",
      background: "/cabbanner.webp",
    },
  ];

  return (
    <Swiper
      spaceBetween={0} // No gap between slides
      slidesPerView={1} // Show 1 slide at a time
      autoplay={{ delay: 8000, disableOnInteraction: false }} // Auto-slide every 8 seconds
      loop={true} // Infinite loop
      pagination={{ clickable: true }} // Enable pagination
      modules={[Autoplay, Pagination]} // Only using Autoplay and Pagination
      className="mySwiper"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "595px",
              backgroundImage: `url(${banner.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>

            {/* Content */}
            <div
              style={{
                position: "relative",
                padding: "20px",
                zIndex: 2,
              }}
            >
              {/* <h1 className="text-5xl" style={{ color: "#fff" }}>
                {banner.title}
              </h1> */}
              <h1 className="text-5xl" style={{ color: "#fff", zIndex: 3 }}>
  {banner.title}
</h1>

              <p className="fs-5 fw-light" style={{ color: "#fff" }}>
                {banner.description}
              </p>
              <p className="mt-5">
                <a className="btn btn-primary px-5" href="flight">
                  {banner.buttonText} <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Herobanner;
