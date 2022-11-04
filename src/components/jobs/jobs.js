import React from "react";
import JobCard1 from "./jobs1";
import JobCard2 from "./jobs2";
import JobCard3 from "./jobs3";
import JobCard4 from "./jobs4";
import JobCard5 from "./jobs5";
import JobCard6 from "./jobs6";
import JobCard7 from "./jobs7";
import JobCard8 from "./jobs8";
import JobCard9 from "./jobs9";
import JobCard10 from "./jobs10";

const Jobs = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100 m-0 p-3 p-md-5 g-4">
        <div className="col">
          <div className="job-container">
            <JobCard1 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard2 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard3 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard4 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard5 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard6 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard7 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard8 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard9 />
          </div>
        </div>
        <div className="col">
          <div className="job-container">
            <JobCard10 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
