import PropTypes from "prop-types";
import "./button.css";
import { ArrowRight } from "../../assets/icons";
import { Link } from "react-router-dom";
Button.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  type: PropTypes.oneOf(["outline", "filled", "link"]),
};

export default function Button({
  children,
  type,
  fullWidth,
  className,
  onClick,
  variant,
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
        onClick={onClick}
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
      onClick={onClick}
      className={`${buttonType} rounded-3 fw-medium ${variant} ${className}  ${
        fullWidth === true ? "w-100" : ""
      }`}
    >
      {children}
    </button>
  );
}
