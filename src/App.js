import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { products } from "./products";

function App() {
  const [cartItem, setCartItem] = useState(
    () => JSON.parse(window.localStorage.getItem("cartItem")) || []
  );

  React.useEffect(() => {
    window.localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (product) => {
    setCartItem([...cartItem, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItem];
    newCart.splice(index, 1);
    setCartItem(newCart);
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
            />
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
