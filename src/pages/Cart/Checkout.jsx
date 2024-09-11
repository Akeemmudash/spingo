import React from "react";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <div>
      <div className="checkout d-flex">
        <div className="formInfo">
          <div className="contactInformation">
            <div className="container">
              <h3>Contact Information</h3>
              <form>
                <div>
                  <label htmlFor="firstName">
                    First Name
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      required
                    />
                  </label>
                  <label htmlFor="lastName">
                    Last Name
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      required
                    />
                  </label>
                </div>
                <label htmlFor="phoneNumber">
                  Phone Number
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    required
                  />
                </label>
                <label htmlFor="emailAddress">
                  Email Address
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Your Email address"
                    required
                  />
                </label>
              </form>
            </div>
          </div>

          <div className="shipping-address">
            <div className="container">
              <h3>Shipping Address</h3>
              <form>
                <label htmlFor="streetAddress">
                  Street Address
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="Street Address"
                    required
                  />
                </label>
                <label htmlFor="country">
                  Country
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    required
                  />
                </label>
                <label htmlFor="city">
                  Town / City
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Town / city"
                    required
                  />
                </label>
                <div>
                  <label htmlFor="state">
                    State
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                      required
                    />
                  </label>
                  <label htmlFor="zipCode">
                    Zip Code
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      placeholder="Zip Code"
                      required
                    />
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="differentBilling"
                    name="differentBilling"
                  />
                  <label htmlFor="differentBilling">
                    Use a different billing address (optional)
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="payment-method">
            <div className="container">
              <h3>Payment Method</h3>
              <form>
                <div>
                  <input type="radio" id="creditCard" name="payment" />
                  <label htmlFor="creditCard">Pay by Card Credit</label>
                </div>
                <div>
                  <input type="radio" id="paypal" name="payment" />
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <hr />
                <label htmlFor="cardNumber">
                  Card Number
                  <input
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 1234 1234"
                    required
                  />
                </label>
                <div>
                  <label htmlFor="expiryDate">
                    Expiration Date
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      required
                    />
                  </label>
                  <label htmlFor="cvc">
                    CVC
                    <input
                      type="number"
                      id="cvc"
                      name="cvc"
                      placeholder="CVC code"
                      required
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <button type="submit">Place Order</button>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
