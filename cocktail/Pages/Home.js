import React, {useEffect} from 'react';
import SearchBox from "../Components/SearchBox";
import CocktailsList from "../Components/CocktailsList";
import {connect} from "react-redux";
import {fetchCocktails} from "../api/CocktailApi";
import Loading from "../Components/Loading";

const Home = ({cocktail,fetchCocktails,isLoading}) => {
    useEffect(()=>{
        fetchCocktails()
    },[])
    if(isLoading){
        return (
            <main>
                <SearchBox/>
                <Loading/>
            </main>
        )
    }
    return (
            <main>
                <SearchBox/>
                <CocktailsList/>
            </main>
    );
};

function mapStateToProps(state) {
    return {
        cocktail:state.cock.cocktail,
        isLoading:state.cock.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCocktails:()=>dispatch(fetchCocktails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)