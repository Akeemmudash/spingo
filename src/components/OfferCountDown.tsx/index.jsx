import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./offer-count-down.css";

OfferCountDown.propTypes = {
  dateTimeString: PropTypes.string,
  type: PropTypes.string,
  showTitle: PropTypes.bool,
};

function OfferCountDown({ dateTimeString, type = "white", showTitle = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const targetDate = new Date(dateTimeString).getTime();
  if (!dateTimeString) {
    throw new Error("dateTimeString is required");
  }
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

  let typeClasses = "";
  if (type === "gray") typeClasses = "timer gray";

  return (
    <div className="product-offers">
      <p className="mb-3">Offer expires in:</p>
      <div className={typeClasses}>
        <div className="timer-box ">
          <div className="timer-box-content">
            <motion.div
              className="timer-unit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.days}
            </motion.div>
            {showTitle && (
              <p className="text-center fs-8 text-base-gray lh-lg">Days</p>
            )}
          </div>
          <div className="timer-box-content">
            <motion.div
              className="timer-unit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.hours}
            </motion.div>
            {showTitle && (
              <p className="text-center fs-8 text-base-gray lh-lg">Hours</p>
            )}
          </div>
          <div className="timer-box-content">
            <motion.div
              className="timer-unit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.minutes}
            </motion.div>
            {showTitle && (
              <p className="text-center fs-8 text-base-gray lh-lg">Minutes</p>
            )}
          </div>
          <div className="timer-box-content">
            <motion.div
              className="timer-unit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.seconds}
            </motion.div>
            {showTitle && (
              <p className="text-center fs-8 text-base-gray lh-lg">Seconds</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCountDown;
