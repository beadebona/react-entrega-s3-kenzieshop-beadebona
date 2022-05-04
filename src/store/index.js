import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducer";

const reducer = combineReducers({cart: cartReducer})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;