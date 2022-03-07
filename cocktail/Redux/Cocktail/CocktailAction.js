import {
    FETCH_COCKTAIL_FAILURE,
    FETCH_COCKTAIL_SUCCESS,
    FETCH_COCKTAIL_REQUEST,
} from "./CocktailType";

export const fetchCocktailRequest = () => {
return {
    type:FETCH_COCKTAIL_REQUEST
}
}
export const fetchCocktailSuccess = (data,isDetail) => {
    let cocktail;
    if (!isDetail) {
    cocktail=[];
       for (const cocktailElement of data.drinks) {
           cocktail.push({
               id: cocktailElement.idDrink,
               name: cocktailElement.strDrink,
               image: cocktailElement.strDrinkThumb,
               info: cocktailElement.strAlcoholic,
               glass: cocktailElement.strGlass
           })
       }
   }
    else {
        const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        } = data.drinks[0]
        const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        ]
         cocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
        }
    }
       return {
           type:FETCH_COCKTAIL_SUCCESS,
           payload:cocktail,
           isDetail
       }


}
export const fetchCocktailError = (error) => {
return {
    type:FETCH_COCKTAIL_FAILURE,
    payload:error
}
}
