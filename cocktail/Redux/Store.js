import {applyMiddleware, createStore} from "redux";
import RootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
export default createStore(RootReducer,applyMiddleware(thunk))