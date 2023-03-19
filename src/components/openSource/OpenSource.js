import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import { angulartics, builder, loopBack, starter } from "../../assets";

const OpenSource = () => {
  return (
    <div className="openSource__">
      <Slide bottom>
        <div className="openSource__Header">
          <h2 className="openSource__HeaderTitle">Open Source</h2>
          <p className="openSource__Text">
            We don’t just serve the industry - We’re part of the industry and
            build technology that is used worldwide.
          </p>
        </div>
      </Slide>
      <div className="openSource__items">
        {/* first */}
          <div className="openSource__openSourceOne">
            <div className="openSource__openSourceItemOne">
              <img src={loopBack} alt="" />
            </div>
            <div className="openSource__openSourceItemTwo">Loop back</div>
          </div>
        {/* second */}
          <div className="openSource__openSourceOne">
            <div className="openSource__openSourceItemOne">
              <img src={angulartics} alt="" />
            </div>
            <div className="openSource__openSourceItemTwo">Angular Ticks</div>
          </div>
        {/* third */}
          <div className="openSource__openSourceOne">
            <div className="openSource__openSourceItemOne">
              <img src={builder} alt="" />
            </div>
            <div className="openSource__openSourceItemTwo">Builder</div>
          </div>
          {/* fourth */}
          <div className="openSource__openSourceOne">
            <div className="openSource__openSourceItemOne">
              <img src={starter} alt="" />
            </div>
            <div className="openSource__openSourceItemTwo">Starter</div>
          </div>
        </div>
      <button className="openSource__BodyRightBtn">
        <Link to="/case-study">SEE ALL OPEN SOURCE</Link>
      </button>
    </div>
  );
};

export default OpenSource;
