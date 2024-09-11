import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

const AddressInfo = () => {
  return (
    <div className="address-info-container">
      <h2 className="address-info-title">Address Information</h2>
      <div className="address-cards d-flex justify-content-around">
        {/* Billing Address */}
        <div className="address-card d-flex justify-content-around p-4" style={{ border: "1px solid black"}}>
          <div className="address-details">
            <h3>Billing Address</h3>
            <p className="name">Sofia Havertz</p>
            <p className="phone">(+234) 814 567 8908</p>
            <p className="address">125, Maryland, Ikeja, Lagos State</p>
          </div>
          <div className="edit-button">
            <p>
              Edit <AiOutlineEdit />
            </p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="address-card d-flex justify-content-around p-4" style={{ border: "1px solid black"}}>
          <div className="address-details">
            <h3>Shipping Address</h3>
            <p className="name">Sofia Havertz</p>
            <p className="phone">(+234) 814 567 8908</p>
            <p className="address">125, Maryland, Ikeja, Lagos State</p>
          </div>
          <div className="edit-button">
            <p>
              Edit <AiOutlineEdit />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
