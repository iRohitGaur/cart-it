import React from "react";
import CartCheckout from "./CartCheckout";
import CartProduct from "./CartProduct";
import "./Cart.css";

function Cart({ cartItems, removeFromCart, clearCart }) {
  return (
    <div className="cart__container">
      <div className="cart__products">
        {cartItems.map((item, index) => (
          <CartProduct
            key={index}
            product={item}
            index={index}
            removeFromCart={(index) => removeFromCart(index)}
          />
        ))}
      </div>
      <div className="cart__checkout">
        <CartCheckout cartItems={cartItems} clearCart={() => clearCart()} />
      </div>
    </div>
  );
}

export default Cart;
