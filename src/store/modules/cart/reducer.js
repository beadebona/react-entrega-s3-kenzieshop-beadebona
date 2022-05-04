import { ADD_CART, REMOVE_CART, CHECKOUT_CART } from "./actionTypes";
import { toast } from 'react-toastify';

const cartReducer = (state = JSON.parse(localStorage.getItem('cart')) || [], action) => {
    switch (action.type) {
        case ADD_CART:
            toast.success("PRODUTO ADICIONADO AO CARRINHO!", {toastId: 1})
            return action.list

        case REMOVE_CART:
            toast.success("PRODUTO REMOVIDO!")
            return action.list
        case CHECKOUT_CART:
            toast.success("COMPRA REALIZADA!")
            return action.list; 

        default:
            return state

    }
}

export default cartReducer;