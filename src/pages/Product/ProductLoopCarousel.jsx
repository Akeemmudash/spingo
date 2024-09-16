import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { productItemTypes } from "./types.d";

ProductLoopCarousel.propTypes = { item: productItemTypes };

export default function ProductLoopCarousel({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationState, setAnimationState] = useState("initial");
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === item.colors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? item.colors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="image-container d-flex flex-column gap-lg-5 gap-3 mb-5 pb-lg-5 overflow-hidden h-100">
        <div className="image__carousel position-relative">
          <div className="offer-update d-flex position-absolute flex-column gap-2 p-4">
            <p className="mb-0 text-uppercase fw-bold">New</p>
            <p className="offer-off mb-0">- 50%</p>
          </div>
          <button
            className={"arrow left-arrow position-absolute"}
            onClick={handlePrevImage}
          >
            <FaArrowLeft />
          </button>
          <img
            src={item.colors[currentImageIndex].img}
            alt={item.productName}
            className="main-image h-100"
          />
          <button
            className="arrow right-arrow position-absolute"
            onClick={handleNextImage}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="scroll-container row ">
          {item.colors.map((color, index) => (
            <div className="col" key={index}>
              <motion.div
                className="thumbnail"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundImage: `url(${color.img})`,
                  backgroundColor: "var(--bg-base-gray)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                alt={`Color ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
