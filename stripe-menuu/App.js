import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";
import Hero from "./Hero";
import './style.css'

const App = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Hero/>
            <SubMenu/>

        </>
    );
};

export default App;