import React from 'react';
import '../css/landingPage.css';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/user/login');
  };
  return (
    <>
    <div>
    {/* Include Navbar */}
    <Navbar />
    <div className="home">
      <h1>Welcome to Event Organizer</h1>
      <p>Your one-stop platform for organizing and managing events seamlessly.</p>
      <div className="cta-buttons">
      <button onClick={() => handleClick('/explore-events')}>Explore Events</button>
      <button onClick={() => handleClick('/organize-event')}>Organize Your Event</button>
      </div>
    </div>
     {/* Image with container for styling */}
     <div className="image-container">
          <img src='/assets/event1.jpg' alt='Event' />
        </div>

      {/* Include Footer */}
      <Footer />
    </div>
    </>
  );
};

export default Home;
