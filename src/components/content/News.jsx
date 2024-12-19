import React from 'react'
import image10 from '../../assets/image10.jpeg'
import image11 from '../../assets/image11.jpeg'
import image12 from '../../assets/image12.jpeg'
import './News.css'

const News = () => {
  return (
    <div className='news__container'>
        <div className='news__info'>
            <div className='news__line'>
            <span>Blog For</span>
           </div> 
        </div>
        <div className='news__btn'>
            <h2>More Inspiration</h2>
            <button className="btn13">View More</button>
        </div>

    
    <div class="grid__container">
    <div class="image__card">
    <img src={image10} alt="Image 1" />
    <div class="image_caption">
    <h1>Professionals Team Management Ideas</h1>
      <p><i className="far fa-clock clock_style"></i>December 19, 2024</p>
      <h3>
      Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam porta sem eu tellus porta, ac […]
      </h3>
      <h2>Know More <i class="fas fa-angle-right styled_icon"></i></h2>  
      
    </div>
  </div>
   <div class="image__card">
    <img src={image11} alt="Image 2" />
    <div class="image_caption">
    <h1>How Professionals Manages Their Work</h1>
      <p><i className="far fa-clock clock_style"></i>December 19, 2024</p>
      <h3>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam porta sem eu tellus porta, ac […]
        </h3>
        <h2>Know More <i class="fas fa-angle-right styled_icon"></i></h2>

    </div>
  </div>
  <div class="image__card">
    <img src={image12} alt="Image 3" />
    <div class="image_caption">
    <h1>Great opportunity to transform your</h1>
      <p><i className="far fa-clock clock_style"></i>December 19, 2024</p>
      <h3>
      Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Nullam porta sem eu tellus porta, ac […]
      </h3>
      <h2>Know More <i class="fas fa-angle-right styled_icon"></i></h2>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default News