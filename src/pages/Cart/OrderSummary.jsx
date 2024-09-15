import React, { useState } from "react";
import { FuelPumps } from "../../assets";
import { motion } from "framer-motion";

const OrderSummary = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Alternator Unit",
      price: 38.0,
      quantity: 1,
      quality: "excellence",
    },
    {
      id: 2,
      name: "Fuel Pump",
      price: 38.0,
      quantity: 1,
      quality: "excellence",
    },
    {
      id: 3,
      name: "Oil Filter",
      price: 38.0,
      quantity: 1,
      quality: "excellence",
    },
  ]);

  // Function to increment the quantity
  const incrementCounter = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement the quantity
  const decrementCounter = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h3>Order Summary</h3>
      {items.map((item) => (
        <div key={item.id} className="d-flex justify-content-between gap-5">
          <div>
            <img
              src={FuelPumps}
              alt={item.name}
              style={{ height: "100px", width: "100px" }}
            />
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
          <div>
            <p>${item.price.toFixed(2)}</p>
            <p
              onClick={() => removeItem(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO3YT0sCQRyH8YeuUu0KG/RHUG8efAceetFBJ6noEKUI6iG1wHolxcIYg6wi67Qzs3w/IHga92F09zeCiIiIiMg/6QEPwKXDNRvAHXBLhYbADzAHLhysdwo8W2ueUJEMmJoPfj9yZ/KdeDRrfQNdKpYCY3MBC+DKQUQHT46JsSO+fEYUxSwPjMkjnkKKsGNGVsw1u50BLyFGFMWsdsQEH7GR7Ik534poE7hkK+YmxoiNJjAxF/4BvJr3n0CLyCTAmwnIX+uYdqJ2Ic06fLWSgjtXdD/2dM/tN5pnSHrA0z3Y0aTMvBVsTFpiAg5mfHc9xnuNyaxT4qLkKbFhzv7eTocZMHN41PUWM6zLnw99E+Miwo65BwYO1xQRERER4c8v6Th7MMbV15kAAAAASUVORK5CYII="
                alt="Remove"
              />
            </p>
          </div>
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
          $
          {items
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
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
