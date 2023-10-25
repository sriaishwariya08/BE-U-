import "./Navbarr.css"
import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
// import { TfiShoppingCart} from "react-icons/tfi";

const Navbar = () => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   const [color, setColor] = useState(false);
   const changeColor = () => {
      if (window.scrollY >= 100) {
         setColor(true);
      } else {
         setColor(false);
      }
   };

   window.addEventListener("scroll", changeColor);

   return (
      <div className={color ? "header header-bg" : "header"}>
         <Link to="/">
          <h1>BE-U</h1>
          {/* <i className="aa"><TfiShoppingCart/></i> */}
         </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
               <Link to="/">HOME</Link>
            </li>
            <li>
               <Link to="/Products">PRODUCTS</Link>
            </li>
            <li>
               <Link to="/Recommends">RECOMMENDS</Link>
            </li>
            <li>
               <Link to="/Offers">OFFERS</Link>
            </li>
            <li>
               <Link to="/Profile">PROFILE</Link>
            </li>
            <div>
                <Link to="/Login" className="btnn"> Login </Link>
            </div>
         </ul>
         <div className="hamburger" onClick={handleClick}>
            {click ? (
               <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
               <FaBars size={20} style={{ color: "#fff" }} />
            )}
         </div>
      </div>
   )
}
export default Navbar;