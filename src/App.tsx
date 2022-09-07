import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
