import React, {useState} from 'react';

const Question = ({question}) => {
    const [isOpen,setIsOpen]=useState(false)
    return (
        <article className={'question'}>
            <header>
                <h4>{question.title}</h4>
                <button  onClick={()=>setIsOpen(!isOpen)} className={'btn fs-1'}>{!isOpen?'+':'-'}</button>
            </header>
            {isOpen&&<p>{question.info}</p>}
        </article>
    );
};

export default Question;