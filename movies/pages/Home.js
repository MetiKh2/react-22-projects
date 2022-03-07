import React,{useState,useEffect} from 'react';
import {fetchMovies} from "../Api/MovieApi";
import {toast, ToastContainer} from "react-toastify";
import Loading from "../Loading";
import Movie from "../Movie";
const Home = () => {
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(true)
    const [query,setQuery]=useState('batman')
    const [error,setError]=useState('')
    useEffect(()=>{
        setLoading(true)
        if(query){
            fetchMovies(query,(isOk,error,res)=>{
                if(isOk){
                    if(error){
                        setError(error)
                        setLoading(false)
                    }
                    else {
                        setError('')
                        setMovies(res)
                        setLoading(false)
                        console.log(res)
                    }
                }
                else toast.error(res)
            })
        }
        else setLoading(false)
    },[query])
    return (
        <main className={'py-5 my-5'}>
            <div className={'container'}>
                <div className={'text-center mb-5'}>
                    <h1 className={'fw-bold'}>Search Movie</h1>
                    <input value={query} onChange={(e)=>setQuery(e.target.value)} className={'header-search w-50'} placeholder={'Search ...'}/>
                    <p className={'w-50 mx-auto mt-2 text-danger fs-6 text-left'}>{error}</p>
                </div>
                {!loading&&<div className={'row'}>
                    {movies.map((item,index)=><Movie movie={item} key={index}/>)}
                </div>}
                {loading&&<>
                    <ToastContainer/>
                    <Loading/>
                </>}
            </div>
        </main>
    );
};

export default Home;