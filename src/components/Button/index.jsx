import PropTypes from "prop-types";
import "./button.css";
Button.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(["outline", "filled"]),
};

export default function Button({
  children,
  type = "filled",
  fullWidth,
  className,
  props,
}) {
  return (
    <button
      {...props}
      className={`${
        type === "filled"
          ? "normal-btn"
          : type === "outline"
          ? "outline-btn"
          : ""
      } rounded-3  btn-animation fw-medium border-0  ${className}  ${
        fullWidth === true ? "w-100" : "w-auto"
      }`}
    >
      {children}
    </button>
  );
}
