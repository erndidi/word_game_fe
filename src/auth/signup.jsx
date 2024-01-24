import { useState, useContext, useEffect } from 'react';
import '../styles/signup.css';
import {PlayerContext} from '../context/playerprovider';
import classNames from 'classnames';

//import { validEmail, validPassword } from '../../node_modules/regex/lib/regex';

function SignUp() {
 
  const {username, setUsername, currentScore, setCurrentScore,setPlayerLoggedIn,playerErrorMessage,sessionid,setSessionid,playerid,setPlayerId, setPlayerErrorMessage,isPlayerLoggedIn} = useContext(PlayerContext);
  const[isSignUp, setIsSignUp] = useState(false);
  const[signupSucceeded, setSignupSucceeded]=useState(true);
  const[usernameValid,setUsernameValid] = useState(true);
  const[emailValid,setEmaiValid] = useState(true);
  const[passwordValid,setPasswordValid] = useState(true);
  const [needsToSignIn, setNeedsToSignIn] = useState(true);


  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    score:currentScore,
    succeeded: false,
    errorMessage:''
  });

  useEffect(()=>{
     setNeedsToSignIn(true);
  })


  const handleSubmit = (event) => {
    event.preventDefault();
      //const data = {"firstname":firstname, "lastname":lastName,"username": username, "email":email, "password":password};
   console.log('current score is ',currentScore);
    
   if(isValid()){
    fetch('https://localhost:7077/api/SignUp', {
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
    console.log('update success '+data.update_success);
    setPlayerId(data.playerId);
    setUsername(data.username);
    setSessionid(data.sessionid);
    setCurrentScore(data.score);
    setIsSignUp(data.update_success);
    if(!data.update_success){
      setSignupSucceeded(false);      
    }else{
      setSignupSucceeded(true);
    }
    setNeedsToSignIn(false);
    
  })
  .catch(error => {
    console.error('Error:', error);
    setSignupSucceeded(false);
   
  });
   }



  };

function toggleSignup(){
  setIsSignUp((current) => !current);
  console.log('issign up '+isSignUp);
}
const handleInputChange = (event) => {
  const { name, value } = event.target;
  
  setFormData({ ...formData, [name]: value });
  console.log('username',username);
};

const resetError=(val)=>{
  setHasError(val);
  console.log('has error is ',hasError);
}
const isValid=()=>{
  let valid = true;
  if(isUsername()&&isEmail()&&isPassword()){
    return true;
  }else{
      if(!isUsername){
        setUsernameValid(false);
      }
      if(!isEmail()){
        setEmaiValid(false);
      }
      if(!isPassword()){
        setPasswordValid(false);
      }
  }
}

const isUsername=()=>{
  const regex = RegExp('^(?!\s*$).+');
  let isValid = regex.test(formData.username);
  setUsernameValid(isValid);
  return isValid; 
}

const isEmail=()=>{  
  const regex = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
  let isValid = regex.test(formData.email);
  setEmaiValid(isValid);
  return isValid
}

const isPassword=()=>{
  const regex = RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
  let isValid = regex.test(formData.password);
  setPasswordValid(isValid);
  return isValid;
}

console.log('username valid',usernameValid);
console.log('email valid',emailValid);
console.log('password valid',passwordValid);

  return (

    <div className="signup_container">
    {needsToSignIn && <div className="wrapper">
       

    <div className="title"><span>Sign up</span></div> 
    <form action="#">
     <div className="row">
         <i className="fas fa-user"></i>
         <input type="text" name="username" className={!usernameValid? 'errorBoundary':null}   value={formData.username} onChange={handleInputChange} placeholder="Username" required/>
        
       
       </div>
<div className= {classNames('row', { 'errorMessageHidden': usernameValid, 'errorMessageVisible': !usernameValid })} >
 <label  >username must be more than 2 characters.</label>
         </div>

     <div className="row">
         <i className="fas fa-user"></i>
         <input type="text" name="firstname"   value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />

       </div>
       <div className="row">
         <i className="fas fa-lock"></i>
         <input type="text" name="lastname" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
       </div>
       
       <div className="row">
         <i className="fas fa-user"></i>
         <input type="email" name="email" className={emailValid? 'errorBoundary':null} value={formData.email} onChange={handleInputChange} placeholder="Email" required/>
        
       </div>
       <div className= {classNames('row', { 'errorMessageHidden': emailValid, 'errorMessageVisible': !emailValid })} >
 <label >email must be in the proper format.</label>
         </div>
       <div className="row">
         <i className="fas fa-user"></i>
         <input type="password" name="password" className={passwordValid? 'errorBoundary':null} value={formData.password} onChange={handleInputChange} placeholder="password" required/>          
       </div>
       <div className= {classNames('row', { 'errorMessageHidden': passwordValid, 'errorMessageVisible': !passwordValid })} >
 <label >password must be 16 characters and contain at least one letter and one number.</label>
         </div>
    
    
       <div className="pass"><a href="#">Forgot password?</a></div>
       <div className="row button">
       <input type="submit" onClick={handleSubmit}   value="Sign Up"/>
        
       </div>
      
       
     </form>
    
   </div>}

      {
        !needsToSignIn && signupSucceeded && <div><h1>Sign up succeeded!</h1></div>
      }

{
        !needsToSignIn && !signupSucceeded && <div><h1>Something we wrong. Please try again</h1></div>
      }
    
 

     
      

  
  </div>
  );
}
export default SignUp