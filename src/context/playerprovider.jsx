import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();


const PlayerProvider = (props) => {

  const [username, setUsername]= useState("player 1");
  const [score, setScore]  = useState(0);
  const [sessionid, setSessionid] = useState("empty");
  const [attempts, setAttempts] = useState(0);
 // const [numberOfLetters, setNumberOfLetters]=(0);
  console.log(props);


const value = {username, setUsername, score,setScore, sessionid, setSessionid, attempts, setAttempts};

  return (
    <PlayerContext.Provider value={value}>
  
        {props.children}
    
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;