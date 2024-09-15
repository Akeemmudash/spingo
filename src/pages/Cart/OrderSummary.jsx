import React, { useState } from "react";
import { FuelPumps } from "../../assets";
import { motion } from "framer-motion";

const OrderSummary = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Alternator Unit", price: 38.00, quantity: 1, quality: "excellence" },
    { id: 2, name: "Fuel Pump", price: 38.00, quantity: 1, quality: "excellence" },
    { id: 3, name: "Oil Filter", price: 38.00, quantity: 1, quality: "excellence" }
  ]);

  // Function to increment the quantity
  const incrementCounter = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Function to decrement the quantity
  const decrementCounter = (id) => {
    setItems(items.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <div>
      <h3>Order Summary</h3>
      {items.map((item) => (
        <div key={item.id}>
          <div style={{ height: "50px", width: "50px" }}>
            <img src={FuelPumps} alt={item.name} />
          </div>
          <div>
            <p>{item.name}</p>
            <span>Quality: {item.quality}</span>
            <div className="crement-2">
              <motion.button
                onClick={() => decrementCounter(item.id)}
                className="quantity-btn"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                -
              </motion.button>
              <p className="input-value">{item.quantity}</p>
              <motion.button
                onClick={() => incrementCounter(item.id)}
                className="quantity-btn"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.button>
            </div>
          </div>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
      
      <div>
        <input type="text" placeholder="Input promo code" />
        <p>Apply</p>
      </div>
      <div>
        <p>JenkateMW</p>
        <span>-$25.00 [remove]</span>
      </div>
      <div>
        <p>Shipping</p>
        <span>Free</span>
      </div>
      <div>
        <p>Subtotal</p>
        <span>
          ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </span>
      </div>
      <div>
        <p>Total</p>
        <span>$234.00</span>
      </div>
    </div>
  );
};

export default OrderSummary;
