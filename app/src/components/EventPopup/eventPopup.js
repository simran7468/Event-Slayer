import React from 'react';
import './eventPopup.css';

const EventPopup = ({ event, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times; {/* Close icon */}
        </button>
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} className="popup-image" />
        <p><strong>Address:</strong> {event.address}</p>
        <p><strong>City:</strong> {event.city}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
        <p><strong>Tickets Sold:</strong> {event.ticketsSold}</p>
        <p><strong>Tickets Left:</strong> {event.ticketsLeft}</p>
        <div className="popup-buttons">
          <button onClick={onClose}>Close</button>
          <button className="buy-tickets-button">Buy Tickets</button>
          <button className="like-button">Like</button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
