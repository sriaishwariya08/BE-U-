import React from 'react'
import './Cards.css'

const Cards = ({item, handleClick}) => {
    const {title , description ,price, img } = item;
  return (
    <div className='sectionn'>
     <div className='cardss'>
        <div className='image_box'>
            <img src={img} alt="" />
        </div>
        <div className='details'>
            <p>{ title }</p>
            <p>{description}</p>
            <p>Price-{price} Rs </p>
            <button onClick={()=>handleClick(item)}>Add To Cart</button>
        </div>
     </div>
    </div>
  )
}

export default Cards
