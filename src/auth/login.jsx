import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import {PlayerContext} from '../context/playerprovider';

function Login() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {username, setUsername, currentScore, setCurrentScore,setPlayer, playerid,setPlayerId, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters, isPlayerLoggedIn,setPlayerLoggedIn} = useContext(PlayerContext);

  const [formData, setFormData] = useState({  
    playerid:'000000',
    username:'',
    email: '',
    password: '',
    score: currentScore,
    playerErrorMessage: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
      //const data = {"firstname":firstname, "lastname":lastName,"username": username, "email":email, "password":password};
      console.log("form data is ");
      console.log(formData);
      console.log('current score is ',currentScore);
   
fetch('https://localhost:7077/api/Login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  body: JSON.stringify(formData),
})
  .then(response => response.json())
  .then(data => {
    console.log("data is ");
    console.log(data);
    setUsername(data.username);
    setSessionid(data.sessionid);
    setCurrentScore(data.score);
    setPlayerId(data.playerId);
  })
  .catch(error => {
    console.error('Error:', error);
   
  });
  console.log("player id is ")
  console.log(playerid);

  //setPlayerLoggedIn(true);
  console.log('is player logged in ',isPlayerLoggedIn);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormData({ ...formData, [name]: value });
    console.log('username',username);
  };

  const handleSignup = () =>{
    const navigate = useNavigate();
    navigate('/signup');
  }

  return (
  
<div className="signup_container">
    <div className="wrapper">

     <div className="title"><span>Login</span></div> 
      <form action="#">
         
      <div className="row">
          <i className="fas fa-user"></i>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required/>

        </div>  
        <div className="row">
          <i className="fas fa-lock"></i>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange}  placeholder="Password" required/>
        </div>
        <div className="row button">
          <input type="submit" onClick={handleSubmit}   value="Login"/> 
           
        </div>
    
        
        </form> 
        <div className="signup-link">Not a member? <a onClick={handleSignup}>Signup now</a></div>
        </div>
        </div>
  );
}
export default Login