import React from "react";
import "./CartProducts.scss";

const CartProducts = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.imageURL} height={100} alt={product.name} />
      </div>
      <div className="item-name">{product.name}</div>
      <button className="delete"> - </button>
      <div className="item-price">Rs.{product.price}</div>
    </div>
  );
};

export default CartProducts;
