import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/PortfolioList.css";

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/portfolios")
      .then((response) => {
        setPortfolios(response.data);
      })
      .catch((error) => {
        console.error("Error fetching portfolios:", error);
      });
  }, []);

  return (
    <div className="portfolio-list-container">
      <h2>Investment Portfolios</h2>
      <Link to="/portfolios/new">Create New Portfolio</Link>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            <Link to={`/portfolios/${portfolio.id}`}>
              {portfolio.stockName}
            </Link>
            <Link to={`/portfolios/${portfolio.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
