import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { QuizProvider} from "./context/QuizContext";
ReactDOM.render(
    <React.StrictMode>
        <QuizProvider>
      <App />
        </QuizProvider>
  </React.StrictMode>,
document.getElementById('root')
);
