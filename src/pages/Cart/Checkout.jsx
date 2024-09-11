import React from "react";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout d-flex">
        <div className="formInfo flex-fill">
          <div className="contactInformation">
            <div className="container">
              <h3 className="section-title">Contact Information</h3>
              <form>
                <div className="d-flex">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    required
                  />
                </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Your Email address"
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="shipping-address mt-4">
            <div className="container">
              <h3 className="section-title">Shipping Address</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Town / City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Town / city"
                    required
                  />
                </div>
                <div className="d-flex">
                <div className="form-group justify-content-between">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    required
                  />
                </div>
                <div className="form-group justify-content-between">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip Code"
                    required
                  />
                </div>
                </div>
                <div className="form-group">
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

          <div className="payment-method mt-4">
            <div className="container">
              <h3 className="section-title">Payment Method</h3>
              <form>
                <div className="form-group">
                  <input
                    type="radio"
                    id="creditCard"
                    name="payment"
                    value="creditCard"
                  />
                  <label htmlFor="creditCard">Pay by Credit Card</label>
                </div>
                <div className="form-group">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                  />
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 1234 1234"
                    required
                  />
                </div>
                <div className="d-flex">
                <div className="form-group justify-content-between">
                  <label htmlFor="expiryDate">Expiration Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group justify-content-between">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC code"
                    required
                  />
                </div>
                </div>
              </form>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Place Order
          </button>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
