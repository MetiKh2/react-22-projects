import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Header from "./Header";
import Bag from "./Bag";
import {connect} from "react-redux";
import Loading from "./Loading";
import {fetchCart} from "./api/CartApi";
const App = ({isLoading,fetchCart}) => {
    useEffect(()=>{
        fetchCart()
        console.log('333')
    },[])
    if (isLoading){
        return (
            <Loading/>
        )
    }
        return (
            <>

                <Header/>
                <Bag/>
            </>
        );
};
function mapStateToProps(state) {
    return {
        isLoading:state.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCart:()=>dispatch(fetchCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)