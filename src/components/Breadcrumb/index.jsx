import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";
import { ChevronRight } from "../../assets/icons";

function Breadcrumb() {
  const location = useLocation();
  const pathUrlSections = location.pathname.split("/").filter((x) => x);
  const pathNames = pathUrlSections.filter((x) => isNaN(x));
  return (
    <nav aria-label="breadcrumb" className="font-secondary mt-2">
      <ol className="breadcrumb__list d-flex gap-2 list-unstyled fs-7">
        {pathNames.length > 0 ? (
          <>
            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link">
                Home
              </Link>
            </li>
            <span className="me-2">
              <ChevronRight />
            </span>
          </>
        ) : (
          <li className="breadcrumb__item fw-semibold active">Home</li>
        )}

        {pathNames.map((value, index) => {
          const to = `/${pathUrlSections.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          const isNumber = !isNaN(value);
          if (isLast) {
            return (
              <li
                key={to}
                className="breadcrumb__item fw-semibold active"
                aria-current="page"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </li>
            );
          } else {
            return (
              <>
                <li key={to} className="breadcrumb__item">
                  <Link to={to} className="breadcrumb__link">
                    {!isNumber &&
                      value.charAt(0).toUpperCase() + value.slice(1)}
                  </Link>
                </li>
                <span className="me-2">
                  <ChevronRight />
                </span>
              </>
            );
          }
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
