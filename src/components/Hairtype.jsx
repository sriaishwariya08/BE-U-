import React from 'react'
import "./Hairtype.css"
import straight from '../images/StraightHair_.png'
import wavy from '../images/WavyHair_.png'
import curly from '../images/CurlyHair_.png'

const Hairtype = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Choose Your Hair Type</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="rrow justify-content-center">
        <div className="card-col">
            <img className="x1" src={straight} alt="Straight Hair" />
        </div>
        <div className="card---col">
            <img className="x2" src={wavy} alt="Wavy Hair" />
        </div>
        <div className="card---col">
            <img className="x3" src={curly} alt="Curly Hair" />
        </div>
        </div>
    </section>
    </>
  )
}

export default Hairtype