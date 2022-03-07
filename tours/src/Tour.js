import React, {useState} from 'react';

const Tour = ({tour,removeTour}) => {
    const [readMore,setReadMore]=useState(false)
    return (
        <article>
            <img src={tour.image} alt={tour.name}/>
            <div className={'bg-white  p-4'}>
                <div className={'info-tour d-flex justify-content-between'}>
                    <p>{tour.name}</p>
                    <p>{tour.price}</p>
                </div>
                <p className={'tour-des'}>
                    {
                        readMore? tour.info:`${tour.info.substring(0,200)} ...`
                    }
                     <button className={'text-info'} onClick={()=>setReadMore(!readMore)}>{readMore?'Show less':'Read more'}</button>

                </p>
                <div className={'text-center'}> <button onClick={()=>{removeTour(tour.id)}} className={'not-interested-btn'}>Not Interested</button></div>
            </div>
        </article>

    );
};

export default Tour;