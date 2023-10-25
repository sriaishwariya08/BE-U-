import './FeaturedPro.css';
import pro1 from "../images/lipstickk.jpg";
import pro2 from "../images/Mascara.jpg";
import pro3 from "../images/Moisturizing.jpg";
// import pro4 from "../images/sunscreen.jpg";
import pro4 from "../images/sh.jpg";
import React from 'react'
// height: 624 px width: 543 px
const FeaturedPro = () => {
  return (
    <div>
      {/* <section id="product1" className='section-p1'> */}
      <div className='product1'>
         <h2> Featured Products </h2>
         <p> New Collections & New Modern Design !</p>
         <div className='product-container'>
              <div className='products'>
                  <img className="p1" src={pro1} alt="IntroImg" />
                  <div className='descript'>
                    <h5> Matte Lipstick</h5>
                    <div class="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4> Rs.200 </h4>
                  </div>
                  <a href=" "> <i class="fa fa-shopping-cart cart" aria-hidden="true"> </i></a>
              </div>
              <div className='products'>
                  <img className="p1" src={pro2} alt="IntroImg" />
                  <div className='descript'>
                    <h5> No Smudge Mascara</h5>
                    <div class="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4> Rs.300 </h4>
                  </div>
                  <a href=" "> <i class="fa fa-shopping-cart cart" aria-hidden="true"> </i></a>
              </div>
              <div className='products'>
                  <img className="p1" src={pro3} alt="IntroImg" />
                  <div className='descript'>
                    <h5> Face Moisturizer </h5>
                    <div class="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4> Rs.150 </h4>
                  </div>
                  <a href=" "> <i class="fa fa-shopping-cart cart" aria-hidden="true"> </i></a>
              </div>
              <div className='products'>
                  <img className="p1" src={pro4} alt="IntroImg" />
                  <div className='descript'>
                    <h5> Charcoal Shampoo </h5>
                    <div class="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <h4> Rs.350 </h4>
                  </div>
                  <a href=" "> <i class="fa fa-shopping-cart cart" aria-hidden="true"> </i></a>
              </div>
         </div>
      </div>
      {/* </section> */}
    </div>
  )
}

export default FeaturedPro
