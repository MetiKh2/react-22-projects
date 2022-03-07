import React from "react";

var NewsStateContext = React.createContext();
var NewsDispatchContext = React.createContext();

function NewsReducer(state, action) {
    switch (action.type) {
        case FETCH_REQUEST:{
            return {...state,isLoading:true,newsList:[]}
        }
        case FETCH_SUCCESS:{
            return {...state,isLoading:false,newsList:action.payload}
        }
        case FETCH_FAILURE:{
            return {...state,isLoading:true,error:action.payload}
        }
        case CHANGE_QUERY:{
            return {...state,query:action.payload,page:0}
        }
        case REMOVE_NEWS:{
            console.log(state.newsList)
            const newHits=state.newsList.hits.filter(item=>item.objectID !=action.payload);
            return {...state,newsList:{...state.newsList,hits:newHits}}
        }
        case CHANGE_PAGE:{
            if(state.page<=0&&!action.payload)return state
            // debugger
            if(state.page+1>=state.newsList.nbPages&&action.payload)return state
            let newPage=state.page;
            if(action.payload)newPage+=1;
            else newPage-=1;
            return {...state,page:newPage}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function NewsProvider({children}) {
    var [state, dispatch] = React.useReducer(NewsReducer, {
        query: '',
        newsList:[],
        page:0,
        isLoading:true,
        error:''
    });
    return (
        <NewsStateContext.Provider value={state}>
            <NewsDispatchContext.Provider value={dispatch}>
                {children}
            </NewsDispatchContext.Provider>
        </NewsStateContext.Provider>
    );
}

function useNewsState() {
    var context = React.useContext(NewsStateContext);
    if (context === undefined) {
        throw new Error("useNewsState must be used within a useNewsState");
    }
    return context;
}

function useNewsDispatch() {
    var context = React.useContext(NewsDispatchContext);
    if (context === undefined) {
        throw new Error("useNewsDispatch must be used within a NewsProvider");
    }
    return context;
}

export {NewsProvider, useNewsState, useNewsDispatch};

// ###########################################################
const STOP_LOADING='STOP_LOADING';
const FETCH_REQUEST='FETCH_REQUEST';
const FETCH_SUCCESS='FETCH_SUCCESS';
const FETCH_FAILURE='FETCH_FAILURE';
const CHANGE_QUERY='CHANGE_QUERY';
const CHANGE_PAGE='CHANGE_PAGE';
const REMOVE_NEWS='REMOVE_NEWS';
// ###########################################################
export const stopLoading = () => {
  return{
      type:STOP_LOADING
  }
}
export const fetchRequest = (dispatch) => {
  dispatch({
      type:FETCH_REQUEST
  })
}
export const fetchSuccess = (dispatch,data) => {
  dispatch({
      type:FETCH_SUCCESS,
      payload:data
  })
}
export const fetchFailure = (dispatch,err) => {
  dispatch({
      type:FETCH_FAILURE,
      payload:err
  })
}

export const changeQuery = (dispatch,text) => {
  dispatch({
      type:CHANGE_QUERY,
      payload:text
  })
}

export const changePage = (dispatch,isPlus) => {
  dispatch({
      type:CHANGE_PAGE,
      payload:isPlus
  })
}
export const removeNews = (dispatch,id) => {
  dispatch({
      type:REMOVE_NEWS,
      payload:id
  })
}
