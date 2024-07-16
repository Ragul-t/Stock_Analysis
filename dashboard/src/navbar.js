import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/dyxnmjtrg/image/upload/v1720380466/Screenshot_2024-07-08_005709-removebg-preview_jhkvcr.png"
            height="40"
            width="170"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/choice">
                Choice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stocks">
                Stock Prediction
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/portfoliolist">
                Stocks
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}