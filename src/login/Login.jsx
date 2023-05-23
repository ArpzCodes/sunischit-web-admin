import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { Route, Routes, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(email=="admin@gmail.com"){

    
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Clear previous error messages, if any
        setLoginError('');

        // Show login successful message
        navigate('/admin');
      })
      .catch((error) => {
        // Show error message for unsuccessful login
        setLoginError('Invalid email or password');
        alert('Login error:', error);
      });}
      else{
        setLoginError("Not an admin")
      }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {loginError && <p>{loginError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
