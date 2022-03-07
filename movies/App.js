import React,{useState,useEffect} from 'react';
import {fetchMovies} from "./Api/MovieApi";
import {toast, ToastContainer} from "react-toastify";
import Loading from "./Loading";
import Movie from "./Movie";
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {Route,Routes} from "react-router";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
const App = () => {
  return <>
  <Routes>
      <Route element={<Home/>} path={'/'}></Route>
      <Route path={'/movie/:id'} element={<MovieDetail/>}></Route>
  </Routes>
  </>
};

export default App;