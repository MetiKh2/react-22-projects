import React, {useEffect, useState} from 'react';
import data from './data'
import './style.css'
const App = () => {
    const [people,setPeople]=useState(data)
    const [index,setIndex]=useState(0)
    useEffect(()=>{
        const lastIndex=people.length-1;
        if (index<0) setIndex(lastIndex)
        if (index>lastIndex) setIndex(0)
    },[index,people])
    useEffect(()=>{
      let slider=  setInterval(()=>{
            setIndex(index+1)
        },3000)
        return ()=>clearInterval(slider)
    },[index])
    return (
        <section className={'section'}>
            <div className={'title'}>
                <h2>
                    <span>/</span> Reviews
                </h2>
            </div>
            <div className={'section-center'}>
                {people.map((person,personIndex)=>{
                    let position='nextSlide';
                    if (personIndex===index)position='activeSlide'
                    if(personIndex===index-1||(index===0&&personIndex===people.length-1))position='lastSlide'
                    return (<article className={position} key={person.id}>
                        <img src={person.image} className={'person-img'}/>
                        <h4>{person.name}</h4>
                        <p className={'title'}>{person.title}</p>
                        <p className={'text'}>{person.quote}</p>
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                    </article>)
                })}
                <button className={'prev'} onClick={()=>setIndex(index-1)}> {'<'} </button>
                <button className={'next'} onClick={()=>setIndex(index+1)}> {'>'} </button>
            </div>
        </section>
    );
};

export default App;