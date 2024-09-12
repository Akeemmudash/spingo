import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BannerImg } from "../../assets";
import "./home.css";
import OfferCountDown from "../../components/OfferCountDown.tsx";
import Button from "../../components/Button/index.jsx";

const BannerSection = () => {
  const dateTimeString = "2024-11-30T23:59:59";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="banner-section bg-primary-base d-flex align-items-center mt-5 flex-column flex-lg-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="banner" variants={itemVariants}>
        <img src={BannerImg} alt="Promotional Banner" className="banner-img" />
      </motion.div>
      <motion.div
        className="banner-content w-100 h-100 ps-lg-5 container "
        variants={itemVariants}
      >
        <div className="px-4 d-flex justify-content-center align-items-lg-start align-items-center flex-column section__body">
          <p className="banner-header fw-semibold">LIMITED EDITION</p>
          <h2>Hurry Up! 30% OFF</h2>
          <p>Find clubs that are right for your game</p>
          <div className="mt-4">
            <OfferCountDown dateTimeString={dateTimeString} />
          </div>
          <Button variant={"secondary"} className="shopping-btn mt-4 mt-md-5">
            Shop Now
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BannerSection;
