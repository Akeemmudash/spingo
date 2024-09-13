import React from "react";
import { OilFilters } from "../../assets"; // Ensure the image is correctly imported

const PageHeader = ({pageH1, PageLocation, pageP}) => {
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
              {PageLocation}
            </span>
          </nav>
          <h1>{pageH1}</h1>
          <p>{pageP}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
