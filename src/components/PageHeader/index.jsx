import { OilFilters } from "../../assets"; // Ensure the image is correctly imported
import Breadcrumb from "../Breadcrumb";
import PropTypes from "prop-types";
import "./page-header.css";
const PageHeader = ({ heading, paragraph }) => {
  return (
    <section className="pageheader container  ">
      <div className="header-overlay h-100 position-relative rounded-4 overflow-hidden">
        <img
          src={OilFilters}
          alt="Oil Filters "
          className="w-100 pageheader__img h-100 position-absolute z-n1 object-fit-cover top-0 start-0"
        />
        <div className="text-overlay bg-opacity-25 bg-black w-100 h-100 position-absolute top-0 start-0  text-white d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center px-4 text-center">
            <Breadcrumb />
            <h1>{heading}</h1>
            <p className="pageheader__paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};
export default PageHeader;
