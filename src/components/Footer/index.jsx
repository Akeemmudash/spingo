import "./footer.css";
import Logo from "../Logo";
import { footerNavItems, paymentMethods } from "../../constants";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto mb-0">
      <div className="w-100  text-white bg-primary-600 mb-0 text-center px-5 py-4">
        <div className="container">
          <div className="footer__nav d-flex align-items-center  flex-column flex-lg-row py-4">
            <div className=" border-white">
              <Logo variant="white" />
            </div>
            <div className="divider"></div>
            <p className="mb-0 fs-7 text-gray-100">
              Spare Parts | Towing Materials
            </p>
            <nav className="d-flex ms-lg-auto gap-lg-5 gap-4 mt-5 mt-lg-0 flex-lg-row flex-column ">
              {footerNavItems.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.path}
                  className={({ isActive }) =>
                    ` text-light d-block text-capitalize fs-7 ${
                      isActive ? "fw-semibold" : ""
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
          </div>
          <hr className="my-5" />
          <div className="footer__bottom fs-8 d-flex  flex-lg-row flex-column-reverse align- gap-3 align-items-lg-start align-items-center gap-lg-0">
            <p className="mb-0">Copyright © 2024 Vescan. All Rights Reserved</p>
            <div className="policy text-base-gray ms-lg-4  ps-lg-4 d-flex">
              <a href="#privacy-policy" className="d-block">
                Privacy Policy
              </a>{" "}
              <a href="terms-of-use" className="d-block ms-2">
                Terms of Use
              </a>
            </div>
            <ul
              className="payment-methods p-0 d-flex 
             gap-2 ms-lg-auto align-items-center"
            >
              {paymentMethods.map((method) => {
                const [key, value] = Object.entries(method)[0];

                return (
                  <li key={key} className="list-unstyled">
                    <img src={value} alt={key} className="" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
