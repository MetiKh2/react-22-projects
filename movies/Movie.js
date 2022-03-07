import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const noPhoto='https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
    const [showInfo,setShowInfo]=useState(false)
    return (
        <div onMouseOver={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} className={'col-12 col-sm-6 col-lg-4 col-xl-3  mb-4 overflow-hidden'}>
           <Link to={`/movie/${movie.imdbID}`}>
               <div className={'text-center bg-white shadow-lg rounded-3 shadow-lg position-relative'}>
               <img src={movie.Poster=='N/A'?noPhoto:movie.Poster}  height={300} className={'w-100'}/>
               <div className={`${showInfo?'bottom-0':'bottom--150'} photo-inf w-100`}>
                   <div className={`d-flex justify-content-between p-3 align-items-center`}>
                       <div style={{textAlign:'left'}}>
                           <p className={'mb-1 fw-bold text-white fs-5 space'}>{movie.Title}</p>
                           <p className={'mb-1 text-white space fs-6'} style={{fontSize:'10px'}}>{movie.Year}</p>
                       </div>
                   </div>
               </div>
           </div>
           </Link>
        </div>

    );
};

export default Movie;