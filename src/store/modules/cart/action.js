import { ADD_CART, CHECKOUT_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";

export const addToCart = (list) =>{
    return {
        type: ADD_CART,
        list
    }
}

export const removeFromCart = (list) =>{
    return { 
        type: REMOVE_CART, 
        list
    }
}

export const checkout = (list) =>{
    return {
        type: CHECKOUT_CART,
        list
    }
}
