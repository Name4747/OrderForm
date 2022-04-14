import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Form from './Form'
import Staffview from './Staffview'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="staff" element={<Staffview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
