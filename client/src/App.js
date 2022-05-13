import React from 'react'
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
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
    <footer>
        <Link to="/" className="link">Home</Link>
        <br/>
        <Link to="staff" className="link">Staff page</Link>
    </footer>
    </BrowserRouter>
  );
}

export default App;
