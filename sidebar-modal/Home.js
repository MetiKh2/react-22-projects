import React, {useContext} from 'react';
import './style.css'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {AppContext, useGGlobalContext} from "./Context";
const Home = () => {
    const {openSideBar,openModal} =useGGlobalContext()
    return (
        <main>
            <button onClick={openSideBar} className={'sidebar-toggle'}>
               <FormatAlignJustifyIcon/>
            </button>
            <button className={'btn'} onClick={openModal}>
                show-modal
            </button>
        </main>
    );
};

export default Home;