import React from 'react';
import {useGlobalContext} from "./Context";
import ClearIcon from '@mui/icons-material/Clear';
import sublinks from "./Data";
const Sidebar = () => {
    const {closeSideBar,isSidebarOpen}=useGlobalContext()
    return (
        <aside className={`sidebar-wrapper ${isSidebarOpen?'show':''}`}>
            <div className={'sidebar'}>
                <button className={'close-btn'} onClick={closeSideBar}>
                    <ClearIcon/>
                </button>
                <div className={'sidebar-links'}>
                    {sublinks.map((item,index)=>{
                        const {links,page}=item;
                        return <article key={index}>
                            <h4>{page}</h4>
                            <div className={'sidebar-sublinks'}>
                                {links.map((link,index)=><a key={index} href={link.url}>{link.icon} {link.label}</a>)}
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;