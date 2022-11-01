import React from "react";
// BG
import devTeam from "../images/backgrounds/dev-team.jpg";
import bg from "../images//backgrounds/bits.svg";
// Why Us
import team from "../images/whuys/team.svg";
import build from "../images/whuys/build.svg";
import teach from "../images/whuys/teach.svg";
// Solutions
import Solution from "../components/Solution";
import ui from "../images/solutions/ui.jpg";
import frontend from "../images/solutions/frontend.jpg";
import mobile from "../images/solutions/mobile-dev.jpg";
import backend from "../images/solutions/backend.jpg";
// Partners
import innovatora from "../images/partners/innovatora.png";
import pns from "../images/partners/pns.png";
import webifier from "../images/partners/webifier.png";

// Material UI
import { Button } from "@mui/material";
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
        <div className="section-a-header">
          <h2>
            WHY <span className="color1">SKILLHUNT</span> ?
          </h2>
        </div>
        <div className="row w-100 m-0">
          {/* Quality Driven-------------- */}
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
                <span className="color1">Quality</span> Driven
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
        {/* Solutions -----------------------------------> */}
        <hr className="color4" />
        <div className="section-a-header">
          <h2>
            OUR <span className="color1">SOLUTIONS</span>
          </h2>
        </div>
        {/* Carousel */}
        <div id="solutions">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="false">
                <Solution
                  title="UI/UX Design"
                  primary="USER-CENTRIC-DESIGN WITH AWE-INSPIRING AESTHETICS"
                  secondary="Our lean UX/UI design methodology allows us to hyperfocus on our end-users, and identify what truly matters to them. We take it further by integrating data into our design process, synthesizing each data point to give us a clear picture of how the users behave. As a result, we create a masterpiece that is both beautiful and delightful to use."
                  img={ui}
                />
              </div>
              <div className="carousel-item" data-bs-interval="false">
                <Solution
                  title="Mobile Development"
                  primary="WORLD-CLASS MOBILE APPS THAT SET TRENDS"
                  secondary="Our mobile apps are engineered to be extremely reliable even in the face of millions of users. To be able to achieve this, we use native app development - the uncontested choice for high-performance apps. This allows us to take full advantage of the operating systems' features. By going deep into the hardware (GPS, camera, CPU, etc.) we ensure that our mobile apps are fastest in execution, ultimately resulting in the best user experience."
                  img={mobile}
                />
              </div>
              <div className="carousel-item" data-bs-interval="false">
                <Solution
                  title="Web Development"
                  primary="WEB APPS ENGINEERED TO EXCEED EXPECTATIONS."
                  secondary="Simply put, our website apps stand out from the rest. In terms of speed, performance, design, and functionality, we make sure that our web app is as indistinguishable as possible from its native counterpart. We face technical impossibilities head-on and push the boundaries on what is possible."
                  img={frontend}
                />
              </div>
              <div className="carousel-item" data-bs-interval="false">
                <Solution
                  title="Backend Development"
                  primary="SECURE. EFFICIENT. SCALABLE."
                  secondary="Security lies at the heart of our development. We employ the industry’s best practices with strict compliance at the highest level security standards used by the banks and the military. Efficiency and scalability sits at the core of our software engineering process, making sure state-of-the-art technologies are used where applicable."
                  img={backend}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon d-none d-md-inline"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon d-none d-md-inline"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Partners ------------------------------------------> */}
        <hr className="color4" />
        <div className="section-a-header">
          <h2>
            <span className="color1">PARTNER</span> COMPANIES
          </h2>
        </div>
        {/* Partners Flexbox --------------------------------------> */}
        <div id="partners" className="p-2 p-md-5">
          <div id="partners-flex">
            <img className="my-3 my-md-0" src={innovatora} alt="" />
            <img className="my-3 my-md-0" src={pns} alt="" />
            <img className="my-3 my-md-0" src={webifier} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
