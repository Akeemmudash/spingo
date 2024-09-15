import PropTypes from "prop-types";
import { ArrowRight } from "../../assets/icons";
import { Link } from "react-router-dom";
import "./button.css";

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  buttonType: PropTypes.oneOf[("link", "button")],
  variant: PropTypes.oneOf(["outline", "filled", "underline", "plain"]),
  hasUnderlineAndArrow: PropTypes.bool,
};

export default function Button({
  children,
  buttonType = "button",
  fullWidth,
  className,
  variant,
  hasUnderlineAndArrow,
  ...props
}) {
  let buttonVariant = "";
  switch (variant) {
    case "outline":
      buttonVariant = "outline-btn";
      break;
    case "underline":
      buttonVariant = "underline-arrow-btn";
      break;
    case "plain":
      buttonVariant = "plain-btn";
      break;
    default:
      buttonVariant = "normal-btn";
      break;
  }
  if (buttonType === "button") {
    return (
      <button
        {...props}
        className={`${buttonVariant} rounded-3 fw-medium ${
          className ? className : ""
        }${fullWidth === true ? " w-100" : ""}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        {...props}
        className={`${buttonVariant} ${className} ${
          fullWidth === true ? "w-100" : ""
        }`}
      >
        {children}
        &nbsp;
        {hasUnderlineAndArrow && <ArrowRight />}
      </Link>
    );
  }
}
