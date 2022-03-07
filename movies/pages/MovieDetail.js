import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {fetchMovieDetail} from "../Api/MovieApi";
import Loading from "../Loading";
import {toast, ToastContainer} from "react-toastify";

const MovieDetail = () => {
    const [movie,setMovie]=useState()
    const [loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(()=>{
        fetchMovieDetail(id,(isOk,res)=>{
                if(isOk){
                    setMovie(res)
                    setLoading(false)
                }
                else toast.error(res)
        })
    },[])
    if (loading){
        return <>
        <Loading/>
            <ToastContainer/>
        </>
    }
    return (
        <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'col-12 col-lg-4'}>
                    <img width={'100%'} src={movie.Poster}/>
                </div>
                <div className={'col-12 col-lg-8 mt-3 mt-lg-0'}>
                    <h1 className={'fw-bold'}>{movie.Title}</h1>
                    <p className={'mt-3 fs-5'}>{movie.Plot}</p>
                    <p className={'mt-4 fs-5 fw-bold'}>{movie.Year}-</p>
                    <Link className={'btn btn-info text-white'} to={'/'}>Back to movies</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;