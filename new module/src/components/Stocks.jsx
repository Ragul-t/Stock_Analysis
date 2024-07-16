import React, { useState } from "react";
import axios from "axios";
import "../CSS/Stocks.css";

function Stocks() {
  const [ticker, setTicker] = useState("");
  const [historicalData, setHistoricalData] = useState(null);
  const [predictions, setPredictions] = useState(null);

  const baseURL = "http://localhost:8080";

  const fetchHistoricalData = async () => {
    try {
      console.log("Fetching historical data...");
      const response = await axios.get(
        `${baseURL}/api/stocks/historical?ticker=${ticker}`
      );
      console.log("Historical data response:", response.data);
      setHistoricalData(response.data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  const fetchPredictions = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/stocks/predict?ticker=${ticker}`
      );
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  return (
    <div className="container"> {/* Renamed class for clarity */}
      <h1>Stock Price Prediction</h1>
      <div className="input-container"> {/* Renamed class for clarity */}
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter ticker symbol"
          className="ticker-input"
        />
        <div className="button-container">
          <button onClick={fetchHistoricalData}>Fetch Historical Data</button>
          <button onClick={fetchPredictions}>Fetch Predictions</button>
        </div>
      </div>

      {historicalData && historicalData.data && (
        <div className="data-section"> {/* Renamed class for reuse */}
          <h2>Historical Data</h2>
          <table className="data-table">
            {/* ... existing table code ... */}
          </table>
        </div>
      )}

      {predictions && (
        <div className="data-section"> {/* Reuse same class for consistency */}
          <h2>Predictions for Next 10 Days</h2>
          <table className="data-table">
            {/* ... existing table code ... */}
          </table>
        </div>
      )}
    </div>
  );
}

export default Stocks;