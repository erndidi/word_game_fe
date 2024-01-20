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
                    <div className="container">
                        <header className='flex-header'>
                            <Header/>
                        </header>
                        <main className='flex-main'>
                            <nav className='flex-nav'>
                            <ul>
                                <li><Link to="/word">Go to game</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/logout">Logout</Link></li>
                            </ul>
                            </nav>
                        <article className='flex-article'>
                        <Routes>
            <Route path="/" element={<Word />} />
            <Route path="/word" element={<Word />} />
                <Route path="/signup" element={<SignUp />} />    
                <Route path="/login" element={<Login />} />   
                <Route path="/logout" element={<Logout />} />      
                
            </Routes>
                        </article>
                        <aside className='flex-aside'>
                        <RightSidebar/>

                        </aside>
                        </main>  
                        <footer className='flex-footer'>
                            <Footer></Footer>
                        </footer>
                      
                       
                    </div>
                       </BrowserRouter>
                       
             </PlayerProvider>
                  
               
              
                
               
         
        );
    }

  export default App

