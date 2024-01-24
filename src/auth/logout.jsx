import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import {PlayerContext} from '../context/playerprovider';

function Logout(){
    const {username, setUsername, currentScore,playerid, setCurrentScore,previousScore, setPreviousScore, sessionid, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters,isPlayerLoggedIn,setPlayerLoggedIn} = useContext(PlayerContext);
    const [formData, setFormData] = useState({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      playerId:playerid,
      password: '',
      score:currentScore,
      succeeded: false,
      playerErrorMessage:''
    });

      useEffect(()=>{
        console.log('useeffect logout');
        console.log('formData is ');
        console.log(formData);
        updateScore();
        setPlayerLoggedIn(false);
        setUsername('No player logged in.');
        setCurrentScore(0);
      })

      const updateScore =()=>{
        fetch('https://localhost:7077/api/Logout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
        body: JSON.stringify(formData),
      })
      }
    return(
        <div>
          <h1>You're logged out.</h1>
          <h3>Feel free to continue playing. Just click 'Go to Game'</h3>
          </div>
    )
}
export default Logout