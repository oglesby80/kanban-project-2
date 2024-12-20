import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        // Call login function and get the token directly
        const token = await login(loginData);

        // Use Auth to save the token
        Auth.login(token); // Assuming Auth.login stores the token in localStorage

        console.log('Login successful:', token);
    } catch (err) {
        console.error('Failed to login', err);
    }
};


  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label >Username</label>
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
          placeholder='Enter your username'
        />
      <label>Password</label>
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
          placeholder='Enter your password'
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
    
  )
};

export default Login;
