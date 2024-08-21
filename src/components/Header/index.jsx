import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink } from "react-router-dom";

import ticketPercent from "../../assets/ticket-percent.svg";
import closeIcon from "../../assets/close-icon.svg";
import arrowRight from "../../assets/arrow-right.svg";
import chevronDown from "../../assets/chevron-down.svg";
import Logo from "../Logo";

import "./index.css";

export default function Header() {
  return (
    <div>
      <PromoBar />
      <header className="header">
        <Container className="d-flex justify-content-between align-items-center">
          <Logo />
          <Navbar />
          <div className=""></div>
        </Container>
      </header>
    </div>
  );
}

function Navbar() {
  return (
    <Nav className="">
      <Nav.Link as={NavLink} to="#link" className="nav__link">
        Home
      </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="#link" className="nav__link">
        Contact us
      </Nav.Link>
    </Nav>
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
