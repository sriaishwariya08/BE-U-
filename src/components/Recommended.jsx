import React from 'react'
import "./Recommended.css";
import RecPro1 from "../images/sunscreen.jpg"
import RecPro2 from "../images/Facewash.jpg"
import RecPro3 from "../images/Cond.jpg"
// import RecPro4 from "../images/Compact.jpg"
const Recomended = () => {
  return (
    <>
    <h1 className= "mainnnn text-center mt-3">Recomended Products</h1>
    <hr
        style={{
            height: 5  
        } }   
        // style = {{
        //     color: #fff;
        // }}
    />
    {/* <section className="py-4 container"> */}
    <div className='mainnn'>
        <div className="row justify-content-center">
        <div className="card-coll">
            <img className="Rp1" src={RecPro1} alt="img" />
            <h3>BE-U Ulta Sheer SPF50 Sunscreen</h3>
            <p>Recommended for Normal Skin Type</p>
            <a href=" " className="btn btn-primary">Add to Cart</a>
        </div>
        <div className="card-coll">
            <img className="Rp2" src={RecPro2} alt="img" />
            <h3>BE-U Unisex Teatree Facewash</h3>
            <p>Recommended for Normal Skin Type</p>
            <a href=" " className="btn btn-primary">Add to Cart</a>
        </div>
        <div className="card-coll">
            <img className="Rp3" src={RecPro3} alt="img" />
            <h3>Hair Conditioner and Serum</h3>
            <p>Recommended for Dandruff Hair</p>
            <a href=" " className="btn btn-primary">Add to Cart</a>
        </div>
        {/* <div className="card-col">
            <img className="Rp4" src={RecPro4} alt="img"/>
            <h3>Natural Almond Compact</h3>
            <p>Recommend for Warm Skin Tones</p>
            <a href=" " className="btn btn-primary">Add to Cart</a>
        </div> */}
        </div>
        </div>
    {/* </section> */}
    </>
  )
}

export default Recomended