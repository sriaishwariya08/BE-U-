import React from 'react'
import list from '../data';
import './Amazon.css'
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
      {
        list.map((item) =>
        <Cards item={item} handleClick={handleClick}/>
      )}
    </section>
  )
}

export default Amazon
