import React, {useState} from 'react';
import logger from "redux-logger";
import {fetchSearchedCocktails} from "../api/CocktailApi";
import {connect} from "react-redux";

const SearchBox = ({fetchSearchedCocktails}) => {
    const [searchCocktail,setSearchCocktail]=useState()
    return (
       <section>
           <div className={'m-auto bg-white p-4 search-box'}>
               <p className={'space header-search-box'}>Search Your Favorite Cocktail</p>
               <form>
                   <input onChange={(e)=>{fetchSearchedCocktails(e.target.value)}} type={'text'} className={'w-100 p-2 rounded-3'} style={{background:'#F1F5F8'}}/>
               </form>
           </div>
       </section>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchedCocktails:(filter)=>dispatch(fetchSearchedCocktails(filter))
    }
}

export default connect(null,mapDispatchToProps)(SearchBox)
