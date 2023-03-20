import React from "react";
import "./about.css";
// import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { hero2,team } from "../../assets";
import { aboutUsGoals } from "../../staticData/staticData";

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__heroVideo">
          {/* <video src={hero2} autoPlay muted loop></video> */}
          {/* <img src={team} alt="" className="about__heroVideo"/> */}
        </div>
        <Slide bottom>
          <div className="about__header">
            <h1 className="about__headerText">
              <FaQuoteLeft
                color="#25940ee1"
                className="about__reviewQuoteLeft"
              />
              Programs must be written for people to read, and only incidentally{" "}
              <br /> for machines to execute
              <FaQuoteRight
                color="#25940ee1"
                className="about__reviewQuoteRight"
              />
            </h1>
          </div>
        </Slide>
      </div>
      <div className="about__us">
        <div className="about__usWhoWeAre">
          <h3 className="about__usTitle">Who Are We</h3>
          <p className="about__usText">
            We are an international team of developers and engineers who offer a
            global perspective an capabilities to each client.
            <br />
            <br />
            After many years of successful freelancing in mobile technology hundreds of satisfied clients,we decided to join together our specialties of knowledge and experience.From this, we created our international IT company, and are now servicing customers across the globe 
          </p>
        </div>
        <div className="about__usGoalBox">
          <h3 className="about__usTitle">How We Are Different From Our competitors</h3>
         <div className="about__usGoals">
         {aboutUsGoals?.map(({ icon, text }, index) => (
            <Slide bottom key={index}>
              <div className="about__usGoal">
                <span className="about__usGoalIcon">{icon}</span>
                <p className="about__usGoalText">{text}</p>
              </div>
            </Slide>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
