import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import AccountList from "./AccountList";
import {accountApiRequest} from "./Api/AccountApi";
import {toast, ToastContainer} from "react-toastify";
import Loading from "./Loading";
import paginate from "./Utils/paginate";
import {Pagination} from "@mui/material";
const App = () => {
    const [accountList,setAccountList]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(0)
    const [accountsLength,setAccountsLength]=useState(0)
    useEffect(()=>{
        accountApiRequest((isOk,res)=>{
            if(isOk){
                setAccountList(paginate(res)[page])
                setAccountsLength(res.length)
                setLoading(false)
            }
            else toast.error(res);
        })
    },[page])
    const changePage = (page) => {
      setPage(page)
    }
    const prevPage = () => {
      if(page>0) setPage(page-1)
    }
    const nextPage = () => {
        console.log(accountList.length)
        console.log(page)
      if(page<accountList.length-1) setPage(page+1)
    }
    if(loading){
        return (
            <>
            <ToastContainer/>
                <Loading/>
            </>
        )
    }
    console.log('app')
    return (
        <main className={'p-5'}>
            <section className={'container mt-5'}>
                <div className={'text-center mb-5'}>
                    <h1 className={'fw-bold'}>Pagination</h1>
                </div>
               <AccountList accounts={accountList}/>
           {/*<Pagination className={'mt-5 justify-content-center'} count={10} />*/}
                <div className="btn-container text-center">
                    <button className="prev-btn" onClick={()=>prevPage()}>prev</button>
                    {accountList.map((item,index)=>{
                        return <button key={index} onClick={()=>changePage(index)} className={`page-btn ${index==page?'active-btn':'null'}`}>{index+1}</button>

                    })}
                    <button className="next-btn" onClick={nextPage}>next</button>
                </div>
            </section>
        </main>
    );
};

export default App;