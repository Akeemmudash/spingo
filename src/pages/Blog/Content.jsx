import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { AllBlog, FeaturedBlog } from "../Blog";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutGrid3Alt, TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TbLayoutListFilled } from "react-icons/tb";

const Content = () => {
  const [activeSection, setActiveSection] = useState("AllBlog");
  const [selectedItem, setSelectedItem] = useState("Sort by");
  const [layoutMode, setLayoutMode] = useState("list");

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleLayoutChange = (mode) => {
    setLayoutMode(mode);
  };

  return (
    <div>
      <div className="header-content">
        <div className="header-left">
          <p
            className={activeSection === "AllBlog" ? "active" : ""}
            onClick={() => handleSectionClick("AllBlog")}
          >
            All Blog
          </p>
          <p
            className={activeSection === "FeaturedBlog" ? "active" : ""}
            onClick={() => handleSectionClick("FeaturedBlog")}
          >
            Featured Blogs
          </p>
        </div>
        <div className="header-right">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="body" id="dropdown-basic">
              {selectedItem} <FaChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
              <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
              <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

      {/* Apply layout changes to blog content only */}
      <div className={`sectionContent ${layoutMode}`}>
        {activeSection === "AllBlog" && <AllBlog />}
        {activeSection === "FeaturedBlog" && <FeaturedBlog />}
      </div>
    </div>
  );
};

export default Content;
