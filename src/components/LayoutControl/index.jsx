import { RiLayoutGridFill } from "react-icons/ri";
import { TbLayoutListFilled } from "react-icons/tb";
import { TfiLayoutColumn2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";
import PropTypes from "prop-types";

export default function LayoutControl({ handleLayoutChange, layoutMode }) {
  return (
    <div className="layout-controls">
      <div className="layout-container d-flex">
        <div
          className={`layout-icon d-none d-md-block ${
            layoutMode === "grid3" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("grid3")}
        >
          <TfiLayoutGrid3Alt />
        </div>
        <div
          className={`layout-icon ${layoutMode === "column2" ? "active" : ""}`}
          onClick={() => handleLayoutChange("column2")}
        >
          <RiLayoutGridFill />
        </div>
        <div
          className={`layout-icon d-none d-md-block ${
            layoutMode === "horizontalScroll" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("horizontalScroll")}
        >
          <TfiLayoutColumn2Alt />
        </div>
        <div
          className={`layout-icon ${
            layoutMode === "horizontalListing" ? "active" : ""
          }`}
          onClick={() => handleLayoutChange("horizontalListing")}
        >
          <TbLayoutListFilled />
        </div>
      </div>
    </div>
  );
}

LayoutControl.propTypes = {
  handleLayoutChange: PropTypes.func,
  layoutMode: PropTypes.oneOf([
    "horizontalListing",
    "grid3",
    "column2",
    "horizontalScroll",
  ]),
};
