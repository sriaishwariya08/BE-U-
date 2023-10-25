import "./ProfileHero.css";
import React from 'react'
// import IntroImg from "../images/Homee.jpg"
import video from '../Assets/profile.mp4';
// import { Link } from "react-router-dom"
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask"></div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="content">
                <h2>
                    BE BOLD . BE DARING . BE-U
                </h2>
            </div>
        </div>
    )
}

export default HeroImg;