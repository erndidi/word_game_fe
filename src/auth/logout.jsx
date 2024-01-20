import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import {PlayerContext} from '../context/playerprovider';

function Logout(){
    const {username, setUsername, currentScore, setCurrentScore,previousScore, setPreviousScore, sessionid, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters,isPlayerLoggedIn,setPlayerLoggedIn} = useContext(PlayerContext);
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        score:currentScore,
        
      });

      useEffect(()=>{
        setPlayerLoggedIn(false);
        setUsername('No player logged in.');
        setCurrentScore(0);
      })
    return(
        <div>
          <h1>You're logged out.</h1>
          <h3>Feel free to continue playing. Just click 'Go to Game'</h3>
          </div>
    )
}
export default Logout