import React from "react";
import ProductCart from "./ProductCart";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="home">
      {cartItems.map((item, index) => (
        <ProductCart
          key={index}
          product={item}
          index={index}
          removeFromCart={(index) => removeFromCart(index)}
        />
      ))}
    </div>
  );
}

export default Cart;
