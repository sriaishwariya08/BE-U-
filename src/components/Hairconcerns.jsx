import React from 'react'
import "./Hairconcerns.css"
import hairfall from '../images/HairFall_.png'
import dand from '../images/Dandruff_.png'
// import dryhair from '../images/Dryness__.png'
import split from '../images/SplitEnds_.png'

const Hairconcerns = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Mention Your Hair Concerns</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="rroow justify-content-center">
        <div className="card_-col">
            <img className="z1" src={hairfall} alt="HairFall" srcset="" />
        </div>
        <div className="card_-col">
            <img className='z2' src={dand} alt="Dandruff" srcset="" />
        </div>
        {/* <div className="card_-col">
            <img className="z3" src={dryhair} alt="Dry Hair" srcset="" />
        </div> */}
        <div className="card_-col">
            <img className='z4' src={split} alt="Split Ends" srcset="" />
        </div>
        </div>
    </section>
    </>
  )
}

export default Hairconcerns