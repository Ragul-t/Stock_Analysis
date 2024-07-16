import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../CSS/PortfolioForm.css";

const PortfolioForm = () => {
  const [stockName, setStockName] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [returns, setReturns] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      axios
        .get(`http://localhost:8080/api/portfolios/${id}`)
        .then((response) => {
          const {
            stockName,
            investmentAmount,
            currentValue,
            returns,
          } = response.data;
          setStockName(stockName);
          setInvestmentAmount(investmentAmount);
          setCurrentValue(currentValue);
          setReturns(returns);
        })
        .catch((error) => {
          console.error("Error fetching portfolio details:", error);
        });
    }
  }, [id, isEditing]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const portfolioData = {
      stockName,
      investmentAmount,
      currentValue,
      returns,
    };

    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:8080/api/portfolios/${id}`,
          portfolioData
        );
      } else {
        await axios.post("http://localhost:8080/api/portfolios", portfolioData);
      }
      navigate("/portfoliolist");
    } catch (error) {
      console.error("Error saving portfolio:", error);
    }
  };

  return (
    <div className="portfolio-form-container">
      <h2>{isEditing ? "Edit Portfolio" : "Create Portfolio"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Stock Name:
          <input
            type="text"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
          />
        </label>
        <label>
          Investment Amount:
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
        </label>
        <label>
          Current Value:
          <input
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </label>
        <label>
          Returns:
          <input
            type="number"
            value={returns}
            onChange={(e) => setReturns(e.target.value)}
          />
        </label>
        <button type="submit">{isEditing ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
