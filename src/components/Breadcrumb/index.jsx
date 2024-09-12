import { Link, useLocation } from "react-router-dom";

import "./breadcrumb.css";
import { ChevronRight } from "../../assets/icons";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb font-secondary">
      <ol className="breadcrumb__list d-flex gap-2 list-unstyled fs-7">
        {pathnames.length > 0 ? (
          <>
            <li className="breadcrumb__item">
              <Link to="/" className="breadcrumb__link text-base-gray">
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

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li
              key={to}
              className="breadcrumb__item fw-semibold active"
              aria-current="page"
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <>
              <li key={to} className="breadcrumb__item">
                <Link to={to} className="breadcrumb__link text-base-gray">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              </li>
              <span className="me-2">
                <ChevronRight />
              </span>{" "}
            </>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
