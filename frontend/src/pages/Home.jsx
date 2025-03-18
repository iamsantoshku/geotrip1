import React from 'react'
import Herobanner from '../component/home/Herobanner'
import Herosearch from '../component/home/Herosearch'
import Toursoffer from '../component/home/Toursoffer'
import Popularat from '../component/home/Popularat'
// import Location from '../component/home/Location'
import PopularVenues from '../component/home/Popularvanus'
import VideoHelp from '../component/home/Vidiohelp'
import Review from '../component/home/Review'
import Exprience from '../component/home/Exprience'
import Calltoaction from '../component/home/Calltoaction'
import Hoteldet from '../component/hotel/Hoteldet'

const Home = () => {
  return (
    <div>
        <Herobanner/>
        <Herosearch/>
        <Toursoffer/>
        <Popularat/>
        
        <Hoteldet/>
        {/* <Location/> */}
        {/* <PopularVenues/> */}
        {/* <VideoHelp/> */}
        <Review/>
        <Exprience/>
        <Calltoaction/>
      
    </div>
  )
}

export default Home
