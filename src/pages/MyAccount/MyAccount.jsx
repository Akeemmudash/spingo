import React, { useState } from "react";
import { AccountInfo, AddressInfo, OrderInfo, Wishlist } from "../MyAccount";
import { SignIn } from "../SignUp";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("AccountInfo");

  const handleSectionClick = (section) => {
    if (section === "Logout") {
      // Redirect to the Sign In page
      window.location.href = "/login-in"; // Change "/sign-in" to your Sign In page route
      return;
    }
    setActiveSection(section);
  };

  return (
    <div>
      <h1 className="text-center">My Account</h1>
      <div className="sidebar-container">
        <div className="sidebar" role="tablist">
          <ul>
            <li
              className={activeSection === "AccountInfo" ? "active" : ""}
              onClick={() => handleSectionClick("AccountInfo")}
              role="tab"
              aria-selected={activeSection === "AccountInfo"}
            >
              Account Info
            </li>
            <li
              className={activeSection === "AddressInfo" ? "active" : ""}
              onClick={() => handleSectionClick("AddressInfo")}
              role="tab"
              aria-selected={activeSection === "AddressInfo"}
            >
              Address Info
            </li>
            <li
              className={activeSection === "OrderInfo" ? "active" : ""}
              onClick={() => handleSectionClick("OrderInfo")}
              role="tab"
              aria-selected={activeSection === "OrderInfo"}
            >
              Order Info
            </li>
            <li
              className={activeSection === "Wishlist" ? "active" : ""}
              onClick={() => handleSectionClick("Wishlist")}
              role="tab"
              aria-selected={activeSection === "Wishlist"}
            >
              Wishlist
            </li>
            <li
              className={activeSection === "Logout" ? "active" : ""}
              onClick={() => handleSectionClick("Logout")}
              role="tab"
              aria-selected={activeSection === "Logout"}
            >
              Logout
            </li>
          </ul>
        </div>

        <div className="content" role="tabpanel">
          {activeSection === "AccountInfo" && <AccountInfo />}
          {activeSection === "AddressInfo" && <AddressInfo />}
          {activeSection === "OrderInfo" && <OrderInfo />}
          {activeSection === "Wishlist" && <Wishlist />}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
