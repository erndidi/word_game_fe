import { useState, useContext } from 'react';
import '../styles/signup.css';
import {PlayerContext} from '../context/playerprovider';

function SignUp() {
 
  const {username, setUsername, score,setScore, sessionid, setSessionid, attempts, setAttempts} = useContext(PlayerContext);
  const[isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });



  const handleSubmit = (event) => {
    event.preventDefault();
      //const data = {"firstname":firstname, "lastname":lastName,"username": username, "email":email, "password":password};
   
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
    setUsername(data.username);
    setSessionid(data.sessionid);
    setScore(data.score);
    console.log("username is ")
    console.log(username);
    console.log("sessionid is ")
    console.log(sessionid);
    console.log("score is ")
    console.log(score);
    
  })
  .catch(error => {
    console.error('Error:', error);
   
  });

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



function signUp(){

}

  return (
    <div className="signup_container">
    <div className="wrapper">

     <div className="title"><span>Sign up</span></div> 
      <form action="#">
      <div className="row">
          <i className="fas fa-user"></i>
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" required/>

        </div>
      <div className="row">
          <i className="fas fa-user"></i>
          <input type="text" name="firstname" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />

        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input type="text" name="lastname" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
        </div>
        
        <div className="row">
          <i className="fas fa-user"></i>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required/>

        </div>
        <div className="row"> 
          <i className="fas fa-lock"></i>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange}  placeholder="Password" required/>
        </div>
        <div className="pass"><a href="#">Forgot password?</a></div>
        <div className="row button">
        <input type="submit" onClick={handleSubmit}   value="Sign Up"/>
         
        </div>
       
        
      </form>
    </div>
  </div>
  );
}
export default SignUp