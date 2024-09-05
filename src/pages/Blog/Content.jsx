import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import {AllBlog, FeaturedBlog } from "../Blog";

const Content = () => {
  const [activeSection, setActiveSection] = useState("AllBlog");
  const [selectedItem, setSelectedItem] = useState("Sort by");

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
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
          <div className="shuffleTo">
            
          </div>
        </div>
      </div>
      <div className="sectionContent">
        {activeSection === "AllBlog" && <AllBlog />}
        {activeSection === "FeaturedBlog" && <FeaturedBlog />}
      </div>
    </div>
  );
};

export default Content;
