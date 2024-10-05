import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;

const slideForward =()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward =()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`    
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Educity has been an incredible experience! The faculty is top-notch, and the campus atmosphere
                         is both welcoming and inspiring. I've grown so much academically and personally, and I’m confident I’m well-prepared for my future career. Highly recommend it to
                         anyone looking for a university that truly cares about its students!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Arjun Patel</h3>
                            <span>Edusity,INDIA</span>
                        </div>
                    </div>
                    <p>Choosing Educity was one of the best decisions I’ve ever made. The faculty here goes above and beyond to ensure we understand the material
                         and succeed in our careers. The campus is diverse and welcoming,
                         making it easy to feel at home. I’m proud to be a part of this amazing university.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Johnson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Educity has been an incredible place to study. The courses are challenging, but the professors are always there to support us. The campus life is vibrant, and there are so many activities to get involved in.
                         I’ve made lifelong friends and gained invaluable knowledge here!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Michael Thompson</h3>
                            <span>Edusity,Australia</span>
                        </div>
                    </div>
                    <p>Educity offers a world-class education with a supportive community.
                         The professors are passionate about what they teach, and the facilities are top-notch. I’ve enjoyed every moment here, from the classroom to the extracurricular activities.
                         Highly recommend Educity to anyone looking for a comprehensive university experience!</p>
                </div>
            </li>            
        </ul>
      </div>
      
    
    </div>
  )
}

export default Testimonials
