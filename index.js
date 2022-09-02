import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import CoachSignup from './components/CoachSignup';
import CoachLogin from './components/CoachLogin';
import UserSignup from './components/UserSignup';
import UserLogin from './components/UserLogin';
import CoachHome from './components/CoachHome';
import CoachProfile from './components/CoachProfile';
import UserHome from './components/UserHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route index element={<Home/>}/>
    <Route path='coachlogin' element={<CoachLogin/>}/>
    <Route path='coachsignup' element={<CoachSignup />}/>
    <Route path='userlogin' element={<UserLogin />}/>
    <Route path='usersignup' element={<UserSignup/>}/>
    <Route path='/coachhome/:id' element={<CoachHome />}/>
    <Route path='coachviewprofile' element={<CoachProfile />}/>
    <Route path='/userhome/:id' element={<UserHome />}/>
    
  
  </Routes>
 
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


