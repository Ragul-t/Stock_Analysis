import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

function Choice() {
  return (
    <div className="container d-flex justify-content-between align-items-center vh-80">
      <div className="card shadow-sm border-0 rounded-lg w-50">
        <div className="card-body text-center">
          <h2>Confused about which firm to invest in?</h2>
          <button
            className="btn btn-primary mt-3"
            onClick={() => (window.location.href = "/compare")}
          >
            Go to Compare Page
          </button>
        </div>
      </div>
      <div className="container"></div>
      <div className="card shadow-sm border-0 rounded-lg w-50">
        <div className="card-body text-center">
          <h2>Want to analyse a company's investment?</h2>
          <button
            className="btn btn-primary mt-3"
            onClick={() => (window.location.href = "/dum")}
          >
            Go to Company Analysis Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choice;
