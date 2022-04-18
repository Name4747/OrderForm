import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Staffview from './Staffview'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="staff" element={<Staffview />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
