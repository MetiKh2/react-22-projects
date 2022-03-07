import React from 'react';
import News from "./News";
import {changePage, useNewsDispatch, useNewsState} from "./context/NewsContext";
import Loading from "./Loading";

const NewsList = () => {
    const{newsList,isLoading,page}=useNewsState()
    const newsDispatch=useNewsDispatch()
    return (
        <section className={'mt-5'}>
            <div className={'d-flex align-items-center justify-content-center'}>
                <button className={'fw-bold btn btn-info btn-sm text-white space'} onClick={()=>changePage(newsDispatch,false)}>Prev</button>
                <p className={'mb-0 mx-2 fw-bold space'}>{page+1} of {newsList.nbPages}</p>
                <button className={'fw-bold btn btn-info btn-sm text-white space'} onClick={()=>changePage(newsDispatch,true)}>Next</button>
            </div>
            {
                isLoading&&<Loading/>
            }
            {
                !isLoading&& <div className={'row mt-4'}>
                    {newsList.hits.map((item,index)=><News key={index} news={item}></News>)}
                </div>
            }
        </section>
    );
};

export default NewsList;