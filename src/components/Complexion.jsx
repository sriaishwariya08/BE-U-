import React from 'react'
import "./Complexion.css"
import fair from "../images/FairC_.png"
import medium from '../images/MediumC_.png'
// import olive from '../images/OliveC_.png'
import deep from '../images/DeepC_.png'

const Complexion = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Choose Your Complexion</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="rooww justify-content-center">
        <div className="card-_col">
            <img className="j1" src={fair} alt="Fair" srcset="" />
        </div>
        <div className="card-_col">
            <img className="j2" src={medium} alt="Medium" srcset="" />
        </div>
        {/* <div className="card-_col">
            <img className="j3" src={olive} alt="Olive" srcset="" />
        </div> */}
        <div className="card-_col">
            <img className="j4" src={deep} alt="Deep" srcset="" />
        </div>
        <button className='btttn'>Get Recommendations</button>
        </div>
        {/* <a href=" " className="skans">Get Recommendations</a> */} 
    </section>
    </>
  )
}

export default Complexion