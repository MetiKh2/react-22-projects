import React, {useEffect} from 'react';
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './style.css'
import NewsList from "./NewsList";
import {fetchFailure, fetchRequest, fetchSuccess, useNewsDispatch, useNewsState} from "./context/NewsContext";
import {fetchNews} from "./Api/NewsApi";
import {toast, ToastContainer} from "react-toastify";

const App = () => {
    const{query,page}=useNewsState()
    const newsDispatch=useNewsDispatch()
    useEffect(()=>{
        fetchRequest(newsDispatch)
        fetchNews(query,page,(isOk,res)=>{
            if(isOk) {
                fetchSuccess(newsDispatch,res)
                console.log(res)
            }
            else {
                toast.error(res)
                fetchFailure(newsDispatch,res)
            }
        })
    },[query,page])
    return (
        <main className={'my-5'}>
            <div className={'container'}>
                <ToastContainer/>
                <Form></Form>
                <NewsList></NewsList>
            </div>
        </main>
    );
};

export default App;