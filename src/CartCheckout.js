import React from "react";
import "./CartCheckout.css";
import { Link } from "react-router-dom";

function CartCheckout({ cartItems, clearCart }) {
  const calculateAmount = () => {
    var total = 0;
    cartItems.forEach((item) => {
      total = parseFloat(total) + parseFloat(item.price.replace(",", ""));
    });
    return total;
  };
  return (
    <div className="checkout__bg">
      <h2>Checkout</h2>
      <h3>Total items: {cartItems.length}</h3>
      <h3>Total Amount: ${calculateAmount()}</h3>
      <Link to="/checkout">
        <button className="checkout__button" onClick={clearCart}>
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartCheckout;
