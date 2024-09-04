import React from "react";
import { Carousel } from "react-bootstrap";


const MLProducts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="heading d-flex justify-content-between align-content-baseline">
            <h2>You Might Also Like</h2>
            <p>More Products</p>
          </div>
          <Carousel />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default MLProducts;
