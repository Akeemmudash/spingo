import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BannerImg } from "../../assets";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="contact-section">
            <motion.div
              className="contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={BannerImg}
                alt="Promotional Banner"
                className="contact-img"
              />
            </motion.div>
            <motion.div
              className="contact-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                About Us
              </motion.h2>
              <motion.p
                className="contact-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <span>Vescan</span> is a leading provider of automotive spare
                parts, dedicated to empowering mechanics and towing companies
                with high-quality, reliable products.
              </motion.p>
              <motion.button
                className="contact-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Shop now <FaArrowRight />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
};

export default FeatureSection;
