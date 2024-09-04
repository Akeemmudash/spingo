import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            
            <div className="sectionContent">
              <AnimatePresence>
                {activeSection === "additionalInfo" && (
                  <motion.div
                    key="additionalInfo"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AdditionalItem />
                  </motion.div>
                )}
                {activeSection === "questions" && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Questions />
                  </motion.div>
                )}
                {activeSection === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Review />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
