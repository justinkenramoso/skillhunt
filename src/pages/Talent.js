import React from "react";
import PortfolioCard from "../components/PortfolioCard.js";

const Talent = () => {
  return (
    <div id="talent">
      <div id="talent-row" className="row w-100 pt-2">
        <div id="sidebar-specs" className="col-md-2">
          Column
        </div>
        <div
          id="portfolios"
          className="col-md-8 order-first order-lg-0 px-lg-5"
        >
          <div id="portfolios-header-div">
            <h2 id="portfolios-header-text">PORTFOLIOS</h2>
            <h5>Find your next team member with us.</h5>
          </div>
          <div id="portfolio-cards">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
        <div id="sidebar-filler" className="col-md-2">
          Column
        </div>
      </div>
    </div>
  );
};

export default Talent;
