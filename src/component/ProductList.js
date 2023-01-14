import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { pro } from "../ProductArray/ProductArray";


function ProductList() {

  return (
    <section style={{marginTop: ' 60px'}}>
      <Container>
        <Row>
        {
            pro.filter(el=> (el.category === 'men')).map((el)=>{
                  return (
                  <Col lg={4} key={el.id}>
                    <div className="product-card" style={{backgroundColor: '#fff', boxShadow: '0px 0px 30px 0px rgba(0,0,0.1px,0)'}}>
                      <img
                        src={el.imgLink}
                        className="w-100 rounded"
                      />
                      <div className="product-details-wrapper" style={{padding:'28px 0'}}>
                        <h1 className="product-title" style={{fontSize:'30px',marginTop:'16px'}}>{el.title}</h1>
                        <div className="product-price">
                          <div className="current-price-wrapper">
                            <h2 className="current-price">{el.price}</h2>
                            <span className="discount">50%</span>
                          </div>
                          <div className="previous-price-wrapper">
                            <span className="previous-price">$250.00</span>
                          </div>
                        </div>
        
                        <form className="add-to-cart-form" style={{marginTop: '16px'}}>
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
                  </Col>
                    )
                
            })
        }
          
        </Row>
      </Container>
    </section>
  );
}

export default ProductList;
