// src/components/Home.jsx
import React from "react";
import InvestmentCard from "../components/InvestmentCard";
import "../CSS/Home.css";

const investments = [
  {
    title: "Real Estate",
    description:
      "Investing in real estate can provide steady income and long-term growth.",
    image:
      "https://res.cloudinary.com/dyxnmjtrg/image/upload/v1694691119/property_wb2bha.jpg",
  },
  {
    title: "Stocks",
    description:
      "Stocks have the potential for high returns, but also come with risks.",
    image:
      "https://res.cloudinary.com/dyxnmjtrg/image/upload/v1680899798/book1_nepbwo.jpg",
  },
  {
    title: "Bonds",
    description:
      "Bonds are a safer investment with lower returns compared to stocks.",
    image:
      "https://res.cloudinary.com/dyxnmjtrg/image/upload/v1694691119/property_wb2bha.jpg",
  },
  {
    title: "Mutual Funds",
    description:
      "Mutual funds offer diversification and professional management.",
    image:
      "https://res.cloudinary.com/dyxnmjtrg/image/upload/v1680899798/book1_nepbwo.jpg",
  },
  {
    title: "Cryptocurrency",
    description:
      "Cryptocurrency is a high-risk, high-reward investment option.",
    image:
      "https://res.cloudinary.com/dyxnmjtrg/image/upload/v1694691119/property_wb2bha.jpg",
  },
];

const Home = () => {
  return (
    <div className="container home-page">
      <div className="row justify-content-center">
        {investments.map((investment, index) => (
          <div className="col mb-4 d-flex align-items-stretch" key={index}>
            <InvestmentCard {...investment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
