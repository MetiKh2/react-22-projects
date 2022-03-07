import React from 'react';
import {Link} from "react-router-dom";

const Cocktail = ({cocktail}) => {
    return (
            <div className={'col-md-6 col-xl-4 mb-4'}>
                <img className={'cocktail-img'} src={cocktail.image}/>
              <div className={'p-3 bg-white'}>
                  <h2 className={'fw-bold space'}>{cocktail.name}</h2>
                  <p className={'space fw-bold'}>{cocktail.glass}</p>
                  <p className={'opacity-50 fs-6'}>{cocktail.info}</p>
                  <Link to={'/cocktail/'+cocktail.id} className={'btn btn-success space fw-bold'}>Detail</Link>
              </div>
            </div>


    );
};

export default Cocktail;