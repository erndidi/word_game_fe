import React, { Component, useState } from 'react';

import { BrowserRouter, Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Word from './game/word';
import SignUp from './auth/signup';
import  RightSidebar  from './layout/right_sidebar';
import './App.css';
import { Header } from './layout/header';
import PlayerProvider from './context/playerprovider';

function App() {

  return (
    <PlayerProvider>
     <BrowserRouter>
     <div className="container">
         <Header></Header>
       <div className="sidebar-1">       
             <ul>
                 <li><Link to="/word">Go to game</Link></li>
                 <li><Link to="/signup">Sign Up</Link></li>
                  
                 </ul>
         </div>    
                                           
       <div className="content">
         <Routes> 
             <Route path="/word" element={<Word />} />
             <Route path="/signup" element={<SignUp />} />
           </Routes>  
             </div>
             <div className="sidebar-2">       
             <h1>This is the right side bar</h1>
         </div>   
             </div>
        </BrowserRouter>
        </PlayerProvider>
   

              
  )
}

export default App
