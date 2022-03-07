import React from 'react';
import {changeCategory, changeCount, changeDifficulty, useQuizDispatch, useQuizState} from "./context/QuizContext";
import {fetchQuiz} from "./Api/QuizApi";

const Form = ({handleSubmit}) => {
    const {count,category,difficulty}=useQuizState()
    const quizDispatch=useQuizDispatch()

    return (
        <form onSubmit={handleSubmit}>
            <p className={'title space'}>Number Of Questions</p>
            <input value={count} onChange={(e)=>changeCount(quizDispatch,e.target.value)} type={'number'} className={'input'}/>
            <p className={'title space mt-5'}>Category</p>
            <select value={category} onChange={(e)=>changeCategory(quizDispatch,e.target.value)} className={'input'}>
                <option value={21}>Sport</option>
                <option value={24}>Politics</option>
                <option value={23}>History</option>
            </select>
            <p className={'title space mt-5'}>Select Difficulty</p>
            <select value={difficulty} onChange={(e)=>changeDifficulty(quizDispatch,e.target.value)} className={'input'}>
                <option value={'easy'}>Easy</option>
                <option value={'medium'}>Medium</option>
                <option value={'hard'}>Hard</option>
            </select>
            <button type={'submit'} className={'text-center fw-bold w-100 mt-5 button py-1 space'}>
                Start
            </button>
        </form>
    );
};

export default Form;