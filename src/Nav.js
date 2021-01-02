import React from "react";
import "./Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Nav({ cartItems }) {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav__logo">Cart It!</div>
      </Link>
      <Link to="/cart">
        <div className="nav__cartItems">
          <ShoppingCartIcon className="nav__cartIcon" />
          <div className="nav__cartCount">{cartItems}</div>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
