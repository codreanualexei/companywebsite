import React, { useState } from "react";
import { logoNew } from "../../assets";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import "./navbar.css";
import { NavSmall } from "./styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  var navbar = document.querySelector(".navbar");
//   var navbarLink = document.querySelector(".navbar__link");

  window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
//       navbarLink.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
//       navbarLink.classList.remove("scrolled");
    }
  };
  return (
    <div className="navbar nav-colored">
      <Link to="/">
        <img src={logoNew} alt="" className="navbar__logo" />
      </Link>
      {/* <Link to="/">
        <img src={logo} alt="" className="navbar__logo" />
      </Link> */}
      <div className="navbar__links">
        <div className="navbar__link">
          <Link to="/work">Work</Link>
        </div>
        <div className="navbar__link navbar__linkBox">
          <Link to="/services">Services</Link>
          <KeyboardArrowDownOutlinedIcon
            fontSize="small"
            className="navbar__linkIcon"
          />
        </div>
        <div className="navbar__link">
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="navbar__link">
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="navbar__link">
          <Link to="/careers">Careers</Link>
        </div>
        <div className="navbar__link navbar__linkBox">
          <Link to="/tech">Tech</Link>
          <KeyboardArrowDownOutlinedIcon
            fontSize="small"
            className="navbar__linkIcon"
          />
        </div>
        <div className="navbar__link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbar__linkBooking">
          <button>
            <Link to="/start-a-project">BOOK A CALL</Link>
          </button>
        </div>
        <HiOutlineMenuAlt2
          className="navbar__linksMenuIcon"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* ===================FOR SMALL SCREENS   ================================ */}

      <NavSmall show={open} onMouseLeave={() => setOpen(false)}>
        <HiOutlineMenuAlt2
          className="navbar__linkMenuIconSmall"
          onClick={() => setOpen(false)}
        />
        {/* <AiOutlineClose fontSize='large' className="navbar__linkMenuIconSmall" onClick={() => setOpen(false)}/> */}
        <div className="navbar__linksSmall">
          <div className="navbar__linkSmall">
            <Link to="/work">Work</Link>
          </div>
          <div className="navbar__linkSmall navbar__linkBoxSmall">
            <Link to="/services">Services</Link>
            <KeyboardArrowDownOutlinedIcon
              fontSize="large"
              className="navbar__linkIconSmall"
            />
          </div>
          <div className="navbar__linkSmall">
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="navbar__linkSmall">
            <Link to="/about-us">About Us</Link>
          </div>
          <div className="navbar__linkSmall">
            <Link to="/careers">Careers</Link>
          </div>
          <div className="navbar__linkSmall navbar__linkBoxSmall">
            <Link to="/tech">Tech</Link>
            <KeyboardArrowDownOutlinedIcon
              fontSize="large"
              className="navbar__linkIconSmall"
            />
          </div>
          <div className="navbar__linkSmall">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="navbar__linkBookingSmall">
            <button>
              <Link to="/start-a-project">BOOK A CALL</Link>
            </button>
          </div>
        </div>
        <div className="navbar__navbarSmallSocial">
          <FaTwitter className="navbar__socialIcon" />
          <FaFacebookF className="navbar__socialIcon" />
          <TiSocialLinkedin className="navbar__socialIcon" />
        </div>
      </NavSmall>
    </div>
  );
};

export default Navbar;
