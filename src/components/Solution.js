import React from "react";
import pattern from "../images/backgrounds/pattern.svg";

const Solution = (props) => {
  return (
    <div
      className="solutions-container my-5"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <h3>{props.title}</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="solutions-paper hvr-reveal">
            <h5>{props.primary}</h5>
          </div>
          <div className="solutions-paper hvr-reveal">
            <p>{props.secondary}</p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="solutions-img" src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
