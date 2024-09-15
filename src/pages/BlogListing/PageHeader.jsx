import { RxSection } from "react-icons/rx";
import { OilFilters } from "../../assets"; // Ensure the image is correctly imported
import Breadcrumb from "../../components/Breadcrumb";

const PageHeader = () => {
  return (
    <section className="pageheader container position-relative">
      <div className="header-overlay">
        <img
          src={OilFilters}
          alt="Oil Filters "
          className="w-100 pageheader__img h-100 position-absolute z-n1 object-fit-cover top-0 start-0"
        />
        <div className="text-overlay bg-opacity-25 bg-black w-100 h-100 position-absolute top-0 start-0  text-white d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <Breadcrumb />
            <h1>Our Blog</h1>
            <p className="pageheader__paragraph">
              Let&apos;s get the best spare parts you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
