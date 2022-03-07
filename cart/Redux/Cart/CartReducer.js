import {
    FETCH_CART_FAILURE,
    FETCH_CART_SUCCESS,
    FETCH_CART_REQUEST, INCREASE_ITEM_TO_CART, DECREASE_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART,
} from "./CartType";

const initialState={
    cart:[],
    isLoading:false,
    message:''
}
export default (state=initialState,action) => {
  switch (action.type) {
      case FETCH_CART_REQUEST:{
          return {...state,isLoading: true,cart:[],message: ''}
      }
      case FETCH_CART_SUCCESS:{
         return  {...state,isLoading: false,cart:action.payload,message:''}
      }
      case FETCH_CART_FAILURE:{
          return {...state,isLoading: false,cart:[],message:action.payload}
      }
      case INCREASE_ITEM_TO_CART:{
          const addIndex=state.cart.findIndex(item=>item.id==action.payload)
          const increaseItem=state.cart.find(item=>item.id==action.payload)
          return {...state,cart:[...state.cart.slice(0,addIndex),{...increaseItem,amount:increaseItem.amount+1},...state.cart.slice(addIndex+1)]}
      }
      case DECREASE_ITEM_FROM_CART:{
          const removeIndex=state.cart.findIndex(item=>item.id==action.payload)
          const decreaseItem=state.cart.find(item=>item.id==action.payload)
          if(decreaseItem.amount>1)
          return {...state,cart:[...state.cart.slice(0,removeIndex),{...decreaseItem,amount:decreaseItem.amount-1},...state.cart.slice(removeIndex+1)]}
          else return state;
      }
      case REMOVE_ITEM_FROM_CART:{
          return {...state,cart: state.cart.filter(p=>p.id!=action.payload)}
      }
      case CLEAR_CART:{
          return {...state,cart: []}
      }
      default:return state;

  }
}