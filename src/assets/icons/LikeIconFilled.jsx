import { PiHeartFill } from "react-icons/pi";
import PropTypes from "prop-types";

export default function LikeIconFilled({ className, size = 22 }) {
  return <PiHeartFill size={size} className={className} />;
}

LikeIconFilled.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};
