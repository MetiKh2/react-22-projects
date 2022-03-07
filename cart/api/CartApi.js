import {getAxiosInstance} from "./Api";
import {fetchCartError, fetchCartRequest, fetchCartSuccess} from "../Redux/Cart/CartAction";
export const fetchCart = () => {
    return function (dispatch){
        dispatch(fetchCartRequest())
        getAxiosInstance().get('react-useReducer-cart-project')
            .then(res=>{
                console.log(res.data)
              dispatch(fetchCartSuccess(res.data))
            }).catch(err=>{
            dispatch(fetchCartError(err.message))
        })
    }
}
