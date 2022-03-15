import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Settings from './Settings';
import Searchbar from './Searchbar';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route,} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <App></App>
     <Routes>
     <Route path='/' element={<Searchbar></Searchbar>}></Route>
     <Route path="About" element={<About></About>}></Route>
     <Route path="Settings" element={<Settings></Settings>}></Route>
     
     </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
