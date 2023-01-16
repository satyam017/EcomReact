import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_TO_CART } from "../service/Constant";
function ProductDetail() {
    const location= useLocation()
    const cartDispatch = useDispatch();
    const [currentQuantity , setstateQuantity] =   useState(1)
  return (
    <main className="main">
      <section className="product-wrapper" id={location.state.id}>
        <div className="container">
          <div className="product-images-wrapper">
            <div className="preview-image-wrapper">
              <img
                src={location.state.image}
                className="preview-image w-100"
                alt="Product Image"
              />
              <div className="arrows hide-for-desktop">
                <div className="next">
                  <img src="../assets/icon-next.svg" alt="Next Icon" />
                </div>
                <div className="prev">
                  <img src="../assets/icon-previous.svg" alt="Previous Icon" />
                </div>
              </div>
              <div className="count">
                <p>
                  <span className="current"></span> of
                  <span className="total"></span>
                </p>
              </div>
            </div>

            <div className="thumbs-wrapper hide-for-mobile">
              <div className="thumb-image active">
                <img
                  src="../assets/image-product-1-thumbnail.jpg"
                  alt="Product Thumb Image"
                />
              </div>
              <div className="thumb-image">
                <img
                  src="../assets/image-product-2-thumbnail.jpg"
                  alt="Product Thumb Image"
                />
              </div>
              <div className="thumb-image">
                <img
                  src="../assets/image-product-3-thumbnail.jpg"
                  alt="Product Thumb Image"
                />
              </div>
              <div className="thumb-image">
                <img
                  src="../assets/image-product-4-thumbnail.jpg"
                  alt="Product Thumb Image"
                />
              </div>
            </div>
          </div>
          <div className="product-details-wrapper">
            <p className="product-brabd">Sneaker Company</p>
            <h1 className="product-title">{location.state.title}</h1>
            <p className="product-description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="product-price">
              <div className="current-price-wrapper">
                <h2 className="current-price">${location.state.price}</h2>
                <span className="discount">${location.state.discount}</span>
              </div>
              <div className="previous-price-wrapper">
                <span className="previous-price">${location.state.realPrice}</span>
              </div>
            </div>

            <form action="#" className="add-to-cart-form">
              <div className="product-quantity">
                <button type="button" className="button minus" onClick={()=>{
                    setstateQuantity(prevState => prevState - 1)
                }}>
                  <img src="../assets/icon-minus.svg" alt="Minus Icon" />
                </button>
                <span className="product-quantity-num">{currentQuantity}</span>
                <button type="button" className="button plus" onClick={()=>{
                    setstateQuantity(prevState => prevState + 1)
                }}>
                  <img src="../assets/icon-plus.svg" alt="Plus Icon" />
                </button>
              </div>

              <button
                type="submit"
                aria-label="Add to cart"
                className="button add-btn"
                onClick={(e) => {
                    e.preventDefault();
                    cartDispatch({
                      type: ADD_TO_CART,
                      payload: {
                        id: `${location.state.id}`,
                        name: `${location.state.title}`,
                        price: `${location.state.price}`,
                        image: `${location.state.image}`,
                        qauntity: currentQuantity,
                      },
                    });
                  }}
              >
                <img src="../assets/icon-cart.svg" alt="" />
                Add to cart
              </button>

              <p className="form-alert"></p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
 
}

export default ProductDetail;
