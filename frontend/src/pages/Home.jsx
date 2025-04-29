// import React from 'react'
// import Herobanner from '../component/home/Herobanner'
// import Herosearch from '../component/home/Herosearch'
// import Toursoffer from '../component/home/Toursoffer'
// import Popularat from '../component/home/Popularat'

// import VideoHelp from '../component/home/Vidiohelp'
// import Review from '../component/home/Review'
// import Exprience from '../component/home/Exprience'
// import Calltoaction from '../component/home/Calltoaction'
// import Hoteldet from '../component/hotel/Hoteldet'
// import Hoteldethome from '../component/home/Hoteldethome'

// const Home = () => {
//   return (
//     <div>
//         <Herobanner/>
//         <Herosearch/>
//         <Toursoffer/>
//         <Popularat/>
        
//         {/* <Hoteldet/> */}
//         <Hoteldethome/>
//         {/* <Location/> */}
        
//         {/* <VideoHelp/> */}
//         <Review/>
//         <Exprience/>
//         <Calltoaction/>
      
//     </div>
//   )
// }

// export default Home





import React, { Suspense, lazy } from 'react'

// Lazy loading components
const Herobanner = lazy(() => import('../component/home/Herobanner'))
const Herosearch = lazy(() => import('../component/home/Herosearch'))
const Toursoffer = lazy(() => import('../component/home/Toursoffer'))
const Popularat = lazy(() => import('../component/home/Popularat'))
const Hoteldethome = lazy(() => import('../component/home/Hoteldethome'))
const Review = lazy(() => import('../component/home/Review'))
const Exprience = lazy(() => import('../component/home/Exprience'))
const Calltoaction = lazy(() => import('../component/home/Calltoaction'))
// const VideoHelp = lazy(() => import('../component/home/Vidiohelp'))
// const Hoteldet = lazy(() => import('../component/hotel/Hoteldet'))

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Herobanner />
        <Herosearch />
        <Toursoffer />
        <Popularat />
        
        {/* <Hoteldet/> */}
        <Hoteldethome />
        {/* <Location/> */}
        
        {/* <VideoHelp/> */}
        <Review />
        <Exprience />
        <Calltoaction />
      </Suspense>
    </div>
  )
}

export default Home
