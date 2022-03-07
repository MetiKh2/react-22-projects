import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {fetchCocktailById, fetchCocktails} from "../api/CocktailApi";
import {connect} from "react-redux";
import Loading from "../Components/Loading";
import {Link} from "react-router-dom";

const CocktailDetail = ({isLoading,fetchCocktailById,singleCocktail}) => {
    const {id}=useParams()
    useEffect(()=>{
        fetchCocktailById(id)
    },[])
    console.log('detail')
    if(isLoading)return  <section className={'container mt-5'}>
        <Loading></Loading>
    </section>

    return (
        <section className={'container mt-5'}>
            <section className={'d-flex align-items-center flex-column mb-5'}>
                <Link to={'/'} className={"btn btn-success fw-bold mb-3"}>Back to Home</Link>
                <h1>{singleCocktail.name}</h1>
            </section>
            <section className={'row'}>
               <div className={'col-12 col-md-5'}> <img src={singleCocktail.image}/></div>
                <div className={'col-12 col-md-7'}>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Name :</span> <span className={'cocktail-info-value'}>{singleCocktail.name}</span></div>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Category :</span> <span className={'cocktail-info-value'}>{singleCocktail.category}</span></div>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Info :</span> <span className={'cocktail-info-value'}>{singleCocktail.info}</span></div>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Glass :</span> <span className={'cocktail-info-value'}>{singleCocktail.glass}</span></div>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Instructons :</span> <span className={'cocktail-info-value'}>{singleCocktail.instructions}</span></div>
                   <div className={'mb-4'}><span className={'cocktail-info-display'}>Ingredients  :</span> <span className={'cocktail-info-value'}>{singleCocktail.ingredients.map(item=>{
                       if(item!=null) return `${item} / `;
                   })}</span></div>
                      </div>
            </section>
        </section>
    );
};
function mapStateToProps(state) {
    return {
        singleCocktail:state.cock.singleCocktail,
        isLoading:state.cock.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCocktailById:(id)=>dispatch(fetchCocktailById(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CocktailDetail)