import "./product-card.css";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import { formatToUSD } from "../../utils/formatToUSD";
import Button from "../Button";
import { LikeIcon } from "../../assets/icons";

ProductCard.propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  discount: PropTypes.number,
};

export default function ProductCard({
  productImage,
  productName,
  productPrice,
  discount,
}) {
  const price = formatToUSD(productPrice);
  let oldPrice = parseFloat(
    ((productPrice * 100) / (100 - discount)).toFixed(2)
  );
  oldPrice = formatToUSD(oldPrice);
  console.log("oldPrice", oldPrice);

  return (
    <div className="product-card d-flex flex-column rounded-3 overflow-hidden justify-content-between">
      <div className="card__head rounded-3 position-relative overflow-hidden">
        <div className="card__img h-full">
          <img
            src={productImage}
            alt={productName}
            className="w-100 h-100 d-block object-fit-cover rounded-3"
          />
        </div>
        <div className="product__tags position-absolute d-flex flex-column gap-2">
          <span className="hot-tag rounded-2 text-uppercase  rounded-1 fs-7 fw-semibold  bg-white text-center">
            hot
          </span>

          {discount !== null && (
            <span className="discount-tag text-white bg-secondary-400 text-center rounded-1 fs-7">
              -{discount}%
            </span>
          )}
        </div>
        <button className="card__like-btn position-absolute top-0 end-0 mt-3 me-3 btn-reset p-2 bg-white rounded-circle ">
          <LikeIcon />
        </button>

        <Button className="add-to-cart__btn  position-absolute  start-0 bottom-0 mb-3">
          Add to Cart
        </Button>
      </div>
      <div className="card__body mt-1">
        <div className="product__rating" title="5 out of 5">
          <StarRating rating={5} />
        </div>
        <h3 className="card__title fw-bold fs-6 mt-2">{productName}</h3>
        <p className="product__price mt-auto fs-7 mb-0">
          <span className="fw-bold">{price}</span>
          <span className="text-decoration-line-through ms-2">{oldPrice}</span>
        </p>
      </div>
    </div>
  );
}
