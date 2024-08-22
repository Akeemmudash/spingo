import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ticketPercent from "../../assets/ticket-percent.svg";
import closeIcon from "../../assets/close-icon.svg";
import arrowRight from "../../assets/arrow-right.svg";
import Logo from "../Logo";

import "./index.css";

import Navbar from "./Navbar";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <PromoBar />
      <header className="header">
        <Container className="d-flex justify-content-between align-items-center">
          <Logo />
          <Navbar />
          <div className="header__icons d-flex justify-content-between align-items-center">
            <Search />
            <Profile />
            <ShoppingCart />
          </div>
        </Container>
      </header>
    </div>
  );
}

function PromoBar() {
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
          <span className="ms-2 ring-bottom d-sm-block d-none">
            Shop Now{" "}
            <span>
              <img src={arrowRight} alt="arrow-right" className="h-5" />
            </span>
          </span>
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

const ProfileButton = React.forwardRef((props, ref) => (
  <button className="btn-reset" ref={ref} {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="interface/outline/user-circle">
        <path
          id="Vector"
          d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
          stroke="#001F3F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </button>
));
ProfileButton.displayName = "ProfileButton";

function Profile() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={ProfileButton} className="btn-reset" />

      <Dropdown.Menu align="end">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
