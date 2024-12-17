import React from 'react'
import Aboutpic from '../../assets/Aboutpic.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about__container'>
    <img src={Aboutpic} width={850} height={420} alt="image" className="rounded__image"/>
      <div className='about__text'>
      <div className="line">
      <h3>About Us</h3>
      </div>
   
<h1>Know More About Us</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Aenean ac lorem pretium, laoreet enim at, 
malesuada elit. Class aptent taciti sociosqu. 
Duis congue turpis risus, ac dapibus mi malesuada ut. 
Duis feugiat nisi orci.Lorem ipsum dolor sit amet, 
consectetur adipiscing elit.
<p><br/>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Aenean ac lorem pretium, laoreet enim at, 
malesuada elit.</p></p>
<button className="btn4">Explore Us</button>
      </div>
      </div>
      
  )
}

export default About