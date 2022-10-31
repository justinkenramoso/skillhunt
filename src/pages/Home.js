import React from "react";
// Images
import team from "../images/team.svg";
import build from "../images/build.svg";
import teach from "../images/teach.svg";
import mobileDev from "../images/mobile-dev.jpg";
import devTeam from "../images/dev-team.jpg";
import bg from "../images/bits.svg";
// Material UI
import { Button, styled } from "@mui/material";
// Router
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Landing-----------------------------------------------> */}
      <div id="home-landing" style={{ backgroundImage: `url(${devTeam})` }}>
        <div id="landing-div">
          <h3 id="landing-text">
            Building an <span className="color1">excellent</span> <br />{" "}
            development team <br />
            has never been easier.
          </h3>
          <br />
          <div id="landing-subtext">
            <h5>
              <span className="color1">SkillHunt</span> has been around for 12
              years, <br /> constantly delivering{"  "}
              <span className="color1">
                game-changing <br />
              </span>
              Web Development solutions.
            </h5>
            <div className="mt-3 d-flex justify-content-between flex-column flex-md-row">
              <Link to="/talent">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                >
                  hire from our talents
                </Button>
              </Link>
              <Link to="/careers">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                >
                  get hired
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Section A-----------------------------------------------> */}
      <div id="section-a" style={{ backgroundImage: `url(${bg})` }}>
        <div id="section-a-header">
          <h2>
            WHY <span className="color1">SKILLHUNT</span> ?
          </h2>
        </div>
        <div className="row w-100 m-0">
          {/* Trained Professionals-------------- */}
          <div className="col-md-6 order-md-0">
            <div className="p-5 centered-flex">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={team} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 centered-flex px-md-5 py-3 order-md-1 ps-md-0">
            <div className="section-a-card m-lg-5">
              <h2>
                Trained <span className="color1">Professionals</span>
              </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quas est excepturi quo, nemo tempora. Dignissimos ex
                est adipisci, sequi nostrum laudantium praesentium earum dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati, nihil ex, a velit labore ratione dolorum porro hic
                placeat beatae blanditiis est voluptatibus maiores dicta!
              </p>
            </div>
          </div>
          {/* Modern Dev Strats-------------- */}
          <div className="col-md-6 order-md-3">
            <div className="p-5 centered-flex">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={build} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 centered-flex px-md-5 py-3 order-md-2 pe-md-0">
            <div className="section-a-card m-lg-5">
              <h2>
                <span className="color1">Modern</span> Development Strategies
              </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quas est excepturi quo, nemo tempora. Dignissimos ex
                est adipisci, sequi nostrum laudantium praesentium earum dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati, nihil ex, a velit labore ratione dolorum porro hic
                placeat beatae blanditiis est voluptatibus maiores dicta!
              </p>
            </div>
          </div>
          {/* Industry-Standard-------------- */}
          <div className="col-md-6 order-md-4">
            <div className="p-5 centered-flex">
              <div className="img-hover-zoom img-hover-zoom--xyz">
                <img src={teach} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 centered-flex px-md-5 py-3 order-md-5 ps-md-0">
            <div className="section-a-card m-lg-5">
              <h2>
                Industry-<span className="color1">Standard</span>
              </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quas est excepturi quo, nemo tempora. Dignissimos ex
                est adipisci, sequi nostrum laudantium praesentium earum dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati, nihil ex, a velit labore ratione dolorum porro hic
                placeat beatae blanditiis est voluptatibus maiores dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
