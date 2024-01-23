import addToCartItems from "./AddToCart";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addToCartItems: addToCartItems

})

export default rootReducer;