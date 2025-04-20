import React from 'react'
import './navbar.css'
import img from '../../assets/spotify.svg'
const Navbar = () => {
  return (
    <>
      <nav>
        <img src={img} alt="" />
        <button>Home</button>
        <input type="text" />
        <button>Premium</button>
        <button>Support</button>
        <button>Download</button>
        <p> | </p>
        <button>Install App</button>
        <button>sign up</button>
        <button className='login'>Login</button>

      </nav>
    </>
  )
}

export default Navbar
