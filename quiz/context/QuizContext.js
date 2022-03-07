import React from "react";
import question from "../Question";
import {getAnswers} from "../utils/AnswerUtils";
import {toast} from "react-toastify";
var QuizStateContext = React.createContext();
var QuizDispatchContext = React.createContext();

function QuizReducer(state, action) {
    switch (action.type) {
        case CHANGE_COUNT:{
            return {...state,count:parseInt(action.payload)}
        }
        case CHANGE_CATEGORY:{
            return {...state,category:action.payload}
        }
        case CHANGE_DIFFICULTY:{
            return {...state,difficulty:action.payload}
        }
        case FETCH_QUESTIONS_SUCCESS:{
            let firstQuestion=action.payload[0]
            console.log(firstQuestion)
            return {...state,questions:action.payload,questionsCount:action.payload.length,page:0,answers:getAnswers(firstQuestion)}
        }
        case CHANGE_PAGE:{
            if(state.questions.length<=state.page+1) {
                // console.log(`You answered ${Math.floor((state.correctAnswers/state.questionsCount)*100)}% of questions correctly`)
                return {
                    ...state,
                    difficulty: 'easy',
                    category: 21,
                    count: 4,
                    questions: [],
                    page: 0,
                    questionsCount: 0,
                    selectQuestion: {},
                    loading: false,
                    showSetUp: true,
                    correctAnswers: 0,
                    successMessage:`You answered ${Math.floor((state.correctAnswers/state.questionsCount)*100)}% of questions correctly`
                }
            }
            let newSelectQuestion=state.questions[state.page+1]
            console.log(newSelectQuestion)
            return {...state,page:state.page+1,selectQuestion:newSelectQuestion,answers:getAnswers(newSelectQuestion)}
        }
        case CHANGE_QUESTION:{
            return {...state,selectQuestion:state.questions[action.payload]}
        }
        case CHANGE_SHOW_SETUP:{
            return {...state,showSetUp:action.payload}
        }
        case CHANGE_LOADING:{
            return {...state,loading:action.payload}
        }
        case CHANGE_CORRECT_ANSWERS:{
            return {...state,correctAnswers:action.payload}
        }
        case CHANGE_SUCCESS_MESSAGE:{
            return {...state,successMessage:action.payload}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function QuizProvider({children}) {
    var [state, dispatch] = React.useReducer(QuizReducer, {
        difficulty:'easy',
        category:21,
        count:4,
        questions:[],
        page:0,
        questionsCount:0,
        selectQuestion:{},
        answers:null,
        loading:false,
        showSetUp:true,
        correctAnswers:0,
        successMessage:'',
    });
    return (
        <QuizStateContext.Provider value={state}>
            <QuizDispatchContext.Provider value={dispatch}>
                {children}
            </QuizDispatchContext.Provider>
        </QuizStateContext.Provider>
    );
}

function useQuizState() {
    var context = React.useContext(QuizStateContext);
    if (context === undefined) {
        throw new Error("useQuizState must be used within a useQuizState");
    }
    return context;
}

function useQuizDispatch() {
    var context = React.useContext(QuizDispatchContext);
    if (context === undefined) {
        throw new Error("useQuizDispatch must be used within a QuizProvider");
    }
    return context;
}

export {QuizProvider, useQuizState, useQuizDispatch};

// ###########################################################
const CHANGE_COUNT='CHANGE_COUNT';
const CHANGE_PAGE='CHANGE_PAGE';
const CHANGE_CATEGORY='CHANGE_CATEGORY';
const CHANGE_DIFFICULTY='CHANGE_DIFFICULTY';
const FETCH_QUESTIONS_SUCCESS='FETCH_QUESTIONS_SUCCESS';
const CHANGE_QUESTION='CHANGE_QUESTION';
const CHANGE_SHOW_SETUP='CHANGE_SHOW_SETUP';
const CHANGE_LOADING='CHANGE_LOADING';
const CHANGE_ANSWERS='CHANGE_ANSWERS';
const CHANGE_CORRECT_ANSWERS='CHANGE_CORRECT_ANSWERS';
const CHANGE_SUCCESS_MESSAGE='CHANGE_SUCCESS_MESSAGE';
// ###########################################################

export const changeCount = (dispatch,value) => {
  dispatch({
      type:CHANGE_COUNT,
      payload:value
  })
}
export const changeCategory = (dispatch,value) => {
  dispatch({
      type:CHANGE_CATEGORY,
      payload:value
  })
}
export const changeDifficulty = (dispatch,value) => {
  dispatch({
      type:CHANGE_DIFFICULTY,
      payload:value
  })
}
export const fetchQuestionsSuccess = (dispatch,questions) => {
  dispatch({
      type:FETCH_QUESTIONS_SUCCESS,
      payload:questions
  })
}
export const changePage = (dispatch) => {
  dispatch({
      type:CHANGE_PAGE,
  })
}
export const changeQuestion = (dispatch,page) => {
  dispatch({
      type:CHANGE_QUESTION,
      payload:page
  })
}
export const changeLoading = (dispatch,value) => {
  dispatch({
      type:CHANGE_LOADING,
      payload:value
  })
}
export const changeShowSetUp = (dispatch,value) => {
  dispatch({
      type:CHANGE_SHOW_SETUP,
      payload:value
  })
}
export const changeAnswers = (dispatch,value) => {
  dispatch({
      type:CHANGE_ANSWERS,
      payload:value
  })
}
export const changeCorrectAnswers = (dispatch,value) => {
  dispatch({
      type:CHANGE_CORRECT_ANSWERS,
      payload:value
  })
}
export const changeSuccessMessage = (dispatch,value) => {
  dispatch({
      type:CHANGE_SUCCESS_MESSAGE,
      payload:value
  })
}
