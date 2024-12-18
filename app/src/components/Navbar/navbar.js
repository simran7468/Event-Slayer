import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">EventSlayer</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/user/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/user/login">Login</Link></li>
        <li><Link to="/user/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
