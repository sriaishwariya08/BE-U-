import React from 'react'
import "./RewardsOffer.css"

const Rewards = () => {
  return (
    <>
    {/* <section id='sm-banner' className='section-p1'> */}
    <div className='banner'>
        <div className='banner-box'>
            <h4>Refer A Friend</h4>
            <h2>20% Offer</h2>
            <span> On Your Next Order</span>
            <button className='white'>Redeem Now</button>
        </div>
        <div className='banner-box banner-box2'>
            <h4>Get Complementary Products</h4>
            <h2>For Your Points</h2>
            <span>Below</span>
            <button className='white'>Redeem Now</button>
        </div>
    {/* </section> */}
    </div>

    {/* <section id='banner3'> */}
    <div className='banner3'>
        <div className='banner-box'>
            <h2>USER SPECIFIC CODE</h2>
            <h3>For You</h3>
        </div>
        <div className='banner-box banner-box2'>
            <h2>PAY LATER</h2>
            <h3>Buy Now</h3>
        </div>
        <div className='banner-box banner-box3'>
            <h2>GIFT CARDS</h2>
            <h3>For Your Loved Ones</h3>
        </div>
    {/* </section> */}
    </div>

    <section id='newsletter' className='section-p1 section-m1'>
    {/* <div className='newsletter'> */}
        <div className='newstext'>
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className='form'>
            <input type="text" placeholder='Your email address'/>
            <button className='normal'>Subscribe</button>
        </div>
    {/* </div> */}
    </section>
    </>
  )
}

export default Rewards