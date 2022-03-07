import React from 'react';
import Cocktail from "./Cocktail";
import {connect} from "react-redux";

const CocktailsList = ({cocktail,isLoading}) => {
    console.warn(cocktail)
    if(cocktail.length<=0) return (
        <section className={'Cocktails-list container'}>
            <div className={'text-center'}><h1 className={'fw-bold space'}>Cocktails</h1></div>
            <div className={'text-center'}><h6 className={'fw-bold space'}>No Cocktails Exist</h6></div>
        </section>
    )
    return (
        <section className={'Cocktails-list container'}>
            <div className={'text-center'}><h1 className={'fw-bold space'}>Cocktails</h1></div>
            <section className={'row'}>{cocktail.map(item=> <Cocktail key={item.id} cocktail={item}/>)}</section>
        </section>
    );
};

function mapStateToProps(state) {
    return {
        cocktail:state.cock.cocktail,
        isLoading:state.cock.isLoading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CocktailsList)