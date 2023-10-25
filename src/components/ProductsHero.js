import "./ProductsHero.css";
import React from 'react'
// import IntroImg from "../images/Homee.jpg"
import video from '../Assets/video.mp4';
// import { Link } from "react-router-dom"
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask"></div>
                {/* <img className="intro-img" src={IntroImg} alt="IntroImg" /> */}
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="content">
                <h2>
                    BE BOLD . BE DARING . BE-U
                </h2>
                {/* <div>
                    <Link to="/Products" className="btn"> PRODUCTS </Link>
                </div>
                <div>
                    <Link to="/Offers" className="btn btn-light"> OFFERS </Link>
                </div> */}
            </div>
        </div>
    )
}

export default HeroImg;