import { useState, useContext } from 'react';
import {PlayerContext} from '../context/playerprovider';

export function RightSidebar(props) {
    const {username, setUsername, score,setScore, sessionid, setSessionid, attempts, setAttempts} = useContext(PlayerContext);
    return (
       <aside className='flex-aside'>
            <p><span>Username: </span>{username}</p>
            <p><span>Score </span>{score}</p>
            
        </aside>
    );
}

export default RightSidebar;