import React from "react";
import "./Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">Cart It!</div>
      <div className="nav__cartItems">
        <ShoppingCartIcon className="nav__cartIcon" />
        <div className="nav__cartCount">0</div>
      </div>
    </div>
  );
}

export default Nav;
