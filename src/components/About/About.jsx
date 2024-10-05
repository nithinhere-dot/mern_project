import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'  onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Creating Tomorrow's Leaders Today</h2>
            <p>Welcome to Educity, where tradition meets innovation in the pursuit of knowledge, personal growth, and global impact. Founded on the principles of academic excellence, inclusivity, and integrity,
                Educity has been a beacon of learning and research for generations.
                 We pride ourselves on fostering a vibrant intellectual community that
                challenges conventional thinking and drives meaningful change in society</p>
        </div>
      
    </div>
  )
}

export default About
