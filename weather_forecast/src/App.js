import React from 'react'
import Searchbar from './Searchbar';
import About from './About';
import Settings from './Settings';
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route,} from "react-router-dom";
import './css/MainFile.css';
import blobby from './Blob.svg'
function App() {
  return (
    <div className='mainContainer'>
      <h1 >Weather</h1>
      <div className='blob'>
      <img src={blobby} />
        </div>
      <div className='navBar'>
      <Link to="/" style={{color: `white`}}>Search</Link> 
      <Link to="/About" style={{color: `white`}}>About</Link>     
      <Link to="/Settings" style={{color: `white`}}>Settings</Link>
      </div>
      
      
    </div>
  );
}

export default App;
