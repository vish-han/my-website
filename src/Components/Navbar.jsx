import React from 'react'
import Dark from '../assets/dark.png'
import './Navbar.css'
import name from '../assets/Vishal.png'
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="name"><img src={name} alt="" /></div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li><img src={Dark} width="50px" height="50px"/></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar