import React from 'react';
import MenuItem from "./MenuItem";

const MenuList = ({menu}) => {
    return (
        <div className={'row mt-5 w-100'}>
            {menu.map(item=><MenuItem key={item.id} menuItem={item}/>)}
        </div>
    );
};

export default MenuList;