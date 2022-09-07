import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components'

function App() {
  return (
    <div className="App">
      <div className='container mx-auto px-6'>
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
