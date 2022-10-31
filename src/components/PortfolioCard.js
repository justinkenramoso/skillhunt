import React from "react";
import avatarMale from "../images/avatar-male.svg";
import { Button } from "@mui/material";

const PortfolioCard = () => {
  return (
    <div>
      <div className="card mb-5 portfolio-card">
        <div className="row g-0">
          <div className="col-lg-4 p-2 d-flex justify-content-center">
            <img
              src={avatarMale}
              className="img-fluid rounded-start portfolio-avatar"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">Name Here</h5>
              <p className="card-text">
                <strong>Full Stack Web Developer</strong>
              </p>
              <p className="card-text">
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum veniam dignissimos blanditiis assumenda iure maiores
                  qui quis voluptates.
                </small>
              </p>
              <div className="d-flex justify-content-center">
                <Button sx={{ marginRight: "10px" }}>View Portfolio</Button>
                <Button variant="outlined">Send Email</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
