import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'py-4'}>
            <section className={'container'}>
                <section className={'d-flex justify-content-between align-items-center'}>
                    <img className={'logo'} src={'https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg'}/>
                    <div>
                        <Link to={'/'} className={'header-link'}>Home</Link>
                        <Link to={'/about'} className={'header-link'}>About</Link>
                    </div>
                </section>
            </section>
        </header>
    );
};

export default Header;