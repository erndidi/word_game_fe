import { useState } from 'react';

function Login() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="password" value={email} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Login