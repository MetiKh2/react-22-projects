import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {NewsProvider} from "./context/NewsContext";
ReactDOM.render(
    <React.StrictMode>
        <NewsProvider>
      <App />
        </NewsProvider>
  </React.StrictMode>,
document.getElementById('root')
);
