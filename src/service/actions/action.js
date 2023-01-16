import {ADD_TO_CART, DELETE_FROM_CART} from '../Constant'
export const addToCart = (data)=>{
    console.log('action',data);
    return {
        type : ADD_TO_CART,
        data: data,
    }
}

export const deleteFromCart = ()=>{
    return{
        type: DELETE_FROM_CART,
    }
}