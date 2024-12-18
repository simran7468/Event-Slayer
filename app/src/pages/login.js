import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from '../lib/constants';
import '../css/login.css'

const LoginForm = () => {

  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${BASE_API_URL}user/login`, formData);
        console.log(response.data);
        setRedirect(true); // Set redirect state to true on successful login
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
  
    if (redirect) {
      return <Navigate to="/user/home" />;
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      {/* <div className="links">
      <Link to="">   <button type="submit">Login</button></Link>
    
      </div> */}



      <div className="links">
        <Link to="/user/signup">Don't have an account? Sign Up</Link>
        <Link to="/user/forget-password">Forgot Password?</Link>
      </div>
    </form>
  );
};

export default LoginForm;
