import React from "react";
import team from "../images/team.svg";
import build from "../images/build.svg";
import teach from "../images/teach.svg";
import HomeAccordion from "../components/HomeAccordion.js";

function Home() {
  return (
    <div>
      <div className="home1">
        <div className="container-fluid fullHeight p-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="intromsg-div">
                <h2 className="intromsg mt-lg-4 animate__animated animate__fadeInLeft">
                  Building an excellent development team shouldn't be difficult.
                </h2>
                <br />
                <h3 className="animate__animated animate__fadeIn animate__delay-2s">
                  Let us help you.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="team animate__animated animate__fadeInUp"
                src={team}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="container-fluid fullHeight p-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img className="build mb-3" src={teach} alt="" />
                <img className="teach" src={build} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="intromsg2-div">
                <h2 className="whyUs">Why SkillHunt?</h2>
                <h4 className="text-center mt-lg-4">
                  We make sure our candidates are well-trained and are ready to
                  help you build your desired software.
                </h4>
                <HomeAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
