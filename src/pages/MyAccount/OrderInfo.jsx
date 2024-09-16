import React from "react";

const OrderInfo = () => {
  return (
    <div className="order-info-container">
      <h2 className="order-info-title">Order History</h2>
      <div className="order-table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#3456_768</th>
              <td>August 18, 2024</td>
              <td>Delivered</td>
              <td>$1,234.00</td>
            </tr>
            <tr>
              <th scope="row">#7894_564</th>
              <td>July 10, 2024</td>
              <td>In Transit</td>
              <td>$567.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderInfo;
