import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__container__grid'>
      <div class="footer__header">
    <h3>About Us</h3>
    <p>It is a long established fact that a reader will be distracted by the readable…</p>
  
    <div className="footer__icon">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        
      </div>
  </div>

  <div class="footer__header">
    <h3>Useful Links</h3>
    <ul>
      <li><a href="https://wp-themes.com/blockpress/" target="_blank">Web Design</a></li>
      <li><a href="https://wp-themes.com/blockpress/" target="_blank">Development</a></li>
      <li><a href="https://wp-themes.com/blockpress/" target="_blank">Copywriting</a></li>
      <li><a href="https://wp-themes.com/blockpress/" target="_blank">Marketing</a></li>
      <li><a href="https://wp-themes.com/blockpress/" target="_blank">Press Releases</a></li>
    </ul>
  </div>
  <div class="footer__header">
    <h3>Terms</h3>
    <ul>
      <li><a href="#Privacy Policy">Privacy Policy</a></li>
      <li><a href="#Terms and Conditions">Terms and Conditions</a></li>
      <li><a href="#Disclaimer">Disclaimer</a></li>
      <li><a href="#Support">Support</a></li>
      <li><a href="#FAQ">FAQ</a></li>
    </ul>
  </div>
  <div class="footer__header">
    <h3>Contact Us</h3>
    <p>Email: contact@company.com</p>
    <p>Phone: +123 456 7890</p>
    <p>457 Morningview Lane, NY</p>
  </div>
  <div class="footer__header">
    <h3>Opening Time</h3>
    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
    <p>Sat - Sun: Closed</p>
    <p>Mon – Fri : 08.00 – 20.00
    Saturday : 09.00 – 18.00
    Sunday : We are Closed</p>
  </div>
      </div>
      <div className='copyright'>
        <p>&copy; Copyright 2024 Mfoniso Robert</p>
      </div>
      </div>
      
  )
  
}

export default Footer