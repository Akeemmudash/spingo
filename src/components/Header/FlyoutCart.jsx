import { useState } from "react";
import PropTypes from "prop-types";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button";
import sampleImage from "../../assets/productImageSamples/spark-plugs.png";
import { CloseButton, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuantityStepper from "../QuantityStepper";
export default function FlyoutCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FlyoutCartButton onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as={"h2"} className="fs-1">
            Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <Stack className="h-100 ">
            <Stack className="overflow-auto pb-5">
              <div className="cart-items__list overflow-x-hidden w-100 px-4">
                <div className="py-4">
                  <FlyoutCartItem />
                </div>
                <div className="py-4 ">
                  <FlyoutCartItem />
                </div>
                <div className="py-4 ">
                  <FlyoutCartItem />
                </div>
                <div className="py-4">
                  <FlyoutCartItem />
                </div>
              </div>
            </Stack>
            <div className="mt-auto flex-grow-1 px-4">
              <div className="subtotal d-flex justify-content-between align-items-center border-bottom border-1 mb-4 pb-3">
                <em className="fst-normal">Subtotal</em>
                <strong className="mb-0 subtotal__price fw-medium">
                  ₦ 23,000
                </strong>
              </div>
              <div className="total d-flex justify-content-between align-items-center mb-4">
                <strong className="fst-normal fs-5">Total</strong>
                <strong className="mb-0 subtotal__price fs-5">₦ 23,000</strong>
              </div>

              <Button
                fullWidth
                buttonType="link"
                className="mb-2 d-block text-center rounded-2"
              >
                Checkout
              </Button>
              <Button
                variant="plain"
                buttonType="link"
                to="/cart"
                className="text-decoration-underline text-base-black link-offset-2 d-block text-center rounded-3"
                fullWidth
              >
                View Cart
              </Button>
            </div>
          </Stack>
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

function FlyoutCartItem() {
  return (
    <div className="flyout-cart__item d-flex  w-100 justify-content-between">
      <div className="col-3">
        <img
          src={sampleImage}
          alt={"sample"}
          className="h-100 w-100 object-fit-cover rounded-2"
        />
      </div>
      <div className="col-8 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between fw-medium mb-2">
          <h3 className="item-name fs-7 lh-[24px] mb-0">
            <Link to="">Spark Plug</Link>
          </h3>
          <em className=" fst-normal lh-[24px] ">₦ 23,000</em>
        </div>
        <div className="d-flex align-items-center justify-content-between fw-medium fs-8">
          <p className="align-middle mb-0 text-base-gray font-secondary">
            <span>Quality: </span>Excellent
          </p>
          <CloseButton title="Remove item" aria-label="remove item" />
        </div>
        <div className="mt-auto">
          <QuantityStepper />
        </div>
      </div>
    </div>
  );
}
