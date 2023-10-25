import React from 'react'
import './Nav.css'
import {GiShoppingCart} from "react-icons/gi";
const Nav = ({size, setShow }) => {
  return (
    <nav>
    <div className='nav_box'>
        <span className='my_shop' onClick={()=>setShow(true)}>
          My Shopping
        </span>
        <div className='cartt' onClick={()=>setShow(false)}>
            <div className='iconn'>
                <GiShoppingCart size={20} style={{ color: "#fff"}} />
                <span>{size}</span>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Nav
