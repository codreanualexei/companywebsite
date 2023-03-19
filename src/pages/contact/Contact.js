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
    const value = e.target;
    setFormData({...formData, [e.target.name]:value})
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
          <form>
            <textarea
            onChange={onFormDataChange}
              name="description"
              value={formData.budgetSize}
              placeholder="Project Description"
            ></textarea>
            {/* <select name="budgetSize" onChange={onFormDataChange}>
              <option  selected>
                Budget Size
              </option>
              <option value={formData.budgetSize}> - 50k</option>
              <option value={formData.budgetSize}>50k {`>`} 150k</option>
              <option value={formData.budgetSize}>150k {`>`} 500k</option>
              <option value={formData.budgetSize}> + 500k</option>
            </select> */}
            <input type="text" name="budgetSize"
              value={formData.budgetSize} placeholder="Budget Size" />
            <input type="text" name="name"
              value={formData.name} placeholder="Name" />
            <input type="email" name="email"
              value={formData.email} placeholder="Email" />
            <input type="text" name="howYouKnow"
              value={formData.howYouKnow} placeholder="How did you hear about us?" />
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
