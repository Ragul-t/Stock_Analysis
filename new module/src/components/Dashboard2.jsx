import React from "react";
import "../CSS/Dashboard2.css";

const Dashboard2 = () => {
  return (
    <div className="dashboard-container">
      <div className="card2">
        <h2>Sessions</h2>
        <p>26.9K</p>
        <span>past 7 days</span>
        <div className="chart"></div>
      </div>
      <div className="card2">
        <h2>Conversions</h2>
        <p>229</p>
        <span>past 7 days</span>
        <div className="chart"></div>
      </div>
      <div className="card-wide">
        <h2>Google Ads</h2>
        <p>$2.6K</p>
        <span>budget spent</span>
        <div className="chart"></div>
        <p>49 conversions</p>
        <p>$53.3 per conv</p>
      </div>
    </div>
  );
};

export default Dashboard2;
