import addToCartItems from "./AddToCart";
import saveUserId from './Auth';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addToCartItems: addToCartItems,
    saveUserId: saveUserId

})

export default rootReducer;