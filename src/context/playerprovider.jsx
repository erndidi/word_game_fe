import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();


const PlayerProvider = (props) => {

  const [username, setUsername]= useState("player 1");
  const [score, setScore]  = useState(0);
  const [sessionid, setSessionid] = useState("empty");
  const [attempts, setAttempts] = useState(0);
  const [numberOfLetters, setNumberOfLetters]=useState(5);
  const [isSignup, setIsSignup] = useState("true");
  console.log(props);


const value = {username, setUsername, score,setScore, sessionid, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters};

  return (
    <PlayerContext.Provider value={value}>
  
        {props.children}
    
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;