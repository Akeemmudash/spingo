import { motion } from "framer-motion";
import Button from "../../components/Button";
import OfferCountDown from "../../components/OfferCountDown.tsx";
import QuantityStepper from "../../components/QuantityStepper";
import StarRating from "../../components/StarRating";
import LikeIcon from "../../assets/icons/LikeIcon.jsx";
import LikeIconFilled from "../../assets/icons/LikeIconFilled.jsx";
import ChevronRight from "../../assets/icons/ChevronRight.jsx";

import { useState } from "react";
import { productItemTypes } from "./types.d.js";

ProductDetails.propTypes = { item: productItemTypes };

export default function ProductDetails({ item }) {
  const dateTimeString = "2024-11-30T23:59:59";
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    console.log("isLiked", isLiked);
    setIsLiked(!isLiked);
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="product-details  ps-lg-5">
        <div className="reviewStar d-flex fs-6 mb-3 align-items-baseline gap-2 ">
          <StarRating color="black" />{" "}
          <span className="fs-8">{item.reviews} reviews</span>
        </div>
        <div className="product-name ">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-primary"
          >
            {item.productName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-base-gray mb-3"
          >
            {item.productDescription}
          </motion.p>
          <motion.p
            className="price"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <span className="fw-bold text-base-black fs-4">{item.price}</span>
            <span className="old-price text-base-gray ms-3">
              <del>{item.goldPrice}</del>
            </span>
          </motion.p>
        </div>
        <hr />
        <OfferCountDown dateTimeString={dateTimeString} type="gray" showTitle />
        <hr />
        <div className="product-measure mb-4">
          <p className="text-base-gray fs-7 fw-semibold lh-lg">Measurements</p>
          <span className="lh-2 fs-5">{item.weight}</span>
        </div>
        <ProductColor item={item} />

        <div className="d-flex gap-4 mb-4">
          <QuantityStepper type="filled" />
          <Button
            className="wishlist-btn d-flex  justify-content-center gap-3 text-base-primary flex-grow-1"
            onClick={handleClick}
            variant="outline"
          >
            <span className="like-icon position-relative w-6 h-6 d-block">
              {!isLiked ? (
                <LikeIcon size={24} className="position-absolute start-0" />
              ) : (
                <LikeIconFilled
                  size={24}
                  className="position-absolute start-0"
                />
              )}
            </span>
            Wishlist
          </Button>
        </div>
        <Button className="add-to-cart-btn" fullWidth>
          Add to cart
        </Button>

        <hr />

        <motion.p
          className="sku d-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-base-gray col">SKU:</span>{" "}
          <span className="text-base-black col">{item.productNumber}</span>
        </motion.p>
        <motion.p
          className="category d-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-base-gray col">Category:</span>{" "}
          <span className="text-base-black col">{item.category}</span>
        </motion.p>
      </div>
    </div>
  );
}

ProductColor.propTypes = { item: productItemTypes };

function ProductColor({ item }) {
  const [colorName, setColorName] = useState("black");
  return (
    <div className="product-color mb-5">
      <p className="text-base-gray fs-7 fw-semibold lh-lg">
        Choose Color <ChevronRight className="ms-2" />
      </p>
      <p className="text-capitalize">{colorName}</p>
      <div className="color-options d-flex gap-2 mt-2 justify-content-start">
        {item.colors.map((color) => (
          <div className=" h-100" key={color.name}>
            <motion.div
              style={{
                backgroundImage: `url(${color.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                outline:
                  colorName === color.name ? `1px solid ${color.name}` : "none",
              }}
              alt={color.name}
              key={color.name}
              onClick={() => setColorName(color.name)}
              className="color-options__img h-100"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
