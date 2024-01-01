import React, { useState } from 'react';

import { BrowserRouter, Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Word from './game/word';
import SignUp from './auth/signup';
import LeftSideBar from './layout/left_sidebar';
import MainContent from './layout/main_content';
import  RightSidebar  from './layout/right_sidebar';
import './App.css';
import { Header } from './layout/header';

import PlayerProvider from './context/playerprovider';

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
                        <Header></Header>
                
                             <LeftSideBar/>
                        <MainContent/>
                        <RightSidebar/>
                            
                      
                       
                    </div>
                       </BrowserRouter>
                       
             </PlayerProvider>
                  
               
              
                
               
         
        );
    }

  export default App

