import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./navbarlink.scss";


const Navbar = () => {
  return (
    <section className="navbar-link">
      <ul className="main-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
      </ul>
      <ul className="side-links">
      
        <Link to="/signin">
          <li>SignIn</li>
        </Link>
          <Link to="/register">
          <li>Register</li>
        </Link>
        
      </ul>
    </section>
  );
};

export default Navbar;
