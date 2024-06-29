import React from 'react';
import LoginPage from './routes/loginPage';
import { Routes, Route } from 'react-router-dom';


import './App.scss';
import Dashboard from './routes/dashboard';
import RequireAuth from './routes/requireAuth';
import UserDetails from './routes/userDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/:id' element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
