import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7346768d-d24d-4667-a537-89f6a91343c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We’d love to hear from you! Whether you have questions, need assistance,
             or want to learn more about Educity, our team is here to help. Reach 
             out to us via phone, email, or by visiting our campus.
             Let’s connect and make your experience with Educity even better!</p>
             <ul>
                <li><img src={mail_icon} alt="" />nithinkumar07062005@gmail.com</li>
                <li><img src={phone_icon} alt="" />7902753542</li>
                <li><img src={location_icon} alt="" />Adrdess</li>
             </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label >Phonenumber</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write Your messages here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
