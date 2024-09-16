import React from "react";
import { ControlArms, FuelPumps, OilFilters } from "../../assets";

const NotificationImage = ({ src, alt, notificationCount }) => (
  <div style={{ position: "relative", display: "inline-block" }}>
    {notificationCount > 0 && (
      <span
        style={{
          position: "absolute",
          top: "-15px", 
          right: "0px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          padding: "10px 15px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {notificationCount}
      </span>
    )}
    <img
      src={src}
      alt={alt}
      style={{
        height: "200px",
        width: "200px",
        objectFit: "cover",
        borderRadius: "10px",
      }}
    />
  </div>
);

const OrderCompletion = () => {
  return (
    <div className="ordercompletion text-center py-5">
      <div className="container">
        <p
          className="mb-3"
          style={{
            color: "#7C797A",
            fontSize: "28px",
            fontWeight: "500",
            fontFamily: "open-sauce-one",
          }}
        >
          Thank You! 🎉
        </p>
        <h1
          className="mb-4"
          style={{ fontSize: "40px", fontWeight: "400", fontFamily: "coolvetica" }}
        >
          Your order has been received
        </h1>

        {/* Image Row */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          <NotificationImage src={ControlArms} alt="Control Arms" notificationCount={5} />
          <NotificationImage src={FuelPumps} alt="Fuel Pumps" notificationCount={3} />
          <NotificationImage src={OilFilters} alt="Oil Filters" notificationCount={2} />
        </div>

        {/* Order Details */}
        <div
          className="order-details mb-4"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ paddingBottom: "15px" }}
          >
            <span style={{ fontWeight: "bold" }}>Order Code:</span>
            <p style={{ margin: 0 }}>#01234_456789</p>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ paddingBottom: "15px" }}
          >
            <span style={{ fontWeight: "bold" }}>Date:</span>
            <p style={{ margin: 0 }}>August 18, 2024</p>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ paddingBottom: "15px" }}
          >
            <span style={{ fontWeight: "bold" }}>Total:</span>
            <p style={{ margin: 0 }}>$1,345.00</p>
          </div>
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={{ paddingBottom: "15px" }}
          >
            <span style={{ fontWeight: "bold" }}>Payment Method:</span>
            <p style={{ margin: 0 }}>Credit Card</p>
          </div>
        </div>

        {/* Button */}
        <button
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "30px",
            backgroundColor: "#001F3F",
            border: "none",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "grey")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#001F3F")}
        >
          Purchase History
        </button>
      </div>
    </div>
  );
};

export default OrderCompletion;
