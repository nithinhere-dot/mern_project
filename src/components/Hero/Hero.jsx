import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div class="hero container">
      <div className="hero-text">
      <h1>We Ensure Your Future</h1>
      <p>Learn how to make a complete website using React JS. Build college / university website in React JS step by step tutorial.</p>
      <button class="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
