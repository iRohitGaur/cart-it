import React from "react";
import Product from "./Product";
import "./Home.css";

function Home({ products, addToCart }) {
  return (
    <>
      <div className="home">
        {products
          .filter((product) => product.category === "electronics")
          .map((item) => (
            <Product
              key={item.id}
              product={item}
              addToCart={(product) => addToCart(product)}
            />
          ))}
      </div>
      <div className="home">
        {products
          .filter((product) => product.category === "books")
          .map((item) => (
            <Product
              key={item.id}
              product={item}
              addToCart={(product) => addToCart(product)}
            />
          ))}
      </div>
      <div className="home">
        {products
          .filter((product) => product.category === "chair")
          .map((item) => (
            <Product
              key={item.id}
              product={item}
              addToCart={(product) => addToCart(product)}
            />
          ))}
      </div>
    </>
  );
}

export default Home;
