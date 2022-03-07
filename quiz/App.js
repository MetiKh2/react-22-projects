import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import Swal from 'sweetalert2'
import './style.css'
import Form from "./Form";
import {fetchQuiz} from "./Api/QuizApi";
import {
    changeLoading,
    changeQuestion, changeShowSetUp, changeSuccessMessage,
    fetchQuestionsSuccess,
    useQuizDispatch,
    useQuizState
} from "./context/QuizContext";
import Loading from "./Loading";
import {toast, ToastContainer} from "react-toastify";
import Question from "./Question";
const App = () => {
    console.log('app')
    const {count,category,difficulty,page,loading,showSetUp,successMessage}=useQuizState()
    const quizDispatch=useQuizDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        changeLoading(quizDispatch,true)
        fetchQuiz(count,category,difficulty,(isOk,res)=>{
            if(isOk) {
                fetchQuestionsSuccess(quizDispatch,res)
                changeLoading(quizDispatch,false)
                changeShowSetUp(quizDispatch,false)
                changeQuestion(quizDispatch,page)
            }
        })
    }
    if(loading)return <>
        <Loading/>
    </>
    if(successMessage){
        Swal.fire(
            'Good job!',
            successMessage,
            'success'
        )
        changeSuccessMessage(quizDispatch,'')
    }
    if(showSetUp)return (
        <main>
            <ToastContainer/>
            <section className={'root bg-white p-5'}>
                <h2 className={'fw-bold mb-4'}>Setup Quiz</h2>
                <Form handleSubmit={handleSubmit}></Form>
            </section>
        </main>
    )

    return (
        <main>
            <section className={'root bg-white p-5'} style={{maxWidth:'1170px'}}>
                  <Question/>
                </section>
        </main>
    );
};

export default React.memo(App);