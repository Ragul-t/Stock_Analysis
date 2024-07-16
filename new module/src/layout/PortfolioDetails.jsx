import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../CSS/PortfolioDetails.css";

const PortfolioDetails = () => {
  const [portfolio, setPortfolio] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/portfolios/${id}`)
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.error("Error fetching portfolio details:", error);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/portfolios/${id}`);
      navigate("/portfoliolist");
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div className="portfolio-details-container">
      <h2>Portfolio Details</h2>
      <p>Stock Name: {portfolio.stockName}</p>
      <p>Investment Amount: {portfolio.investmentAmount}</p>
      <p>Current Value: {portfolio.currentValue}</p>
      <p>Returns: {portfolio.returns}</p>
      <Link to={`/portfolios/${portfolio.id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/portfoliolist">Back to List</Link>
    </div>
  );
};

export default PortfolioDetails;
