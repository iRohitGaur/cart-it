import React from "react";
import "./CartProduct.css";
import StarRatings from "react-star-ratings";

function CartProduct({ product, index, removeFromCart }) {
  return (
    <div className="cart__product">
      <div>
        <img className="cart__productImg" src={product.image} alt="" />
      </div>
      <div className="cart__details">
        <div className="cart__productTitle">{product.title}</div>
        <div className="cart__productPriceRating">
          <small>₹ {product.price}</small>
          <small className="cart__productRating">
            <StarRatings
              starDimension="1vw"
              rating={product.rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5vw"
            />
          </small>
        </div>
        <button
          onClick={() => removeFromCart(index)}
          className="cart__productCartButton"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
