import React from 'react'
import "./Skinconcerns.css"
import acne from '../images/AcneProne_.png'
import dryy from '../images/Dryness_.png'
import blem from '../images/Blemishes_.png'

const Skinconcerns = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Mention Your Skin Concerns</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="roow justify-content-center">
        <div className="card--col">
            <img className="d1" src={acne} alt="Acne-prone"  />
        </div>
        <div className="card--col">
            <img className="d2" src={dryy} alt="Dry skin" />
        </div>
        <div className="card--col">
            <img className="d3" src={blem} alt="Blemishes"  />
        </div>
        </div>
    </section>
    </>
  )
}

export default Skinconcerns