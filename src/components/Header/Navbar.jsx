import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../Logo";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <Navhamburger onShow={handleShow} />
        <Logo />
      </div>
      <Nav className="font-secondary d-none d-lg-flex">
        <NavBody />
      </Nav>
      <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="nav__small-screen d-flex justify-content-center align-items-center flex-column ">
          <NavBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function NavDropdownWithState({ title, children }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <NavDropdown
      onToggle={(show) => setIsShowing(show)}
      title={<DropdownTab title={title} isDropShowing={isShowing} />}
      id="basic-nav-dropdown"
    >
      {children}
    </NavDropdown>
  );
}

NavDropdownWithState.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ChevronDown() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="chevron-down__svg"
    >
      <g id="Icon/chevron-down">
        <path
          id="Vector"
          d="M5.20435 6.75L9.70435 11.25L14.2043 6.75"
          stroke="#141718"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

DropdownTab.propTypes = {
  title: PropTypes.string.isRequired,
  isDropShowing: PropTypes.bool,
};

function DropdownTab({ title, isDropShowing }) {
  return (
    <span className={`dropdown__tab ${isDropShowing ? "rotate" : ""} `}>
      {title} <ChevronDown />
    </span>
  );
}

export function Navhamburger({ onShow }) {
  return (
    <button
      className=" hamburger-btn btn-reset w-6 h-auto d-lg-none p-1"
      type="button"
      onClick={onShow}
      aria-label="Toggle navigation"
    >
      {[...new Array(3)].map((_, index) => (
        <span
          key={index}
          className="w-full d-block bg-black-base rounded-pill"
        />
      ))}
    </button>
  );
}

Navhamburger.propTypes = {
  onShow: PropTypes.func,
};

function NavBody() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link nav__link ${isActive ? "fw-bold" : ""}`
        }
      >
        Home
      </NavLink>
      <NavDropdownWithState title="Shop">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdownWithState>
      <NavDropdownWithState title="Product">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdownWithState>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `nav-link nav__link ${isActive ? "fw-bold" : ""}`
        }
      >
        Contact Us
      </NavLink>
    </>
  );
}
