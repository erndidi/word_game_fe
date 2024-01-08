import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();


const PlayerProvider = (props) => {

  const [username, setUsername]= useState("player 1");
  const [currentScore, setCurrentScore]  = useState(0);
  const [previousScore, setPreviousScore]  = useState(0);
  const [sessionid, setSessionid] = useState("empty");
  const [attempts, setAttempts] = useState(0);
  const [numberOfLetters, setNumberOfLetters]=useState(5);
  const [isSignup, setIsSignup] = useState("true");
  const [isPlayerLoggedIn, setPlayerLoggedIn] = useState(false);

  console.log(props);


const value = {username, setUsername, currentScore, setCurrentScore,previousScore, setPreviousScore, sessionid, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters,isPlayerLoggedIn,setPlayerLoggedIn};

  return (
    <PlayerContext.Provider value={value}>
  
        {props.children}
    
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;