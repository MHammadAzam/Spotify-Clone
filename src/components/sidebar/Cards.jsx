import React from 'react'
import './sidebar.css'

const Cards = (props) => {
  return (
    <div className='sidebarMiddleCards'>
      <h1>{props.heading}</h1>
      <p>{props.subHeading}</p> 
      <button>{props.buttonText}</button>
    </div>
  )
}

export default Cards
