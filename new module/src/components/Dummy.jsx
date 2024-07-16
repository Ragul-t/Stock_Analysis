import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { PieChart } from "react-minimal-pie-chart";
import "../CSS/Dummy.css"; // Assuming you have a Dummy.css file for your styles

export default function Dummy() {
  const [query, setQuery] = useState("CITI");
  const [articles, setArticles] = useState([]);
  const [scoreCounts, setScoreCounts] = useState({ 0: 0, 1: 0, "-1": 0 });

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/news?query=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data; // directly access response.data
      console.log("Fetched articles:", data);
      setArticles(data);
      updateScoreCounts(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const updateScoreCounts = (data) => {
    const counts = { 0: 0, 1: 0, "-1": 0 };
    data.forEach((article) => {
      const score = parseInt(article.sentimentScore, 10);
      if (score >= -1 && score <= 1) {
        counts[score] += 1;
      }
    });
    setScoreCounts(counts);
  };

  const totalCountsMemo = useMemo(() => {
    return {
      score0: scoreCounts[0],
      score1: scoreCounts[1],
      scoreMinus1: scoreCounts["-1"],
    };
  }, [scoreCounts]);

  const renderArticlesByScore = (score) => {
    return articles
      .filter((article) => parseInt(article.sentimentScore, 10) === score)
      .map((article, index) => (
        <div key={index} className="dummy-article">
          <h3>{article.title}</h3>
          <p>Sentiment Score: {article.sentimentScore}</p>
        </div>
      ));
  };

  const legendData = [
    { title: "Neutral", value: totalCountsMemo.score0, color: "#E38627" },
    { title: "Positive", value: totalCountsMemo.score1, color: "#C13C37" },
    { title: "Negative", value: totalCountsMemo.scoreMinus1, color: "#6A2135" },
  ];

  const renderLegend = () => {
    return (
      <div className="dummy-legend">
        {legendData.map((entry, index) => (
          <div key={index} className="dummy-legend-item">
            <span
              className="dummy-legend-color"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span>{entry.title}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dummy-App">
      <h1 style={{ color: "white" }}>Sentiment Analysis</h1>
      <div className="dummy-container">
        <div className="dummy-box">
          <select
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="dummy-dropdown"
          >
            <option value="JPMC">JPMC</option>
            <option value="CITI">CITI</option>
            <option value="UBS">UBS</option>
            <option value="KOTAK">KOTAK</option>
            <option value="ZOMATO">ZOMATO</option>
            <option value="SWIGGY">SWIGGY</option>
            <option value="MYNTRA">MYNTRA</option>
            <option value="RELIANCE">RELIANCE</option>
            <option value="ZUDIO">ZUDIO</option>
          </select>
          <br />
          <button
            onClick={fetchNews}
            style={{ color: "#389eb7", backgroundColor: "white" }}
          >
            Fetch News
          </button>
        </div>
        <div className="dummy-box">
          <div className="dummy-pie-container">
            <h2>Pie chart</h2>
            {renderLegend()}
            <PieChart
              style={{ width: "350px", height: "350px" }}
              data={legendData}
            />
          </div>
        </div>
      </div>
      <div className="dummy-cards-container">
        <div className="dummy-card">
          <h2>News with Sentiment Score 0 ({totalCountsMemo.score0}):</h2>
          {renderArticlesByScore(0)}
        </div>
        <div className="dummy-card">
          <h2>News with Sentiment Score 1 ({totalCountsMemo.score1}):</h2>
          {renderArticlesByScore(1)}
        </div>
        <div className="dummy-card">
          <h2>News with Sentiment Score -1 ({totalCountsMemo.scoreMinus1}):</h2>
          {renderArticlesByScore(-1)}
        </div>
      </div>
    </div>
  );
}
