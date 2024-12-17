import React from 'react'
import './Topheader.css'

const Topheader = () => {
  return (
    <div className='top__header'>
          {/* Left Section: Contact Info */}
      <div className="navbar-left">
        <div className="contact-item">
          <i className="fas fa-phone"></i> +123 456 7890
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> support@example.com
        </div>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="navbar-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      </div>
  )
}

export default Topheader