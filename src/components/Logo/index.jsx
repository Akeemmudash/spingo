import logo from "../../assets/website-logo.png";
import { Link } from "react-router-dom";
import "./index.css";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Website Logo" className="website-logo py-4" />
    </Link>
  );
}
