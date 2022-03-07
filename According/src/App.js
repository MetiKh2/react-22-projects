import React, {useState} from 'react';
import './style.css'
import data from './data'
import Question from "./Question";
const App = () => {
    const [questions,setQuestions]=useState(data)
    return (
        <main>
            <section className={'container'}>
                <h3>Questions And Answers About Login</h3>
                <section className={'info'}>
                    {
                        questions.map(item=>{
                            return <Question key={item.id} question={item}></Question>
                        })
                    }
                </section>
            </section>
        </main>
    );
};

export default App;