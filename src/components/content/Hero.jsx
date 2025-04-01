import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__colour'>
      <div className='hero__text'>
      <h3>Business Strategy and Planning</h3>
      <h1>Better Way to Achieve Success</h1>
      <h4 className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur officia nemo ducimus voluptas.</h4>
      <div className="button__container">
      <button className="btn1">Services</button>
        {/* <button className='text-xs text-blue-200 bg-red-500 rounded-lg hover:bg-white hover:text-orange-700 transition-all ease-in-out 500 text-color' >Services</button> */}
      <button className="btn2 btn-secondary">About Us</button>
    </div>
      </div>
      <div className='hero__support'>
        <h1>24/7 Customer Support Services</h1>
        <button className="btn3">Contact Us</button>
      </div>
      </div>
      
      
      
      </div>
  )
}

export default Hero