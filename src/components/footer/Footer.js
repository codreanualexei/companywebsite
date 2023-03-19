import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import { lisbon, logoNew, london, milan } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__levelOne">
        <div className="footer__levelOneLeft">
        <Link to="/">
          <img src={logoNew} alt="" className="footer__logo" />
          </Link>
        {/* <Link to="/">
          <img src={footerLogo} alt="" className="footer__logo" />
          </Link> */}
          <h3 className="footer__levelOneLeftText">
            Want to talk about your project?
          </h3>
          <button className="footer__levelOneLeftBtn">
            <Link to="/call">Lets Schedule a Call</Link>
          </button>
          <div className="footer__levelOneLeftRating"></div>
        </div>
        <div className="footer__levelOneRight">
          <div className="footer__levelOneRightCities">
            <img src={lisbon} alt={lisbon} className="" width='203px' height='108px'/>
            <div className="footer__divider"></div>
            <div className="footer__levelOneRightLocation">
              <h4>
                <strong>LISBON</strong>
              </h4>
              <p>
                <span>
                  <strong>
                    Address:
                  </strong>
                  Rua Adriano Correia de <br />  Oliveira 4A, 1600-312
                  <br />
                  <strong>
                    Phone: <a href="tel: +351 963630105">+351 963630105</a>
                  </strong>
                  <br />
                </span>
                <span>
                  <strong>
                    Email: <a href="mailto: lisbon@altar.io">lisbon@altar.io</a>
                  </strong>
                </span>
              </p>
            </div>
          </div>
          <div className="footer__levelOneRightCities">
            <img src={london} alt={london} className="footer__levelOneRightImg" />
            <div className="footer__divider" ></div>
            <div className="footer__levelOneRightLocation">
              <h4>
                <strong>LONDON</strong>
              </h4>
              <p>
                <span>
                  <strong>
                    Address:
                  </strong>
                  36 Wharf Road, N1 <br /> 7GR
                  <br />
                  <strong>
                    Phone: <a href="+44 7802685611">+44 7802685611</a>
                  </strong>
                  <br />
                </span>
                <span>
                  <strong>
                    Email: <a href="mailto: london@altar.io">london@altar.io</a>
                  </strong>
                </span>
              </p>
            </div>
          </div>
          <div className="footer__levelOneRightCities">
            <img src={milan} alt={milan} className="footer__levelOneRightImg" />
            <div className="footer__divider" ></div>
            <div className="footer__levelOneRightLocation">
              <h4>
                <strong>MILAN</strong>
              </h4>
              <p>
                <span>
                  <strong>
                    Address: 
                  </strong>
                  Via orti 14, 20122
                  <br />
                  <strong>
                    Phone: <a href="tel: +39 3318853562">+39 3318853562</a>
                  </strong>
                  <br />
                </span>
                <span>
                  <strong>
                    Email: <a href="mailto: milan@altar.io">milan@altar.io</a>
                  </strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__levelTwo">
        <div className="footer__levelTwoLinksBox">
          <h4 className="footer__linksGroup">GLOBAL</h4>
          <div className="footer__links">
            <Link to="/work" className="footer__link">
              Work
            </Link>
            <Link to="/about" className="footer__link">
              About Us
            </Link>
            <Link to="/blog" className="footer__link">
              Blog
            </Link>
            <Link to="/newsletter" className="footer__link">
              Newsletter
            </Link>
            <Link to="/news" className="footer__link">
              News
            </Link>
            <Link to="/careers" className="footer__link">
              Careers
            </Link>
          </div>
        </div>
        <div className="footer__levelTwoLinksBox">
          <h4 className="footer__linksGroup">TECHNOLOGY</h4>
          <div className="footer__links">
            <Link to="/full-stack-pps" className="footer__link">
              Full Stack Apps
            </Link>
            <Link to="/ai" className="footer__link">
              Artificial Intelligence
            </Link>
            <Link to="/data-intensive-apps" className="footer__link">
              Data Intensive Apps
            </Link>
            <Link to="/open-source" className="footer__link">
              Open Source
            </Link>
          </div>
        </div>
        <div className="footer__levelTwoLinksBox">
          <h4 className="footer__linksGroup">SERVICES</h4>
          <div className="footer__links">
            <Link to="/product-scope" className="footer__link">
              Product Scope
            </Link>
            <Link to="/ux-ui" className="footer__link">
              UX/UI
            </Link>
            <Link to="/mvp-builder" className="footer__link">
              MVP Builder
            </Link>
            <Link to="/teams" className="footer__link">
              Dedicated Teams
            </Link>
          </div>
        </div>
        <div className="footer__levelTwoLinksBox">
          <h4 className="footer__linksGroup">BUILD</h4>
          <div className="footer__links">
            <Link to="/pricing" className="footer__link">
              Play With Pricing
            </Link>
            <Link to="/start-a-project" className="footer__link">
              Book A Call
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__levelThree">
        <span>© 2022 Altar.io all rights reserved.</span>
        <div className="footer__socialIcons">
          <FaTwitter className="footer__socialIcon" />
          <FaFacebookF className="footer__socialIcon" />
          <TiSocialLinkedin className="footer__socialIcon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
