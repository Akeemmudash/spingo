import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileToggler = React.forwardRef((props, ref) => (
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
ProfileToggler.displayName = "ProfileToggler";

export default function Profile() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={ProfileToggler} className="btn-reset" />

      <Dropdown.Menu align="end">
        <Dropdown.Item as={Link} to="/sign-in">
          Sign In
        </Dropdown.Item>
        <Dropdown.Item to="/sign-up">Create Account</Dropdown.Item>
        <Dropdown.Item href="My Cart">View Cart</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
