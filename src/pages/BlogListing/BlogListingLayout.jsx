import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutGrid3Alt, TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TbLayoutListFilled } from "react-icons/tb";
import ArticleCard from "../../components/ArticleCard";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

const Content = () => {
  const [selectedItem, setSelectedItem] = useState("Sort by");
  const [layoutMode, setLayoutMode] = useState("grid3");

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  const handleLayoutChange = (mode) => {
    setLayoutMode(mode);
  };
  let blogCardLayoutType = "vertical";
  let layoutClasses = "";
  if (layoutMode === "grid3") {
    layoutClasses = "col-12 col-sm-6 col-md-4";
  } else if (layoutMode === "column2") {
    layoutClasses = " col-12 col-sm-6";
  } else if (layoutMode === "horizontalScroll") {
    layoutClasses = "col-12 col-sm-4 col-lg-3";
  } else {
    layoutClasses = "col-12";
    blogCardLayoutType = "horizontal";
  }

  return (
    <section className="container mt-5">
      <div className="header-content d-flex align-items-center justify-content-between ">
        <div className="header-left">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `blog-listing__tab fw-semibold  me-4 me-md-5 pb-1${
                isActive ? " active" : ""
              }`
            }
            end
          >
            All Blog
          </NavLink>
          <NavLink
            to="/blog/featured"
            className={({ isActive }) =>
              `blog-listing__tab fw-semibold pb-1${isActive ? " active" : ""}`
            }
            end
          >
            Featured
          </NavLink>
        </div>
        <div className="header-right d-flex align-items-center">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className="fw-medium px-3"
            >
              {selectedItem} <FaChevronDown />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Type">Type</Dropdown.Item>
              <Dropdown.Item eventKey="Size">Size</Dropdown.Item>
              <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="layout-controls d-md-block d-none">
            <div className="layout-container d-flex">
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
                  layoutMode === "column2" ? "active" : ""
                }`}
                onClick={() => handleLayoutChange("column2")}
              >
                <RiLayoutGridFill />
              </div>
              <div
                className={`layout-icon ${
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
        </div>
      </div>
      <div
        className={`${
          layoutMode === "horizontalScroll" ? "horizontal-carousel " : ""
        }row mt-5 row-gap-2 row-gap-sm-5`}
      >
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
        <div className={layoutClasses}>
          <ArticleCard
            title="Enhancing Vehicle Maintenance"
            layoutType={blogCardLayoutType}
          />
        </div>
      </div>
      <div className="mt-4 mt-md-5 text-center">
        <Button
          variant="outline"
          className="show-more-btn rounded-pill px-5 py-3"
        >
          Show More
        </Button>
      </div>
    </section>
  );
};

export default Content;
