import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div className='header'>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
      <ul className='header__ul'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>Contact Us</li>
        <a href="#"><button className='srch'>Get Started</button></a>
      </ul>
      </div>
  )
}

export default Header