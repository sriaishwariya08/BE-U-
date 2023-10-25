import React from 'react'
import "./Undertone.css"
import cool from '../images/CoolUT.png'
import warm from '../images/WarmUT.png'
import neutral from '../images/NeutralUT.png'

const Undertone = () => {
  return (
    <>
    <h1 className= "main text-center mt-3">Choose Your Undertone</h1>
    <hr
        style={{
            height: 5
        }}
    />
    <section className="py-4 container">
        <div className="roww justify-content-center">
        <div className="card-col">
           <img className="t1" src={cool} alt="ColdUT" />
        </div>
        <div className="card-col">
            <img className="t2" src={warm} alt="WarmUT" srcset="" />
        </div>
        <div className="card-col">
            <img className="t3" src={neutral} alt="NeutralUT" srcset="" />
        </div>
        </div>
    </section>
    </>
  )
}

export default Undertone