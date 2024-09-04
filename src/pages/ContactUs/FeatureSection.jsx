import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BannerImg } from "../../assets";
import "./contactus.css";

const FeatureSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="contact-section">
            <div className="contact">
              <img
                src={BannerImg}
                alt="Promotional Banner"
                className="contact-img"
              />
            </div>
            <div className="contact-content">
              <h2>About Us</h2>
              <p className="contact-header">
                <span>Vescan</span> is a leading provider of automotive spare
                parts, dedicated to empowering mechanics and towing companies
                with high-quality, reliable products.
              </p>
              <button className="contact-btn">
                Shop now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default FeatureSection;
