import React from "react";
import "./Product.css";
import StarRatings from "../node_modules/react-star-ratings";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__title">{product.title}</div>
      <div className="product__price">
        <small>₹ {product.price}</small>
      </div>
      <div className="product__rating">
        <StarRatings
          starDimension="1.5vw"
          rating={product.rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starSpacing="0.5vw"
        />
      </div>
      <img className="product__img" src={product.image} alt="" />
      <button className="product__cartButton">Add to Cart</button>
    </div>
  );
}

export default Product;
