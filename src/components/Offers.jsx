import React from 'react'
import "./Offers.css"
import IntroImg from "../images/BannerImg.png"


const Offers = () => {
  return (
    <>
    <div className='heroo'>
        <div className='masksk'>
            <img className='intro-img' src={IntroImg} alt="Banner" /> 
               <div className='contentt'>
                  <h4>Refer a Friend</h4>
                  <h2><span>20% Offer</span> On Your Next Order</h2>
                  <a href='/Offers'><button className='normal'>Know More</button></a>
               </div>
         </div>
     </div>
    </>
  )
}

export default Offers