import React, { useState } from "react";
import { Checkout, OrderCompletion, ShoppingCart } from "./index";

const CartPage = () => {
  const [activeSection, setActiveSection] = useState("ShoppingCart");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="cartpage">
        <h1
          className={`text-center ${
            activeSection === "CheckoutDetails" ? "checkout-active" : ""
          }`}
        >
          Cart
        </h1>

        <div className="process">
          <div
            className={`process-frame ${
              activeSection === "ShoppingCart" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("ShoppingCart")}
          >
            <div className="number-circle">
              <span className="number">1</span>
            </div>
            <h3 className="process-title">Shopping Cart</h3>
          </div>
          <div
            className={`process-frame ${
              activeSection === "CheckoutDetails" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("CheckoutDetails")}
          >
            <div className="number-circle">
              <span className="number">2</span>
            </div>
            <h3 className="process-title">Checkout details</h3>
          </div>
          <div
            className={`process-frame ${
              activeSection === "OrderComplete" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("OrderComplete")}
          >
            <div className="number-circle">
              <span className="number">3</span>
            </div>
            <h3 className="process-title">Order complete</h3>
          </div>
        </div>

        {/* Render section content based on the active section */}
        <div className="section-content">
          {activeSection === "ShoppingCart" && <ShoppingCart />}
          {activeSection === "CheckoutDetails" && <Checkout />}
          {activeSection === "OrderComplete" && <OrderCompletion />}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
