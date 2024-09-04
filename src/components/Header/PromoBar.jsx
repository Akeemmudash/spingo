import React from "react";
import { Link } from "react-router-dom";

import ticketPercent from "../../assets/ticket-percent.svg";
import closeIcon from "../../assets/close-icon.svg";
import Button from "../Button";

export default function PromoBar() {
  const [show, setShow] = React.useState(true);

  return show ? (
    <div className="promo-bar bg-primary-600 position-relative w-100 px-4">
      <Link to="/shop" className="text-decoration-none text-white mx-auto">
        <p className="mb-0 fs-8 d-flex align-items-center fw-medium lh-lg">
          <img
            src={ticketPercent}
            alt="Promo icon"
            className="promo-bar__icon"
          />
          <span className="ms-3">30% Off Storewide — Limited Time! </span>
          <Button type="link" className="ms-3" to="/shop">
            Shop Now
          </Button>
        </p>
      </Link>
      <button
        onClick={() => setShow(false)}
        className="close-button shadow-none border-0 bg-transparent h-5 d-flex justify-content-center align-items-center "
      >
        <img src={closeIcon} alt="Close Icon" className="h-4" />
      </button>
    </div>
  ) : null;
}
