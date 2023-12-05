import { useState, useContext } from 'react';
import './signup.style.css';
//import {createPlayer} from '../services/playersvc'
function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const {playerData, createPlayer} = useContext(PlayerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('sessionid',"empty");
    formData.append('id',"0000000");

fetch('https://localhost:7077/api/Player?sessionId=empty', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



    console.log(`First Name: ${firstName}, Email: ${email}`);
  };

  return (
    <div className="signup_container">
    <div className="wrapper">
      <div className="title"><span>Login Form</span></div>
      <form action="#">
        <div className="row">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Email or Phone" required/>
        </div>
        <div className="row">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required/>
        </div>
        <div className="pass"><a href="#">Forgot password?</a></div>
        <div className="row button">
          <input type="submit" value="Login"/>
        </div>
        <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
      </form>
    </div>
  </div>
  );
}
export default SignUp