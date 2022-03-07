import React, {useEffect, useState} from 'react';
import './style.css'
import { getJobsRequest} from "./Api/jobs";
import {toast} from "react-toastify";
const App = () => {
    const [loading,setLoading]=useState(true)
    const [jobs,setJobs]=useState([])
    const [index,setIndex]=useState(0)

    const changeCompany = (id) => {
      setIndex(jobs.findIndex(p=>p.id==id))
    }

    const fetchJobs=()=>{
        setLoading(true)
        getJobsRequest((isOk,res)=>{
            if(isOk) setJobs(res)
                else toast.error(res)
            setLoading(false)
        })
    }
    useEffect(()=>{
        fetchJobs()
    },[])
    console.log('App')
    if(loading){
        return (
            <section className={'section'}>
                <div className={'title'}>
                    <h2>Loading ...</h2>
                    <div className={'underline'}></div>
                </div>
            </section>
        )
    }
    const {id,dates,duties,title,company}=jobs[index];
    return (
        <section className={'section'}>
            <div className={'title'}>
                <h2>Experience</h2>
                <div className={'underline'}></div>
            </div>
            <div className={'jobs-center'}>
                <div className="btn-container">
                    {jobs.map((item)=>{
                        return <button key={item.id} onClick={()=>{changeCompany(item.id)}} className={`job-btn  ${item.id==id?'active-btn':''}`}>{item.company}</button>
                    })}
                </div>
                <article className="job-info"><h3>{title}</h3><h4>{company}</h4><p
                    className="job-date">{dates}</p>
                    {duties.map(item=>   <div className="job-desc">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                             className="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                        </svg>
                        <p>{item}</p></div>)}
                </article>
            </div>
            <button type="button" className="btn">more info</button>
        </section>
    );
};

export default App;