import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);

  async function createPlayer(firstname,lastname,email, password) {
    const url = 'https://localhost:7077/api/Player';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(firstname + ':' + lastname + ':' + email + ':' + password));
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
  }
   

  return (
    <PlayerContext.Provider value={{playerData, createPlayer}}>
   
      {children}
    </PlayerContext.Provider>
  );
};

export default  PlayerProvider