import React from "react";

function ProductDetail() {
  return (
    <main className="main">
      <section className="product-wrapper">
        <div className="container">
          <div className="product-images-wrapper">
            <div className="preview-image-wrapper">
              <img
                src="../assets/image-product-1.jpg"
                className="preview-image"
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
            <h1 className="product-title">Fall Limited Edition Sneakers</h1>
            <p className="product-description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="product-price">
              <div className="current-price-wrapper">
                <h2 className="current-price">$125.00</h2>
                <span className="discount">50%</span>
              </div>
              <div className="previous-price-wrapper">
                <span className="previous-price">$250.00</span>
              </div>
            </div>

            <form action="#" className="add-to-cart-form">
              <div className="product-quantity">
                <button type="button" className="button minus">
                  <img src="../assets/icon-minus.svg" alt="Minus Icon" />
                </button>
                <span className="product-quantity-num">0</span>
                <button type="button" className="button plus">
                  <img src="../assets/icon-plus.svg" alt="Plus Icon" />
                </button>
              </div>

              <button
                type="submit"
                aria-label="Add to cart"
                className="button add-btn"
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
