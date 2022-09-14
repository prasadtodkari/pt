import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/Home' element={<Home />}/>
    </Routes>
    <App />
  </BrowserRouter>
);


reportWebVitals();
