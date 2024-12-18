import React, { useState } from 'react';
import './eventCard.css'; // Ensure this file exists for styles
import EventPopup from '../EventPopup/eventPopup'; // Import the popup component

const EventCard = ({ event }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <button onClick={handlePopupOpen}>View Event</button>

      {isPopupOpen && (
        <EventPopup event={event} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default EventCard;
