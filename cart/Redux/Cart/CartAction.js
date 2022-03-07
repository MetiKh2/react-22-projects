import {
    CLEAR_CART,
    DECREASE_ITEM_FROM_CART,
    FETCH_CART_FAILURE,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS, INCREASE_ITEM_TO_CART, REMOVE_ITEM_FROM_CART,
} from "./CartType";

export const fetchCartRequest = () => {
return {
    type:FETCH_CART_REQUEST
}
}
export const fetchCartSuccess = (data) => {
return {
    type:FETCH_CART_SUCCESS,
    payload:data
}
}
export const fetchCartError = (error) => {
return {
    type:FETCH_CART_FAILURE,
    payload:error
}
}

 export const increaseItemToCart = (id) => {
  return{
      type:INCREASE_ITEM_TO_CART,
      payload:id
  }
}
export const decreaseItemFromCart = (id) => {
  return{
      type:DECREASE_ITEM_FROM_CART,
      payload:id
  }
}
export const removeItemFromCart = (id) => {
  return{
      type:REMOVE_ITEM_FROM_CART,
      payload:id
  }
}
export const clearCart = (id) => {
  return{
      type:CLEAR_CART,
      payload:id
  }
}
