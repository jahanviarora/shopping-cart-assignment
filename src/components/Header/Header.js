import React from "react";
import Image from "../blocks/image/Image";
import "./header.scss";
import NavbarLink from "../blocks/NavbarLink/NavbarLink";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const prts = sessionStorage.getItem('key')
  const json = JSON.parse(prts);
 console.log(json);

  return (
    <header role="banner">
      <section className="container">
        <nav className="navbar" aria-label="Main Navigation" ole="navigation">
          <section className="logo">
            <BrowserRouter>
             
                <Image name={`logo.png`} alt="Sabka Bazaar logo" tabIndex={0}></Image>
              
            </BrowserRouter>
          </section>
          <NavbarLink />
          
          <section className='flex'>
          <Link to="/cart">
          <button className='cart-wrap'  tabIndex={0}>
          <FontAwesomeIcon icon={faShoppingCart} />
              <span> {json ==null ? 0 : json.length} Items</span>
            </button>
            </Link>
            </section>
        </nav>
      </section>
    </header>



  );
};
export default Header;
