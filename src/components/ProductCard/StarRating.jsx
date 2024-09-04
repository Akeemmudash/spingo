import PropTypes from "prop-types";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <IoMdStar key={`full-${i}`} className="text-gold" />
        ))}
      {halfStars === 1 && <IoMdStarHalf className="text-gold" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <IoMdStarOutline key={`empty-${i}`} className="text-gold" />
        ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
};
