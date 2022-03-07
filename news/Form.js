import React, {useState} from 'react';
import {changeQuery, useNewsDispatch, useNewsState} from "./context/NewsContext";

const Form = () => {
    const{query}=useNewsState()
    const newsDispatch=useNewsDispatch()
    return (
            <div className={'text-center mb-5'}>
                <h1 className={'fw-bold space'}>Search Hacker News</h1>
                <input value={query} onChange={(e)=>changeQuery(newsDispatch,e.target.value)} className={'header-search w-50'} placeholder={'Search ...'}/>
            </div>
            );
};

export default Form;