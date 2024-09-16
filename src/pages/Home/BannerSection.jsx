import { motion } from "framer-motion";
import { BannerImg } from "../../assets";
import "./home.css";
import OfferCountDown from "../../components/OfferCountDown.tsx";
import Button from "../../components/Button/index.jsx";
import { containerVariants, itemVariants } from "../../constants/variants.js";

const BannerSection = () => {
  const dateTimeString = "2024-11-30T23:59:59";

  return (
    <motion.div
      className="banner-section bg-primary-base d-flex align-items-center mt-5 flex-column flex-lg-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="banner" variants={itemVariants}>
        <img src={BannerImg} alt="Promotional Banner" className="banner-img" />
      </motion.div>
      <motion.div
        className="banner-content w-100 h-100 ps-lg-5 container "
        variants={itemVariants}
        viewport={{ amount: 0.45, once: true }}
      >
        <div className="px-lg-4  section__body">
          <div className="py-5 d-flex  align-items-start justify-content-center flex-column">
            <p className="banner-header fw-semibold">LIMITED EDITION</p>
            <h2>Hurry Up! 30% OFF</h2>
            <p>Find clubs that are right for your game</p>
            <div className="mt-md-4 mt-3">
              <OfferCountDown dateTimeString={dateTimeString} />
            </div>
            <Button
              variant="normal"
              className="shopping-btn mt-4 mt-md-5 secondary"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BannerSection;
