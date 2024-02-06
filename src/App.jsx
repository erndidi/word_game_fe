import React, { useState } from 'react';

import { BrowserRouter, Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Word from './game/word';
import SignUp from './auth/signup';
import Login from './auth/login';
import Logout from './auth/logout';
import './App.css';
import { Header } from './layout/header';
import Footer from './layout/footer';

import PlayerProvider from './context/playerprovider';
import RightSidebar from './layout/right_sidebar';

export function App () {
   //static displayName = App.name;
   const data = {score: 0, sessionid: ''};
   const [username, setUsername] = useState("player 1");
   const [sessionid, setSessionid] = useState("000000");
   const [score, setScore]= useState(0);
 

        return (
            <PlayerProvider value={{username:"player1", sessionid: "0000000", score:0} }>
                    <BrowserRouter>
                    <div class="holy-grail-grid">
            <header class="header"> <Header/></header>
            <main class="main-content">    
                <Routes>
                     <Route path="/" element={<Word />} />
                        <Route path="/word" element={<Word />} />ß
                        <Route path="/signup" element={<SignUp />} />    ß
                        <Route path="/login" element={<Login />} />   
                        <Route path="/logout" element={<Logout />} />     
                
            </Routes></main>
            <section class="left-sidebar"> 
                    <nav className='game_nav'>
                            <ul>
                                <li><Link to="/word">Go to game</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/logout">Logout</Link></li>
                            </ul>
                            </nav></section>
            <aside class="right-sidebar"><RightSidebar/></aside>
            <footer class="footer">Footer</footer>
        </div>
                       </BrowserRouter>
                       
             </PlayerProvider>
                  
               
              
                
               
         
        );
    }

  export default App

