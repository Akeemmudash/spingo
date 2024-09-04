import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FiveStarRating from "../../components/FiveStarRating";
import "./shop.css";
import { FuelPumps } from "../../assets";
import { FaArrowRight, FaArrowLeft, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Popover, OverlayTrigger } from "react-bootstrap";

const PageHeader = () => {
  const items = [
    {
      image: FuelPumps,
      productName: "Bosch - Premium Brake Pads Set for Sedans",
      productDescription:
        "Made with high-quality materials and advanced friction formulations, the Bosch brake pads ensure a longer lifespan and consistent braking performance.",
      price: "$199.99",
      goldPrice: "$400.99",
      reviews: 11,
      colors: [
        { name: "Black", img: FuelPumps },
        { name: "Brown", img: FuelPumps },
        { name: "Yellow", img: FuelPumps },
      ],
      ratings: 1,
      weight: "17 1/2×20 5/8",
      productNumber: "1117",
      category: "Oil Filters",
    },
  ];

  const targetDate = new Date("2024-11-30T23:59:59").getTime();
  const [counter, setCounter] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === items[0].colors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? items[0].colors.length - 1 : prevIndex - 1
    );
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };

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

  return (
    <div className="page-header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Shop</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Oil Filters</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product
          </li>
        </ol>
      </nav>
      <div className="page-container">
        {items.map((item, index) => (
          <div className="product-container" key={index}>
            <div className="image-container">
              <div className="offer-update">
                <p>New</p>
                <p className="offer-off">-50%</p>
              </div>
              <motion.button
                className="arrow left-arrow"
                onClick={handlePrevImage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaArrowLeft />
              </motion.button>
              <motion.img
                src={item.colors[currentImageIndex].img}
                alt={item.productName}
                className="main-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.button
                className="arrow right-arrow"
                onClick={handleNextImage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaArrowRight />
              </motion.button>
              <div className="scroll-container">
                {item.colors.map((color, index) => (
                  <motion.img
                    src={color.img}
                    alt={`Color ${index}`}
                    key={index}
                    className="color-swatch"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
            <div className="product-details">
              <div className="reviewStar d-flex">
                <FiveStarRating
                  rating={item.ratings}
                  className="custom-star-rating"
                  onRate={(rating) => console.log(`Rated: ${rating}`)}
                />{" "}
                {item.reviews} reviews
              </div>
              <div className="product-name">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.productName}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  {item.productDescription}
                </motion.p>
                <motion.p
                  className="price"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  {item.price}{" "}
                  <span className="old-price">
                    <s>{item.goldPrice}</s>
                  </span>
                </motion.p>
              </div>
              <hr />
              <div className="product-offers">
                <p>Offer expires in:</p>
                <div className="timer">
                  <div className="timer-box">
                    <div className="timer-box-content">
                      <motion.div
                        className="timer-unit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {timeLeft.days}
                      </motion.div>
                      <p>Days</p>
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
                      <p>Hours</p>
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
                      <p>Minutes</p>
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
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="product-measure">
                <p>Measurements</p>
                <span>{item.weight}"</span>
              </div>
              <div className="product-color">
                <p>
                  Choose Color <IoIosArrowForward />
                </p>
                <div className="color-options">
                  {item.colors.map((color, index) => (
                    <OverlayTrigger
                      key={index}
                      placement="top"
                      overlay={
                        <Popover id={`popover-${index}`}>
                          <Popover.Body>
                            <p>{color.name}</p>
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <motion.img
                        src={color.img}
                        alt={color.name}
                        className="color-swatch"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </OverlayTrigger>
                  ))}
                </div>
              </div>

              <div className="dbtn">
                <div className="crement">
                  <motion.button
                    onClick={decrementCounter}
                    className="quantity-btn"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    -
                  </motion.button>
                  <p className="input-value" id="myNumber">
                    {counter}
                  </p>
                  <motion.button
                    onClick={incrementCounter}
                    className="quantity-btn"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {" "}
                    +{" "}
                  </motion.button>
                </div>
                <motion.button
                  className="btn wishlist-btn"
                  onClick={handleClick}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isLiked ? (
                    <FaHeart
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontSize: "24px",
                      }}
                    />
                  ) : (
                    <FaRegHeart
                      style={{
                        color: "#203b57",
                        cursor: "pointer",
                        fontSize: "24px",
                      }}
                    />
                  )}
                  Wishlist
                </motion.button>
              </div>
              <motion.button
                className="btn add-to-cart-btn"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Add to cart
              </motion.button>
              <hr />
              <motion.p
                className="sku"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                SKU: {item.productNumber}
              </motion.p>
              <motion.p
                className="category"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Category: {item.category}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageHeader;
