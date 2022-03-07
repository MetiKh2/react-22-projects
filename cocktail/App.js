import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Header from "./Components/Header";
import {Route, Routes} from 'react-router-dom'
import SearchBox from "./Components/SearchBox";
import CocktailsList from "./Components/CocktailsList";
import Home from "./Pages/Home";
import CocktailDetail from "./Pages/CocktailDetail";
const App = () => {
    return (
        <>
         <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/cocktail/:id'} element={<CocktailDetail/>}></Route>
            </Routes>
        </>
    );
};

export default App;