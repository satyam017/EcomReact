import { combineReducers } from "redux";
import cartState from "./CartReducer";

console.log('combineReducer',cartState);
const combine =  combineReducers(
    {
        cartState,
    }
)


export default combine;