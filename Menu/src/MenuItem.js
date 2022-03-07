import React from 'react';

const MenuItem = ({menuItem}) => {
    return (
        <div className={'col-12 col-lg-6 mt-5'}>
            <div className={'row'}>
                <div className={'col-12 col-md-5'}>
                    <img className={'menu-img w-100'} src={menuItem.img}/>
                </div>
                <div className={'col-12 col-md-7'}>
                    <div className={'d-flex flex-column'}>
                        <header className={'border-bottom d-flex justify-content-between mt-3'}>
                            <p className={'menu-name m-0 mb-2'}>{menuItem.title}</p>
                            <p className={'menu-price m-0 mb-2'}>${menuItem.price}</p>
                        </header>
                        <p className={'mt-3'}>{menuItem.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;