import changeTheNumber from "./UpDown";
import addToCartItems from "./AddToCart";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber,
    addToCartItems: addToCartItems

})

export default rootReducer;