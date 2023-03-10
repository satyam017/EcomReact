import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="flex flex-ai-c flex-jc-sb">
            <div className="navgations flex flex-ai-c">
              <div className="toggle-menu hide-for-desktop">
                <img src="../assets/icon-menu.svg" alt="Burger Menu" />
              </div>

              <div className="logo">
                <img src="../assets/logo.svg" alt="Sneakers Logo" />
              </div>

              <div className="main-navgation hide-for-mobile">
                <NavLink to="/">All</NavLink>
              </div>

              <div className="mobile-navgation hide-for-desktop">
                <div className="close-menu">
                  <img src="../assets/icon-close.svg" alt="Close Icon" />
                </div>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div className="controls flex flex-ai-c">
              <div className="cart">
              
                <div
                  className="cart-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    // let cart = document.querySelector('.cart')
                    // let cartIcon = e.target.closest(".cart-icon");
                    // cartIcon ? cart.classList.toggle("open") : "";
                    // console.log(cartIcon);
                   
                  }}
                >
                  <span className="in-cart">2</span>
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Cart Icon</title>
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#69707D"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
               <Cart/>
              </div>
              <div className="user-account">
                <div className="user-avater">
                  <img src="../assets/image-avatar.png" alt="User Avater" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
