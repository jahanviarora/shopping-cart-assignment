import React, { useState, useCallback, useEffect } from "react";
import "./Cart.scss";
import { useHistory } from "react-router-dom";

import CartProducts from "../blocks/CartProducts/CartProducts";

const Cart = () => {
  const history = useHistory();

  const prts = sessionStorage.getItem("key");
  const json = JSON.parse(prts);
  console.log(json);

  const buttonClickHandeler = () => {
    json.length > 0 ? history.push("/home") : history.push("/products");
  };
  return (
    <div className="cart">
      ,
      {json !== null ? (
        <div className="cart-filled">
          <h2>My Cart</h2>
          <section>
            {json &&
              json.map((product) => {
                return (
                  <div key={product.id} className="item">
                    <CartProducts product={product} />
                  </div>
                );
              })}
            <div className="advertisement">
              <img
                className="addv-image"
                src="../static/images/lowest-price.png"
                alt="Sabka Bazaar Logo"
              />{" "}
              you wont find it cheaper anywhere!
            </div>
          </section>
        </div>
      ) : (
        <div className="cart-empty">
          <div>
            <h2>No items in your cart</h2>
            <p>Your favourite items are just a click away</p>
          </div>
        </div>
      )}
      <div className="buttons">
        <button
          type="button"
          onClick={buttonClickHandeler}
          onKeyPress={buttonClickHandeler}
          tabIndex={0}
        >
          {json !== null ? "Proceed to checkout" : "Start Shopping"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
