import React from 'react';
import {removeNews, useNewsDispatch} from "./context/NewsContext";

const News = ({news}) => {
    const newsDispatch=useNewsDispatch()
    return (
        <div className={'col-12 col-lg-6 rounded-3 mt-4'}>
            <div className={'bg-white p-3 h-100'}>
                <p className={'space fw-bold mb-2'}>{news.title}</p>
                <p className={'space opacity-75'}> {news.points} points by <span>{news.author} | </span> {news.num_comments} comments</p>
                <div className={'d-flex'}>
                    <a target={'_blank'} href={news.url} className={'text-primary me-3'}>Read More</a>
                    <button onClick={()=>removeNews(newsDispatch,news.objectID )} className={'text-danger'}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default News;