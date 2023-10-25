import React from 'react'
import "./Skintype.css"
import combination from '../images/CombinationSkin_.png'
import normal from '../images/NormalSkin_.png'
// import dry from '../images/DrySkin_.png'
import sensitive from '../images/SensitiveSkin_.png'

const Skintype = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Choose Your Skin Type</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="rowww justify-content-center">
        <div className="card_col">
            <img className="s1" src={normal} alt="Normal" />
        </div>
        <div className="card_col">
            <img className="s2" src={sensitive} alt="Sensitive" />
        </div>
        {/* <div className="card_col">
            <img className="s3" src={dry} alt="Dry" />
        </div> */}
        <div className="card_col">
            <img className="s4" src={combination} alt="Combination"/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Skintype