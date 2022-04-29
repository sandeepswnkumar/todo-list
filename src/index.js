import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Card from './Cards';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"));





reportWebVitals();
