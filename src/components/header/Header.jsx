import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {

  // This code is just for the Hamburger Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='header'>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      {/* This section is also for the Hamburger Menu */}

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>

      {/* This code is for the Hamburger - 
      className={`header__ul ${isMenuOpen ? 'show' : ''}`} */}
      
      <ul className={`header__ul ${isMenuOpen ? 'show' : ''}`}>
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