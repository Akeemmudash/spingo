import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BannerImg } from "../../assets";
import "./home.css";

const BannerSection = () => {
  const targetDate = new Date("2024-11-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
            2,
            "0"
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

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
      className="banner-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="banner" variants={itemVariants}>
        <img src={BannerImg} alt="Promotional Banner" className="banner-img" />
      </motion.div>
      <motion.div className="banner-content" variants={itemVariants}>
        <p className="banner-header">LIMITED EDITION</p>
        <h2>Hurry Up! 30% OFF</h2>
        <p>Find clubs that are right for your game</p>
        <span>Offer expires in:</span>
        <div className="timer">
          <div className="timer-box">
            <div className="timer-unit">{timeLeft.days}</div>
            <div className="timer-unit">{timeLeft.hours}</div>
            <div className="timer-unit">{timeLeft.minutes}</div>
            <div className="timer-unit">{timeLeft.seconds}</div>
          </div>
        </div>
        <button className="btn shopping-btn">Shopping Now</button>
      </motion.div>
    </motion.div>
  );
};

export default BannerSection;
