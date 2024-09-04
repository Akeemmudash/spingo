import PropTypes from "prop-types";
import "./button.css";
import ArrowRight from "../../assets/ArrowRight";
import { Link } from "react-router-dom";
Button.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(["outline", "filled", "link"]),
};

export default function Button({
  children,
  type,
  fullWidth,
  className,
  to,
  props,
}) {
  let buttonType = "";
  switch (type) {
    case "outline":
      buttonType = "outline-btn";
      break;
    case "link":
      buttonType = "link-btn";
      break;
    default:
      buttonType = "normal-btn";
      break;
  }
  if (buttonType === "link-btn") {
    return (
      <Link
        to={to}
        {...props}
        className={`link-btn  ${className} ${
          fullWidth === true ? "w-100" : ""
        }`}
      >
        {children}
        &nbsp;
        <ArrowRight />
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={`${buttonType} rounded-3 fw-medium border-0  ${className}  ${
        fullWidth === true ? "w-100" : ""
      }`}
    >
      {children}
    </button>
  );
}
