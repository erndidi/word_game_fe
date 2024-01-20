import React from 'react';
import { useState, useContext } from 'react';
import {PlayerContext} from '../context/playerprovider';

export function RightSidebar(props) {
    const {username, setUsername, currentScore, sessionid, setSessionid, attempts, setAttempts} = useContext(PlayerContext);
    return (
       <React.Fragment>
            <p><span>Username: </span>{username}</p>
            <p><span>Score </span>{currentScore}</p>
            
        </React.Fragment>
    );
}

export default RightSidebar;