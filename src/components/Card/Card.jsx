import React from "react";
import FiveStarRating from "../FiveStarRating";
import "./card.css";
import { ControlArms } from "../../assets";

const Card = () => {
  return (
    <div>
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4>Hot</h4>
          <img src={ControlArms} alt="Product" className="Product-img w-25" />
          <button>Add to Cart</button>
        </div>
      </div>
      <FiveStarRating />
      <div className="info-section">
      <p className="product-title">ClutchForce - Precision Clutch Kit</p>
      <div className="price-section">
      <p className="current-price">$24.99</p>
        <span className="original-price">
          <s>$40.00</s>
        </span>
      </div>
      </div>
    </div>
    </div>
    
  );
};

export default Card;
