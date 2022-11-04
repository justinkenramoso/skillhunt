import React from "react";
import Jobs from "../components/jobs/jobs";
import bg from "../images//backgrounds/bits.svg";

const Careers = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} id="careers">
      <div id="careers-header-div">
        <h3 id="careers-header">
          Find a <span className="color1">Job</span>
        </h3>
      </div>
      <Jobs />
    </div>
  );
};

export default Careers;
