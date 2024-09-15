import React, { useState } from "react";
import { motion } from "framer-motion";
import { ControlArms } from "../../assets";
import CartSide from "./CartSide";

const ShoppingCart = () => {
  const price = 20.0;

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sample Product 1", quality: "Excellent", quantity: 1 },
    { id: 2, name: "Sample Product 2", quality: "Excellent", quantity: 1 },
    { id: 3, name: "Sample Product 3", quality: "Excellent", quantity: 1 },
  ]);

  const incrementCounter = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCounter = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderCartItem = (item) => (
    <tr key={item.id}>
      <td colSpan="3">
        <div className="product-fImg">
          <div>
            <img
              src={ControlArms}
              alt={item.name}
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <div className="product-fdetails">
            <p>{item.name}</p>
            <span>Quality: {item.quality}</span>
            <p
              onClick={() => removeItem(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO3YT0sCQRyH8YeuUu0KG/RHUG8efAceetFBJ6noEKUI6iG1wHolxcIYg6wi67Qzs3w/IHga92F09zeCiIiIiMg/6QEPwKXDNRvAHXBLhYbADzAHLhysdwo8W2ueUJEMmJoPfj9yZ/KdeDRrfQNdKpYCY3MBC+DKQUQHT46JsSO+fEYUxSwPjMkjnkKKsGNGVsw1u50BLyFGFMWsdsQEH7GR7Ik534poE7hkK+YmxoiNJjAxF/4BvJr3n0CLyCTAmwnIX+uYdqJ2Ic06fLWSgjtXdD/2dM/tN5pnSHrA0z3Y0aTMvBVsTFpiAg5mfHc9xnuNyaxT4qLkKbFhzv7eTocZMHN41PUWM6zLnw99E+Miwo65BwYO1xQRERER4c8v6Th7MMbV15kAAAAASUVORK5CYII="
                alt="Remove"
              />
              Remove
            </p>
          </div>
        </div>
      </td>
      <td>
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
      </td>
      <td>${price.toFixed(2)}</td>
      <td>${(price * item.quantity).toFixed(2)}</td>
    </tr>
  );

  return (
    <div className="shoppingCart">
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan="3">
                Product
              </th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>{cartItems.map(renderCartItem)}</tbody>
        </table>

        {/* Mobile display */}
        <div className="sm-display">
          {cartItems.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <img
                    src={ControlArms}
                    alt={item.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Quality: {item.quality}</p>
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
                  <p>${price.toFixed(2)}</p>
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
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="coupon-section">
          <h4>Have a Coupon?</h4>
          <span>Add your code for an instant cart discount</span>
          <div className="coupon-input">
            <input type="text" placeholder="Coupon code" />
            <button className="apply-btn">Apply</button>
          </div>
        </div>

        {/* Cart Summary */}
        <CartSide />
      </div>
    </div>
  );
};

export default ShoppingCart;
