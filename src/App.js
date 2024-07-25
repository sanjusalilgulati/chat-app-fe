import logo from './logo.svg';
import '../src/index.css'
import '../src/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/nav';
import Login from './components/login';
import Home  from './components/home';
import Register from './components/signup';
import AuthService from './services/authProvider';
import Chat from './components/chat';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path="/Login" element={<h1><Login /></h1>} / >  
            <Route path="/Signup" element={ <Register />} / >
            <Route path="/Chat" element={ <Chat />} / >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
