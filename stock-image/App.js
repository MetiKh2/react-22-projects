import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import Photo from "./Photo";
import Loading from "./Loading";
import {fetchPhotos, searchPhotos} from "./Api/PhotoApi";
import {toast, ToastContainer} from "react-toastify";
const App = () => {
    const [photos,setPhotos]=useState([])
    const [loading,setLoading]=useState(true)
    const [query,setQuery]=useState('')
    const [page,setPage]=useState(1)
    useEffect(()=>{
        console.log(page)
        if(!query){
            fetchPhotos(page,(isOk,res)=>{
                if(isOk){
                    setPhotos([...photos,...res])
                    setLoading(false)
                    console.log(res)
                }
                else toast.error(res)
            })
        }
        else{
            searchPhotos(page,query,(isOk,res)=>{
                if(isOk){
                    setPhotos([...photos,...res])
                }
                else toast.error(res)
            })
        }

    },[page])
    const handleSearch = () => {
        if(page==1)
        setPage(2)
        else setPage(1)
        setPhotos([])
    }
    const continueImages = () => {
      setPage(page+1)
    }
    if(loading)
    {
        return (
    <>        <ToastContainer/>
        <Loading/>
    </>
        )
    }
    return (
        <main className={'py-5 my-5'}>
            <div className={'container'}>
                <div className={'text-center mb-5'}>
                    <input value={query} onChange={(e)=>setQuery(e.target.value)} className={'header-search w-50'} placeholder={'Search ...'}/>
                    <button onClick={handleSearch} className={'submit-header-search'}><SearchIcon className={'fs-3'}/></button>
                </div>
                <div className={'row'}>
                    {photos.map((item,index)=><Photo photo={item} key={index}/>)}
                </div>
                <div>
                    <button onClick={continueImages} className={'btn btn-info w-100 text-white fw-bold'} style={{letterSpacing:'.1rem'}}>Continue ...</button>
                </div>
            </div>
        </main>
    );
};

export default App;