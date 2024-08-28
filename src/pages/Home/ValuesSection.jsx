import React from "react";
import { CiDeliveryTruck, CiLock } from "react-icons/ci";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import "./home.css";

const ValuesSection = () => {
  const values = [
    {
      ValueIcon: <CiDeliveryTruck />,
      ValueInfo: "Free Delivery",
      ValuePin: "Order above $200",
    },
    {
      ValueIcon: <LiaMoneyBillSolid />,
      ValueInfo: "Money-back",
      ValuePin: "30 days guarantee",
    },
    {
      ValueIcon: <CiLock />,
      ValueInfo: "Secure Payments",
      ValuePin: "Secured by Stripe",
    },
    {
      ValueIcon: <FaPhone />,
      ValueInfo: "24/7 Support",
      ValuePin: "Phone and Email support",
    },
  ];

  return (
    <div className="value-section">
      {values.map((value, index) => (
        <div key={index} className="value-item">
         <div className="contain">
         <div className="value-icon">{value.ValueIcon}</div>
          <div className="value-info">
            <p>{value.ValueInfo}</p>
          </div>
          <div className="value-pin">
            <p>{value.ValuePin}</p>
          </div>
         </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
