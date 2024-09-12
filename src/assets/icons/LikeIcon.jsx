import { PiHeart } from "react-icons/pi";
import PropTypes from "prop-types";

export default function LikeIcon({ className, size = 22 }) {
  return <PiHeart size={size} className={className} />;
}

LikeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};
