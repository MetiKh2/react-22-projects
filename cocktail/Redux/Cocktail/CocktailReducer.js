import {
    FETCH_COCKTAIL_FAILURE,
    FETCH_COCKTAIL_SUCCESS,
    FETCH_COCKTAIL_REQUEST,
} from "./CocktailType";

const initialState={
    cocktail:[],
    singleCocktail:{
        name:'',
        image:'',
        info:'',
        category:'',
        glass:'',
        instructions:'',
        ingredients:[]},
    isLoading:true,
    error:''
}
export default (state=initialState,action) => {
  switch (action.type) {
      case FETCH_COCKTAIL_REQUEST:{
          return {...state,isLoading: true,cocktail:[],error: ''}
      }
      case FETCH_COCKTAIL_SUCCESS:{
          if(!action.isDetail)
         return  {...state,isLoading: false,cocktail:action.payload,error:''}
          else
              return  {...state,isLoading: false,singleCocktail:action.payload,error:''}
      }
      case FETCH_COCKTAIL_FAILURE:{
          return {...state,isLoading: false,cocktail:[],error:action.payload}
      }
      default:return state;

  }
}