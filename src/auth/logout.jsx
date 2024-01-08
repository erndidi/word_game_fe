import { useState, useContext } from 'react';
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
    return(
        <div></div>
    )
}
export default Logout