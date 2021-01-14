import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { products } from "./products";
import Checkout from "./Checkout";

function App() {
  const [cartCheckoutFlag, setCartCheckoutFlag] = useState(false);

  const [cartItem, setCartItem] = useState(
    () => JSON.parse(window.localStorage.getItem("cartItem")) || []
  );

  React.useEffect(() => {
    window.localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    setCartCheckoutFlag(false);
    setCartItem([...cartItem, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItem];
    newCart.splice(index, 1);
    setCartItem(newCart);
  };

  const clearCart = () => {
    setCartCheckoutFlag(true);
    setCartItem([]);
  };

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItem ? cartItem.length : 0} />
        <Switch>
          <Route path="/cart">
            <Cart
              cartItems={cartItem}
              removeFromCart={(index) => removeFromCart(index)}
              clearCart={() => clearCart()}
            />
          </Route>
          <Route path="/checkout">
            <Checkout cartCheckoutFlag={cartCheckoutFlag} />
          </Route>
          <Route path="/">
            <Home
              products={products}
              addToCart={(product) => addToCart(product)}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
