import React from 'react'
import Footer from '../components/Footer'
import "../styles/homepage.css"
import Navbar from '../components/Navbar'
import SlideShow from '../components/SlideShow'

import banner1 from "../img/Banner Slide (State 1).png"
import banner2 from "../img/Banner Slide (State 2).png"
import banner3 from "../img/Banner Slide (State 3).png"
import banner4 from "../img/Banner Slide (State 4).png"
import Carousel from '../components/Carousel'

const banners = [banner1,banner2,banner3,banner4]



const Homepage = () => {
  return (
    <div id='homepage'>Homepage
        <Navbar/>
        {/* <SlideShow images={banners} interval={2000}/> */}
        <Carousel images={banners}/>
        <Footer/>
    </div>
  )
}

export default Homepage