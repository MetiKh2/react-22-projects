import React from 'react';
import {useGlobalContext} from "./Context";
import logo from './images/logo.svg'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import sublinks from "./Data";
const Navbar = () => {
    const {openSideBar,openSubMenu,closeSubMenu}=useGlobalContext()
    const displaySubMenu = (e) => {
        const page=e.target.textContent;
        const tempBtn=e.target.getBoundingClientRect()
        const center=(tempBtn.left+tempBtn.right)/2;
        const bottom=tempBtn.bottom-3;
        openSubMenu(page,{center,bottom})
    }
    const noneSubMenu = () => {
      closeSubMenu()
    }
    return (
        <nav className={'nav'}  >
            <div className={'nav-center'}>
                <div className={'nav-header'}>
                    <img src={logo} className={'nav-logo'}/>
                    <button className={'btn toggle-btn'} onClick={openSideBar}><FormatAlignJustifyIcon/></button>
                </div>
                <ul className={'nav-links'} >
                    {sublinks.map(item=>  <li>
                        <button onMouseOver={displaySubMenu} className={'link-btn'}>{item.page}</button>
                    </li>)}

                </ul>
                <button className={'btn signin-btn'}>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;