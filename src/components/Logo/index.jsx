import { primaryLogo, whiteLogo } from "../../assets";
import { Link } from "react-router-dom";
import "./logo.css";
import PropTypes from "prop-types";

Logo.propTypes = {
  variant: PropTypes.oneOf(["primary", "white"]),
};

export default function Logo({ variant = "primary" }) {
  return (
    <Link to="/" className="logo d-block">
      <img
        src={variant === "white" ? whiteLogo : primaryLogo}
        alt="Website Logo"
        className="website-logo"
      />
    </Link>
  );
}
