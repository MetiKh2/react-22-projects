import React, {useState} from 'react';
import people from './data'

const Review = () => {
    const [index,setIndex]=useState(4)
    const [person,setPerson]=useState(people[index])
    const nextReview = () => {
      if (index>=people.length-1)
          setIndex(0)
      else setIndex(index+1)
        setPerson(people[index])

    }
    const prevReview = () => {
        if (index<=0)
            setIndex(people.length-1)
        else setIndex(index-1)
        setPerson(people[index])
    }
    console.log(index)
    return (

            <article key={person.id} className={'bg-white p-4 d-flex flex-column'}>
                <div className={'img-container'}>
                    <img src={person.image} />
                </div>
                <p className={'text-center fw-bold m-0 fs-6'}>{person.name}</p>
                <p className={'text-center text-info fs-6'}>{person.job}</p>
                <p className={'post-des'}>{person.text}</p>
                <p className={'text-center fs-3 text-info fw-bold pointer'}> <span style={{marginRight:'15px'}} className={'d-inline-block'} onClick={prevReview}> {'<'} </span> <span onClick={nextReview} className={'d-inline-block'}> > </span></p>
                <div className={'text-center'}>
                    <button className={'btn btn-info text-white'} onClick={()=>{
                        setIndex(Math.floor(Math.random()*people.length))
                        console.log(index)
                        setPerson(people[index])
                    }}>suprise me!</button>
                </div>
            </article>

    );
};

export default Review;