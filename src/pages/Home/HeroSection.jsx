import { motion } from "framer-motion";
import { HeroImg, HeroImgS } from "../../assets";
import "./home.css";

export default function HeroSection() {
  return (
    <section className="hero-section position-relative">
      <div className="h-100">
        <picture>
          <source media="(max-width: 991px)" srcSet={HeroImgS} />
          <motion.img
            src={HeroImg}
            alt="Hero"
            className="hero-img object-fit-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </picture>
      </div>
      <div className="position-absolute w-100 h-100 top-0">
        <div className="container h-100 d-flex  flex-column justify-content-center">
          <div className="overlay-container mt-5 mt-sm-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero__heading font-primary"
            >
              <span>Get the Best</span> <br /> Vehicle Spare Parts from Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-secondary"
            >
              Reliable, Quality and Affordable Automotive
              <br className="breakpoint" /> Parts for Mechanics and Towing
              Companies
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
        </div>
      </div>
    </section>
  );
}
