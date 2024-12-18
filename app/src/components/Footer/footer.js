import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Event Slayer</h2>
          <p>
            Event Slayer is a platform dedicated to making event planning and management seamless and stress-free.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +123-456-7890</span>
            <span><i className="fas fa-envelope"></i> info@eventorganizer.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Event Organizer | Designed by Naveen Malviya
      </div>
    </footer>
  );
};

export default Footer;
