import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from "./Context";

const SubMenu = () => {
    const {isSubMenuOpen,location,subMenuLinks:{ page, links },closeSubMenu}=useGlobalContext()
    const container=useRef(null)
    useEffect(()=>{
    const subMenu=container.current;
    const {center,bottom}=location;
    subMenu.style.left=`${center}px`;
    subMenu.style.top=`${bottom}px`;

    },[location])

    return (
        <aside  className={`submenu ${isSubMenuOpen?'show':''}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center`}>
                    {links.map(item=><a href={item.url}>{item.icon} {item.label}</a>)}
                </div>
            </section>
        </aside>
    );
};

export default SubMenu;