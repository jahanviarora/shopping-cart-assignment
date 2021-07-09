import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";

const arr = [];
const ProductDetails = ({ products }) => {
  const buyNowHandeler = (product) => {
    arr.push(product);
    console.log(arr);
    sessionStorage.setItem("key", JSON.stringify(arr));
  };

  return (
    <div className="product-card">
      <div className="product-title">{products.name}</div>
      <div className="product-details">
        <img
          className="product-image"
          src={products.imageURL}
          alt={products.name}
        ></img>
        <div className="product-description">{products.description} </div>
      </div>
      <div className="product-price-details">
        <div className="price"> MRP Rs {products.price}</div>
        {/* <button className="buy-button"  onClick={() => buyNowHandeler(products.id)} tabIndex={0} onKeyPress={() => buyNowHandeler(product.id)}> */}
        <button
          className="buy-button"
          onClick={() => buyNowHandeler(products)}
          tabIndex={0}
        >
          Buy Now <span className="button-price"> @ Rs. {products.price}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
