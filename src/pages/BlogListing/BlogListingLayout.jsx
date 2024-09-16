import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import Button from "../../components/Button";
import LayoutControl from "../../components/LayoutControl";

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

  switch (layoutMode) {
    case "grid3":
      layoutClasses = "col-12 col-sm-6 col-md-4";
      break;
    case "column2":
      layoutClasses = "col-12 col-sm-6";
      break;
    case "horizontalScroll":
      layoutClasses = "col-12 col-sm-4 col-lg-3";
      break;
    default:
      layoutClasses = "col-6";
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
          <div className="d-none d-md-block">
            <LayoutControl
              handleLayoutChange={handleLayoutChange}
              layoutMode={layoutMode}
            />
          </div>
        </div>
      </div>
      <div className={`${layoutMode} row mt-5 row-gap-2 row-gap-sm-5`}>
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
      <div className="mt-4 mt-md-5 text-center text-base-black">
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
