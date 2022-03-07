import {combineReducers} from "redux";
import cartReducer from "./Cart/CartReducer";

export default combineReducers({cart:cartReducer})