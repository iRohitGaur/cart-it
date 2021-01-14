import React from "react";
import "./Checkout.css";
import { Redirect } from "react-router-dom";

function Checkout({ cartCheckoutFlag }) {
  return (
    <div className="checkout__message">
      {cartCheckoutFlag ? "Thank you for the purchase!" : <Redirect to="/" />}
    </div>
  );
}

export default Checkout;
