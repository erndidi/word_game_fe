import { useState, useContext } from 'react';
import './signup.style.css';
//import {createPlayer} from '../services/playersvc'
function SignUp() {
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
 // const {playerData, createPlayer} = useContext(PlayerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit');
    console.log('username is '+username);
   //const data = {"firstname":firstname, "lastname":lastName,"username": username, "email":email, "password":password};
    console.log('data is ');
    console.log(formData);

fetch('https://localhost:7077/api/SignUp', {
  method: 'POST',
  body: JSON.stringify(formData),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
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

      {isSignUp ? <div className="title"><span>Sign up</span></div> : <div className="title"><span>Login</span></div>}
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
          {!isSignUp ? <input type="submit"   value="Login"/> : <input type="submit" onClick={handleSubmit}   value="Sign Up"/>}
         
        </div>
       { !isSignUp ? <div className="signup-link">Not a member? <a onClick={toggleSignup}>Signup now</a></div>: null} 
        
      </form>
    </div>
  </div>
  );
}
export default SignUp