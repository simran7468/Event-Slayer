import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../lib/constants'
import '../css/signup.css'
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    standard: '',
    address: '',
    city: '',
    state: ''
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
      const response = await axios.post(`${BASE_API_URL}user/signup`, formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} required />
      <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="text" name="standard" placeholder="Standard" value={formData.standard} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
      <button type="submit">Sign Up</button>
      <div className="links">
        <Link to="/user/login">Back to Login</Link>
      </div>
    </form>
  );
};

export default SignupForm;
