import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_FROM_CART } from "../service/Constant";
function Cart() {
  const state = useSelector(state=>state);
  const cartDelete = useDispatch();
    const deState = state.cartState.cardData;
    // const length = deState.length;
    return (
      <div className="cart-list-wrapper">
        {/* <input type='hidden' value={length}/> */}
        
          
      <h3 className="cart-heading">Cart</h3>
      <div className="cart-content">
        <div className="cart-list">
        {
          deState.map(el=>{
              
              return(
                    
                    <div className="cart-item" key={el.id}>
                        <div className="item-image">
                        <img
                            src={el.image}
                            alt="Product Image"
                        />
                        </div>
                        <div className="item-info">
                        <h4 className="item-title">{el.name}</h4>
                        <p className="item-price-wrapper">
                            <span className="item-price">${el.price}</span>
                            <span className="item-count">x {el.qauntity}</span>
                            <span className="total-price">${eval(el.price * el.qauntity)}</span>
                        </p>
                        </div>
                        <div className="item-delete" onClick={()=>{
                          cartDelete({type : DELETE_FROM_CART,payload:{id:el.id}})
                        }}>
                        <img src="../assets/icon-delete.svg" alt="Delete Product" />
                        </div>
                    </div>
                ) 
            })
          }
        </div>
        <button
          type="button"
          aria-label="Check out"
          className="button checkout-btn"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
