import React from "react";
import team from "../images/team.svg";
import build from "../images/build.svg";
import teach from "../images/teach.svg";
import HomeAccordion from "../components/HomeAccordion.js";
import mobileDev from "../images/mobile-dev.jpg";
import devTeam from "../images/dev-team.jpg";

function Home() {
  return (
    <div>
      {/* Landing-----------------------------------------------> */}
      <div id="home-landing" style={{ backgroundImage: `url(${devTeam})` }}>
        <div id="landing-div">
          <h3 id="landing-text">
            Building an excellent <br /> development team <br />
            has never been easier.
          </h3>
          <br />
          <div id="landing-subtext">
            <h5>
              <span className="color1">SkillHunt</span> has been around for 12
              years, <br /> constantly delivering{" "}
              <span className="color1">
                game-changing <br />
                Web Development solutions.
              </span>
            </h5>
          </div>
        </div>
      </div>
      {/* Section A-----------------------------------------------> */}
      <div id="section-a">
        <div class="row w-100 m-0">
          <div className="col-md-6">
            <div id="section-a-left1" className="p-5">
              <div>
                <h2>under development</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="section-a-right1" className="p-5">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={team} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="section-a-left2" className="p-5">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={build} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="section-a-right2" className="p-5">
              <h2>under development</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div id="section-a-left3" className="p-5">
              <h2>under development</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div id="section-a-right3" className="p-5">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={teach} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
