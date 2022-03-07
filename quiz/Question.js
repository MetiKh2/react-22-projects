import React from 'react';
import {changeCorrectAnswers, changePage, useQuizDispatch, useQuizState} from "./context/QuizContext";

const Question = () => {
    const {questionsCount,selectQuestion:question,answers,correctAnswers,page}=useQuizState()
    const quizDispatch=useQuizDispatch()
    const handleNextQuestion = () => {
        changePage(quizDispatch)
    }
    const handleCorrectQuestion = () => {
        changeCorrectAnswers(quizDispatch,correctAnswers+1)
        handleNextQuestion()
    }
    return (
        <>
            <div className={'d-flex justify-content-between'}>
                <p className={'text-success space'}>Number OF Question : {page+1}</p>
                <p className={'text-success space'}>Correct Answers : {correctAnswers}/{questionsCount}</p>
            </div>
            <h2 className={'fw-bold mb-4 lh-3r text-center'}>{question.question}</h2>
            <div className={'mt-3 text-center'}>
                    {answers.map((item,index)=><button onClick={question.correct_answer==item?handleCorrectQuestion:handleNextQuestion} key={index} className={'btn btn-info question-item mb-3 space'}>{item}</button>)}
            </div>
            <div className={'text-right'}>
                <button onClick={handleNextQuestion} className={' mb-3 space button p-2 fw-bold space'}>Next Question</button>
            </div>
        </>
    );
};

export default Question;