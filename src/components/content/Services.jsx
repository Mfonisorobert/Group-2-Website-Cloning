import React from 'react'
import './Services.css'
import icon1 from '../../assets/icon_1.png'
import icon2 from '../../assets/icon_2.png'
import icon3 from '../../assets/icon_3.png'
import icon4 from '../../assets/icon_4.png'
import icon5 from '../../assets/icon_5.png'
import icon6 from '../../assets/icon_6.png'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
const Services = () => {
  return (
    <div className='services'>
        <div className='services__info'>
           <div className='services__line'>
           <span>Services</span>
           </div> 
        <h1>What We Offer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore</p>
        </div>

    <div className="square__grid">
      <div className="square1">
      <img src={icon1} alt="icon"/>
      <h3>Well Success</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      <div className="square2">
      <img src={icon2} alt="icon"/>
      <h3>Creative Ideas</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      <div className="square3">
      <img src={icon3} alt="icon"/>
      <h3>Business Consulting</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      <div className="square4">
      <img src={icon4} alt="icon"/>
      <h3>Financial Solution</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      <div className="square5">
      <img src={icon5} alt="icon"/>
      <h3>Market Intro</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      <div className="square6">
      <img src={icon6} alt="icon"/>
      <h3>Smart Investment</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
      </div>
      </div>
    <button className="btn6">Explore More</button>
        
{/* This is the second section of the Services */}

    <div className='services2'>
    <div className='services2__info'>
           <div className='services__line'>
           <span>Services</span>
           </div> 
        <h1>Our Popular Case Studies</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore</p>
    </div>
    
    <div class="image__container">
  <div class="image-card">
    <img src={image1} alt="Image 1" />
    <h2>Startups</h2>
    <p>It is a long established fact that 
        a reader will be distracted by 
        the readable…</p>
        <button className="btn7">Explore</button>
  </div>
  <div class="image-card">
    <img src={image2} alt="Image 2" />
    <h3>Finance & Investing</h3>
    <p>It is a long established fact that 
        a reader will be distracted by 
        the readable…</p>
        <button className="btn8">Explore</button>
  </div>
  <div class="image-card">
    <img src={image3} alt="Image 3" />
    <h4>Growth Strategy</h4>
    <p>It is a long established fact that 
        a reader will be distracted by 
        the readable…</p>
        <button className="btn9">Explore</button>
  </div>
  
</div>
    </div>
    </div>
        
        
  )
}

export default Services