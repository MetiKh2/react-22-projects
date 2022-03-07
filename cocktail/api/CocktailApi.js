import {getAxiosInstance} from "./Api";
import {fetchCocktailError, fetchCocktailRequest, fetchCocktailSuccess} from "../Redux/Cocktail/CocktailAction";
import axios from "axios";
export const fetchCocktails = () => {
    return function (dispatch){
        dispatch(fetchCocktailRequest())
        getAxiosInstance().get('json/v1/1/search.php?s=')
            .then(res=>{
              dispatch(fetchCocktailSuccess(res.data,false))
            }).catch(err=>{
            dispatch(fetchCocktailError(err.message))
        })
    }
}
export const fetchSearchedCocktails = (filter) => {
return function (dispatch){
    dispatch(fetchCocktailRequest())
    getAxiosInstance().get('json/v1/1/search.php?s='+filter)
        .then(res=>{
            dispatch(fetchCocktailSuccess(res.data,false))
        })
        .catch(err=>{
            dispatch(fetchCocktailError(err.message))
        })
}
}
export const fetchCocktailById = (id) => {
return function (dispatch){
    dispatch(fetchCocktailRequest())
    getAxiosInstance().get('json/v1/1/lookup.php?i='+id)
        .then(res=>{
            dispatch(fetchCocktailSuccess(res.data,true))
        })
        .catch(err=>{
            dispatch(fetchCocktailError(err.message))
        })
}
}
