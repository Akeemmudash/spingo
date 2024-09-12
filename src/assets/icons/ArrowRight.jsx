import PropTypes from "prop-types";

ArrowRight.propTypes = {
  strokeWidth: PropTypes.number,
};

export default function ArrowRight({ strokeWidth = 1.125 }) {
  return (
    <svg
      width="18"
      height="auto"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon/arrow-right">
        <path
          id="Vector"
          d="M3.75 9H14.25"
          stroke="currentColor"
          strokeWidth={`${strokeWidth}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M9.75 13.5L14.25 9"
          stroke="currentColor"
          strokeWidth={`${strokeWidth}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M9.75 4.5L14.25 9"
          stroke="currentColor"
          strokeWidth={`${strokeWidth}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
