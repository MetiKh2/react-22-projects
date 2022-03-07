import React from 'react';
import Tour from "./Tour";

const Tours = ({tours,removeTour}) => {
    return (
        <section className={'container'}>
            <section className={`d-flex align-items-center justify-content-center flex-column`}>
                <h1 className={'mb-5'}>Our Tours</h1>
                <section>
                    {tours.map(tour=>{
                        return <Tour removeTour={removeTour} key={tour.id} tour={tour}/>
                    })}
                </section>
            </section>
        </section>
    );
};

export default Tours;