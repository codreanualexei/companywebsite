import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { hero, review, reviewLogo } from "../../assets";
import { FaQuoteLeft } from "react-icons/fa";
import { Slide, Zoom, Reveal } from "react-reveal";
import "./home.css";
import { awards, clients, serviceOptions, team } from "../../staticData/staticData";
import { ServiceOptionCard } from "../../cards";
import { AiFillPlayCircle } from "react-icons/ai";
import { Contact, News, OpenSource } from "../../components";

const Home = () => {
  const [playing, setPlaying] = useState(false);
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
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__heroVideo">
          <video src={hero} autoPlay muted loop></video>
        </div>
        <div className="home__header">
          <Slide bottom>
            <h1>
              Custom Product & <br /> Software Development <br /> Focused On
              Your Success
            </h1>
          </Slide>
          <Slide bottom>
            <button className="home__headerButton">
              <Link to="/start-a-project">BOOK A CALL</Link>
            </button>
          </Slide>
        </div>
      </div>
      <div className="home__services">
        <Slide bottom>
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">Services</h2>
            <p className="home__servicesHeaderText">
              We can help you bring your product to life -  whether it's a
              Minimum Viable Product, UX/UI  Services or help to scale
              your company.
            </p>
          </div>
        </Slide>
        <Slide bottom>
          <div className="home__serviceOptions">
            {serviceOptions?.map(({ icon, title, text }, index) => (
              <ServiceOptionCard
                key={index}
                title={title}
                icon={icon}
                text={text}
              />
            ))}
          </div>
        </Slide>
      </div>
      <div className="home__review">
        <div className="home__reviewVideo">
          {/* <video src='https://www.youtube.com/watch?v=ib43NVgp_x0'></video> */}
          <video loop ref={videoRef} src={review}></video>
          <AiFillPlayCircle
            className="home__reviewVideoIcon"
            onClick={onVideoPress}
          />
          {/* <span className='home__reviewVideoIcon'><AiFillPlayCircle /></span> */}
        </div>
        <Slide bottom>
          <div className="home__reviewMessage">
            <FaQuoteLeft color="#0044FF" className="home__reviewQuote" />
            <p className="home__reviewText">
              We are very happy to work with Altar.io. The collaboration goes
              far beyond a standard IT service: with Altar.io we have a sparring
              partner that challenges us in our product decisions and is truly
              passionate about the results developed. The level of
              professionalism and dedication is exceptional in this industry and
              we are eager to strengthen our collaboration in the future.
            </p>
            <span className="home__reviewer">
              Philip Schoch - Apiax, Co-Founder
            </span>
            <Reveal effect="fadeInUp">
              <img src={reviewLogo} alt="" className="home__reviewClient" />
            </Reveal>
          </div>
        </Slide>
      </div>
      <div className="home__cases">
        <div className="home__casesHeader">
          <Reveal effect="fadeInUp">
            <h2 className="home__casesTitle">Case Studies</h2>
          </Reveal>
          <Slide bottom>
            <h3 className="home__casesText">
              We are proud to work with truly innovative clients. Here are just
              a few of the companies
               we’ve had the privilege to work with.
            </h3>
          </Slide>
        </div>
        <div className="home__casesBody">
            {/* <ImageComponent /> */}
            <img src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="home__caseStudyImg" />
          <div className="home__casesBodyRight">
            <h6 className="home__caseTitle">
              <strong>FINTECH</strong>
            </h6>
            <h3 className="home__caseSubTitle">
              <strong>REIC</strong>
            </h3>
            <p className="home__casesBodyRightText">
              REIC (Real Estate Intelligence Cloud), developed in collaboration
              with AlixPartners, aims to assess the fair forward-looking value
              of real estate developments and the fair credit value of real
              estate developers – and to suggest underwriting overrides when
              lending to these counterparts.
            </p>
            <button className="home__casesBodyRightBtn">
              <Link to="/case-study">SEE CASES STUDY</Link>
            </button>
          </div>
        </div>
        <div className="home__casesBody">
        <div className="home__casesBodyRight">
          <h6 className="home__caseTitle">
            <strong>MUSICTECH</strong>
          </h6>
          <h3 className="home__caseSubTitle">
            <strong>Audio Test Kitchen</strong>
          </h3>
          <p className="home__casesBodyRightText">
            ATK is the world’s first platform to compare professional audio gear
            in a fully immersive, interactive and unbiased way. With Audio Test
            Kitchen, audio engineers and record producers can skip the hype and
            directly compare the sound of different audio gear.
          </p>
          <button className="home__casesBodyRightBtn">
            <Link to="/case-study">SEE CASES STUDY</Link>
          </button>
        </div>
          {/* <ImageComponent /> */}
          <img src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="home__caseStudyImg" />
      </div>
      </div>
      
      <div className="home__team">
        {team?.map(({ image, title, text, link }, index) => (
          <div className="home__teamMember" key={index}>
            <img src={image} alt="" className="home__teamMemberImg" />
            <div className="home__teamMemberDetails">
              <h5 className="home__teamMemberTitle">{title}</h5>
              <p className="home__teamMemberText">{text}</p>
              <button className="home__teamMemberBtn">
                <Link to="/case-study">{link}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="home__services">
        <Slide bottom>
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">Awards</h2>
            <p className="home__servicesHeaderText">
              We are voted a Top Firm by Entrepreneurs and Business Leaders just
              like you.
            </p>
          </div>
        </Slide>
        <div className="home__awards">
          {awards?.map((award, index) => (
            <Zoom bottom>
              <img
                src={award}
                alt={award}
                className="home__award"
                key={index}
              />
            </Zoom>
          ))}
        </div>
      </div>
     <OpenSource/>
      <div className="home__services">
        <Slide bottom>
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">Clients</h2>
            <p className="home__servicesHeaderText">
            Great Companies make us grow every day.
            </p>
          </div>
        </Slide>
        <div className="home__awards">
          {clients?.map((client, index) => (
            <Zoom bottom key={index}>
              <img
                src={client}
                alt={client}
                className="home__award"
                
              />
            </Zoom>
          ))}
        </div>
      </div>
      <News/>
      <Contact/>
    </div>
  );
};

export default Home;
