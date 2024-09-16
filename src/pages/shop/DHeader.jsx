import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutGrid3Alt, TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TbLayoutListFilled } from "react-icons/tb";

const DHeader = () => {
  const [activeSection, setActiveSection] = useState("AllProducts");

  // Separate state for each dropdown
  const [categorySort, setCategorySort] = useState("Sort by");
  const [featuredSort, setFeaturedSort] = useState("Sort by");
  const [generalSort, setGeneralSort] = useState("Sort by");

  const [layoutMode, setLayoutMode] = useState("list");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLayoutChange = (mode) => {
    setLayoutMode(mode);
  };

  return (
    <div>
      <div className="header-content">
        <div className="header-left">
          {/* Categories Section */}
          <div>
            <label
              className={activeSection === "AllProducts" ? "active" : ""}
              onClick={() => handleSectionClick("AllProducts")}
            >
              CATEGORIES
            </label>
            <Dropdown onSelect={(e) => setCategorySort(e)}>
              <Dropdown.Toggle variant="body" id="dropdown-basic">
                {categorySort} <FaChevronDown />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
                <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
                <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Featured Products Section */}
          <div>
            <label
              className={activeSection === "FeaturedProduct" ? "active" : ""}
              onClick={() => handleSectionClick("FeaturedProduct")}
            >
              Featured Product
            </label>
            <Dropdown onSelect={(e) => setFeaturedSort(e)}>
              <Dropdown.Toggle variant="body" id="dropdown-basic">
                {featuredSort} <FaChevronDown />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
                <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
                <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* General Sorting Dropdown */}
        <div className="header-right">
          <Dropdown onSelect={(e) => setGeneralSort(e)}>
            <Dropdown.Toggle variant="body" id="dropdown-basic">
              {generalSort} <FaChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
              <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
              <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Layout Mode Controls */}
          <div className="layout-controls">
            <div className="layout-container">
              <div
                className={`layout-icon ${
                  layoutMode === "grid3" ? "active" : ""
                }`}
                onClick={() => handleLayoutChange("grid3")}
              >
                <TfiLayoutGrid3Alt />
              </div>
              <div
                className={`layout-icon ${
                  layoutMode === "gridFill" ? "active" : ""
                }`}
                onClick={() => handleLayoutChange("gridFill")}
              >
                <RiLayoutGridFill />
              </div>
              <div
                className={`layout-icon ${
                  layoutMode === "column2" ? "active" : ""
                }`}
                onClick={() => handleLayoutChange("column2")}
              >
                <TfiLayoutColumn2Alt />
              </div>
              <div
                className={`layout-icon ${
                  layoutMode === "list" ? "active" : ""
                }`}
                onClick={() => handleLayoutChange("list")}
              >
                <TbLayoutListFilled />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply layout changes to content
      <div className={`sectionContent ${layoutMode}`}>
        {activeSection === "AllProducts" && (
        )}
      </div>
    </div> */}
    </div>
  );
};
export default DHeader;
