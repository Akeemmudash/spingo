import { BannerImg } from "../../assets";
import { motion } from "framer-motion";
import Button from "../../components/Button";
const FeatureSection = () => {
  return (
    <section className="feature-section section__body">
      <div className="container">
        <div className="feature-section__banner row align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: `url(${BannerImg}) center / cover no-repeat`,
            }}
            alt="Promotional Banner"
            className="promo-img col-lg-6 col-12 mt-0"
          />
          <div className="col-lg-6 col-12">
            <motion.div
              className="feature-section__content p-4 p-lg-5 d-flex flex-column justify-content-center  align-items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-4 "
              >
                About Us
              </motion.h2>
              <motion.p
                className="feature-section__header mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <strong className="text-base-secondary fw-medium">
                  Vescan
                </strong>{" "}
                is a leading provider of automotive spare parts, dedicated to
                empowering mechanics and towing companies with high-quality,
                reliable products.
              </motion.p>
              <Button
                buttonType="link"
                variant="underline"
                hasUnderlineAndArrow
                className="fw-medium pb-2 mb-2"
                to="/shop"
              >
                Shop Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
