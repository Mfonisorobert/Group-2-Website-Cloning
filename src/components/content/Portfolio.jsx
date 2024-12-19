import React from 'react'
import Portimage1 from '../../assets/Portimage1.jpg'
import Portimage2 from '../../assets/Portimage2.jpg'
import Portimage3 from '../../assets/Portimage3.jpg'
import Portimage4 from '../../assets/Portimage4.jpg'
import Portimage5 from '../../assets/Portimage5.jpg'
import Portimage6 from '../../assets/Portimage6.jpg'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio__container'>
        <div className='portfolio__info'>
        <div className='portfolio__line'>
        <span>Recent Work</span>
           </div> 
        </div>
        <div className='portfolio__btn'>
            <h2>Porfolio</h2>
            <button className="btn10">View More</button>
        </div>
        
        

        <div class="imagegrid__container">
    <div class="imagecard">
    <img src={Portimage1} alt="Image 1" />
    <div class="caption">
      <p>Agency</p>
      <span></span>
      <h1>Finance and Investing</h1>
      
    </div>
  </div>
   <div class="imagecard">
    <img src={Portimage2} alt="Image 2" />
    <div class="caption">
      <p>Cooperate</p>
      <span></span>
      <h1>Advance Analysis</h1>
    </div>
  </div>
  <div class="imagecard">
    <img src={Portimage3} alt="Image 3" />
    <div class="caption">
      <p>Business</p>
      <span></span>
      <h1>Marketing for Branding</h1>
    </div>
  </div>
  <div class="imagecard">
    <img src={Portimage4} alt="Image 4" />
    <div class="caption">
      <p>Cooperate</p>
      <span></span>
      <h1>Strategy and Operation</h1>
    </div>
  </div>
  <div class="imagecard">
    <img src={Portimage5} alt="Image 5" />
    <div class="caption">
      <p>Business</p>
      <span></span>
      <h1>Plan and Business</h1>
    </div>
  </div>
  <div class="imagecard">
    <img src={Portimage6} alt="Image 6" />
    <div class="caption">
      <p>Agency</p>
      <span></span>
      <h1>Low risk and High result</h1>
    </div>
  </div>
</div>
<div className='portfoliobanner__container'>
 <div className='portfolio__banner'> 
 <h5>We Are Creative</h5>
<h1>Consulting Services Worldwide</h1>
<p>Our Professional Services is based upon more than 20 years of experience zin
providing clients with management consulting assistance and…</p>
 
<div className="button_container">
      <button className="btn11">Get Started</button>
      <button className="btn12 btn-secondary">Learn More</button>
    </div>

 </div>
  
 

</div>
  
</div>
        
  )
}

export default Portfolio