import React, { useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./contact.css";
import { review } from "../../assets";
import { Slide } from "react-reveal";
import { AiFillPlayCircle } from "react-icons/ai";

const initialState = {
  description:'',
  budgetSize:'',
  name:'',
  email:'',
  howYouKnow:''
}
const Contact = () => {
  const [playing, setPlaying] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const onFormDataChange = (e) => {
    const value = e.target.value;
    setFormData({...formData, [e.target.name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      description:'',
      budgetSize:'',
      name:'',
      email:'',
      howYouKnow:''
    })
  }
  return (
    <div className="contact">
      <Slide bottom>
        <div className="contact__Header">
          <h2 className="contact__HeaderTitle">
            Talk to us and get your project moving!
          </h2>
        </div>
      </Slide>
      <div className="contact__box">
        <div className="contact__left">
          <p>This is exactly what will happen after you submit your form:</p>
          <div className="contact__video">
            {/* <video src='https://www.youtube.com/watch?v=ib43NVgp_x0'></video> */}
            <video loop ref={videoRef} src={review}></video>
            <AiFillPlayCircle
              className="contact__videoIcon"
              onClick={onVideoPress}
            />
          </div>
          <div className="contact__quickServices">
            <IoIosArrowForward className="contact__quickServiceIcon" />
            <p className="contact__quickService">
              We will respond to you within 24 hours.
            </p>
          </div>
          <div className="contact__quickServices">
            <IoIosArrowForward className="contact__quickServiceIcon" />
            <p className="contact__quickService">
              We’ll sign an NDA if requested.
            </p>
          </div>
          <div className="contact__quickServices">
            <IoIosArrowForward className="contact__quickServiceIcon" />
            <p className="contact__quickService">
              You'll be talking to product and tech experts.
            </p>
          </div>
        </div>
        <div className="contact__right">
          <form onSubmit={handleSubmit}>
            <textarea
            onChange={onFormDataChange}
              name="description"
              value={formData.description}
              placeholder="Project Description"
            ></textarea>
            <input type="text" name="budgetSize"
              value={formData.budgetSize} placeholder="Budget Size"  onChange={onFormDataChange}/>
            <input type="text" name="name"
              value={formData.name} placeholder="Name" onChange={onFormDataChange} />
            <input type="email" name="email"
              value={formData.email} placeholder="Email"  onChange={onFormDataChange}/>
            <input type="text" name="howYouKnow"
              value={formData.howYouKnow} placeholder="How did you hear about us?"  onChange={onFormDataChange}/>
            <button type="submit" className="contact__btn">
              BOOK A CALL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
