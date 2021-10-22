import React from 'react'
import "../style/home.css";
// Banner
import banner from "../assets/images/banimg.png";
import "../style/Banner.css"
// brand logo
import { Image } from 'react-bootstrap';
import dc from "../assets/images/brand_logo/dc-logo.png"





const Home = () => {
    return (
        <div className="home">
            {/* Banner */}
            <img src={banner} alt="Banner-img" />
            {/* Brand-Logo */}
            <div  className="brand__logo" >
            
                <Image style={{"padding":"20%"}}src={dc} fluid />
                <Image style={{"padding":"20%"}}src={dc} fluid />
                <Image style={{"padding":"20%"}}src={dc} fluid />
                <Image style={{"padding":"20%"}}src={dc} fluid />
                <Image style={{"padding":"20%"}}src={dc} fluid />
         
            
            </div>
            {/* Feat. Profucts */}

        </div>
    )
}

export default Home
