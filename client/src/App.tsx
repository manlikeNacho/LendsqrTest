import React from 'react';
import LoginPage from './routes/loginPage';
import { Routes, Route } from 'react-router-dom';


import './App.scss';
import Dashboard from './routes/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
