import React, { useState } from "react";
import "./shop.css";
import AdditionalItem from "./AdditionalItem";
import Questions from "./Questions";
import Review from "./Review";

const Products = () => {
  const [activeSection, setActiveSection] = useState("additionalInfo");

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <div>
      <div className="Reviews">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="menuHeader d-flex">
              <p
                className={activeSection === "additionalInfo" ? "active" : ""}
                onClick={() => handleSectionClick("additionalInfo")}
              >
                Additional Info 
              </p>
              <p
                className={activeSection === "questions" ? "active" : ""}
                onClick={() => handleSectionClick("questions")}
              >
                Questions
              </p>
              <p
                className={activeSection === "reviews" ? "active" : ""}
                onClick={() => handleSectionClick("reviews")}
              >
                Reviews
              </p>
            </div>
            
            <div className={`sectionContent ${activeSection === "additionalInfo" ? "active" : ""}`}>
              {activeSection === "additionalInfo" && <AdditionalItem />}
            </div>
            <div className={`sectionContent ${activeSection === "questions" ? "active" : ""}`}>
              {activeSection === "questions" && <Questions />}
            </div>
            <div className={`sectionContent ${activeSection === "reviews" ? "active" : ""}`}>
              {activeSection === "reviews" && <Review />}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
