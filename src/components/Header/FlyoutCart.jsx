import { useState } from "react";
import PropTypes from "prop-types";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function FlyoutCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FlyoutCartButton onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
FlyoutCartButton.propTypes = {
  onClick: PropTypes.func,
};

function FlyoutCartButton({ onClick }) {
  return (
    <button
      className="btn-reset d-flex align-items-center"
      onClick={onClick}
      aria-label="Show Cart"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="outline/shopping bag">
          <path
            id="Rectangle 773"
            d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
            stroke="#001F3F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Rectangle 772"
            d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
            stroke="#001F3F"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <span className="number-of-items ms-1 bg-primary-600 rounded-circle d-flex fs-8 w-5 h-5 text-white justify-content-center align-items-center">
        {3}
      </span>
    </button>
  );
}
