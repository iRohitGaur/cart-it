import React from "react";
import Product from "./Product";

function Cart({ cartItems }) {
  return (
    <div className="home">
      {cartItems.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Cart;
