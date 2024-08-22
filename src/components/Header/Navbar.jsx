import { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar() {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="#link" className="nav__link">
        Home
      </Nav.Link>
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
      <Nav.Link as={NavLink} to="#link" className="nav__link">
        Contact us
      </Nav.Link>
    </Nav>
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
