import React from 'react';

const Categories = ({filterMenu,allCategories}) => {
    return (
        <>
            <button className={'btn-filter'} onClick={()=>filterMenu('All')}>All</button>
            {allCategories.map((item,index)=> <button key={index} className={'btn-filter'} onClick={()=>filterMenu(item)}>{item}</button>)}
        </>
    );
};

export default Categories;