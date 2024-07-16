// src/Dashboard.js
import React from "react";
import "../Dashboard.css"; // Create this CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-row">
        <div className="div1">
          <h2>Percentage of Risk</h2>
          <p>75%</p>
        </div>
        <div className="div2">
          <h2>Risk Category</h2>
          <p>Positive</p>
        </div>
      </div>
      <div className="bottom-row">
        <h2>Risk Graph</h2>
        {/* You can replace this with a graph component */}
        <div className="graph-placeholder">Graph goes here</div>
      </div>
    </div>
  );
};

export default Dashboard;
