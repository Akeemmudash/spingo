import { useState } from "react";
import "./quantity-stepper.css";
import PropTypes from "prop-types";

QuantityStepper.propTypes = {
  type: PropTypes.oneOf[("filled", "outline")],
};
export default function QuantityStepper({ type = "outline" }) {
  const [stepperValue, setStepperValue] = useState(1);

  const increaseStepperValue = () => {
    setStepperValue((prev) => prev + 1);
  };

  const decreaseStepperValue = () => {
    setStepperValue((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div
      className={`quantity-stepper rounded-2  align-items-center ${
        type === "outline" ? "outline" : "filled"
      }`}
    >
      <button
        className="decrement-btn btn-reset"
        onClick={decreaseStepperValue}
        aria-label="Decrease quantity"
        disabled={stepperValue === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.22949 8H12.5628"
            stroke="inherit"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        name="quantity-stepper"
        value={stepperValue}
        readOnly
        className="quantity-input text-center mb-0 p-0"
        aria-label="Current quantity"
      />
      <button
        className="increment-btn btn-reset"
        onClick={increaseStepperValue}
        aria-label="Increase quantity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.37512 3.33325C8.37512 3.12615 8.20723 2.95825 8.00012 2.95825C7.79302 2.95825 7.62512 3.12615 7.62512 3.33325V7.62494H3.3335C3.12639 7.62494 2.9585 7.79283 2.9585 7.99994C2.9585 8.20705 3.12639 8.37494 3.3335 8.37494H7.62512V12.6666C7.62512 12.8737 7.79302 13.0416 8.00012 13.0416C8.20723 13.0416 8.37512 12.8737 8.37512 12.6666V8.37494H12.6668C12.8739 8.37494 13.0418 8.20705 13.0418 7.99994C13.0418 7.79283 12.8739 7.62494 12.6668 7.62494H8.37512V3.33325Z"
            fill="inherit"
          />
        </svg>
      </button>
    </div>
  );
}
