import React from "react";
import { OilFilters } from "../../assets"; // Ensure the image is correctly imported

const PageHeader = () => {
  return (
    <div className="pageheader">
      <div className="header-overlay">
        <img src={OilFilters} alt="Oil Filters" />
        <div className="text-overlay">
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">
              Home
            </a>
            <span className="breadcrumb-item active" aria-current="page">
              Blog
            </span>
          </nav>
          <h1>Our Blog</h1>
          <p>Let's get the best spare parts you want.</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
