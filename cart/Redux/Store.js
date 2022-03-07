import {applyMiddleware, createStore} from "redux";
import RootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import CartReducer from "./Cart/CartReducer";
export default createStore(CartReducer,applyMiddleware(logger,thunk))