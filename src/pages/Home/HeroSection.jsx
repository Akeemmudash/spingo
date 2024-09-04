import React from "react";
import { motion } from "framer-motion";
import { HeroImg, HeroImgS } from "../../assets";
import "./home.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <picture>
          <source media="(max-width: 998px)" srcSet={HeroImgS} />
          <motion.img
            src={HeroImg}
            alt="Hero"
            className="hero-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </picture>
      </div>
      <div className="overlay-container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span>Get the Best</span> <br /> Vehicle Spare <br /> Parts from Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Reliable, Quality and Affordable Automotive
          <br className="breakpoint" /> Parts for Mechanics and Towing Companies
        </motion.p>
        <motion.button
          className="btn skyBtn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Shopping Now
        </motion.button>
      </div>
    </section>
  );
}
