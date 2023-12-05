import { useState, useContext } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const {playerData, createPlayer} = useContext(PlayerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPlayer(firstName,lastName,email,password);
    console.log(`First Name: ${firstName}, Email: ${email}`);
  };

  return (
   <div><h1>This is the sign up page</h1></div>
  );
}
export default SignUp