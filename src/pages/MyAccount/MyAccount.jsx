import React, { useState } from "react";
import { AccountInfo, AddressInfo, OrderInfo, Wishlist } from "../MyAccount";
import { RedFemale } from "../../assets";
import { MdOutlinePhotoCamera } from "react-icons/md";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("AccountInfo");

  const handleSectionClick = (section) => {
    if (section === "Logout") {
      window.location.href = "/login-in";
      return;
    }
    setActiveSection(section);
  };

  return (
    <div>
      <h1 className="text-center">My Account</h1>
      <div className="sidebar-container">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={RedFemale}
            alt=""
            style={{ display: "block", height: "150px", width: "150px" }}
          />
          <MdOutlinePhotoCamera
            style={{
              position: "absolute",
              bottom: "5px",
              right: "10px",
              width: "50px",
              height: "50px",
              color: "#fff",
              backgroundColor:  "#030206",
              border: "1px solid white",
              borderRadius: "50%"
            }}
          />
        </div>

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
