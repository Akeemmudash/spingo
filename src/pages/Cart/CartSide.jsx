import React from "react";

const CartSide = () => {
  return (
    <div>
      <div className="cartside">
        <div className="container">
            <h2>Cart Summary</h2>
            <div>
                <input type="radio" name="shipping" />
                <p>Free Shipping</p>
                <span>$0.00</span>
            </div>
            <div>
                <input type="radio" name="shipping" />
                <p>Express Shipping</p>
                <span>+$15.00</span>
            </div>
            <div>
                <input type="radio" name="shipping" />
                <p>Pick Up</p>
                <span>%21.00</span>
            </div>
            <div>
                <span>Subtotal</span>
                <p>$1234.00</p>
            </div>
            <div>
                <span>Total</span>
                <p>$1234.00</p>
            </div>
            <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSide;
