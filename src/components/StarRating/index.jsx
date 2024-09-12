import PropTypes from "prop-types";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

function StarRating({ rating = 5, color = "gold" }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  let colorClasses = "";
  if (color === "black") colorClasses = "text-base-black";
  else {
    colorClasses = "text-gold";
  }
  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <IoMdStar key={`full-${i}`} className={colorClasses} />
        ))}
      {halfStars === 1 && <IoMdStarHalf className={colorClasses} />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <IoMdStarOutline key={`empty-${i}`} className={colorClasses} />
        ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  color: PropTypes.string,
};

export default StarRating;
