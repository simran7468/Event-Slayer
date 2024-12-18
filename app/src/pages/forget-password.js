import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from '../lib/constants';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_API_URL}user/changepass`, { email });
      console.log(response.data);
    } catch (error) {
      console.error('Error with password reset:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        required
      />
      <button type="submit">Reset Password</button>

      <div className="links">
        <Link to="/user/login">Back to Login</Link>
        <Link to="/user/signup">Don't have an account? Sign Up</Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
