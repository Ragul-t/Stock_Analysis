import React from "react";
import "../CSS/InvestmentCard.css"; // Import local CSS

const InvestmentCard = ({ title, description, image }) => {
  return (
    <div className="card h-100 shadow-sm investment-card">
      <img src={image} alt={title} className="card-img-top investment-image" />
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5> {/* Use Bootstrap's primary color */}
        <p className="card-text text-muted">{description}</p> {/* Use Bootstrap's muted color */}
      </div>
    </div>
  );
};

export default InvestmentCard;
