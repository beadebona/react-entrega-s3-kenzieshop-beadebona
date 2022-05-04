import {addToCart, checkout, removeFromCart} from "./action";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

export const addToCartThunks = (product)=> (dispatch, getStore ) => {

    const {cart} = getStore();
    const list = [...cart]

    if(cart.find(elem => elem.id === product.id)){
        product.quantity = product.quantity + 1

    } else{
        product.quantity = 1
        list.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(list))

    dispatch(addToCart(list))
}

export const removeFromCartThunks = (product) => (dispatch, getStore) => {
    const {cart} = getStore();
   
        const list = cart.filter(item => item !== product)
        if( product.quantity > 1){
            product.quantity = product.quantity -1
            list.push(product)
        }  
        localStorage.setItem("cart", JSON.stringify(list))
        dispatch(removeFromCart(list))
}

export const checkoutThunks = () => (dispatch) => {
    const list = []
    localStorage.setItem("cart", JSON.stringify(list))
    
    dispatch(checkout(list))
}