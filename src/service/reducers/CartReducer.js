import {ADD_TO_CART, DELETE_FROM_CART} from '../Constant'
const initialState = {
    cardData : []
}
export default function cartState(state= initialState,action){
    console.log('reducerState',state);
    switch(action.type){
        case ADD_TO_CART : 
        return {
            ...state,
            cardData: [...state.cardData, {...action.payload}]
        }
        case DELETE_FROM_CART :
            return{
                ...state,
                cardData : state.cardData.filter(
                    el=> action.payload.id !== el.id ? 
                    el : 
                    console.log('equal id') 
                )
            }
        default: 
        return state;
    }
    
}
