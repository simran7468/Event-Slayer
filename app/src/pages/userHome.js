import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Carousel from '../components/Carousel/carousel';
import EventCard from '../components/EventCards/eventCard';
import '../css/userHome.css';

const NewHome = () => {
    
    const events = [
        {
          title: 'Music Concert',
          description: 'Join us for a night of amazing music!',
          image: '/assets/event1.jpg',
          address: '123 Music Lane',
          city: 'Los Angeles',
          date: '2024-10-20',
          time: '7:00 PM',
          organizer: 'Music Fest Inc.',
          ticketsSold: 50,
          ticketsLeft: 150,
        },
        {
          title: 'Art Exhibition',
          description: 'Explore the beauty of modern art.',
          image: '/assets/event2.jpg',
          address: '456 Art St',
          city: 'New York',
          date: '2024-11-05',
          time: '10:00 AM',
          organizer: 'Art World',
          ticketsSold: 75,
          ticketsLeft: 125,
        },
        {
          title: 'Tech Conference',
          description: 'Learn about the latest trends in technology.',
          image: '/assets/event3.jpg',
          address: '789 Tech Blvd',
          city: 'San Francisco',
          date: '2024-12-12',
          time: '9:00 AM',
          organizer: 'Tech Innovators',
          ticketsSold: 100,
          ticketsLeft: 50,
        },
        {
          title: 'Food Festival',
          description: 'Taste dishes from around the world.',
          image: '/assets/event4.jpg',
          address: '321 Food Ave',
          city: 'Chicago',
          date: '2024-12-25',
          time: '11:00 AM',
          organizer: 'Foodies Unite',
          ticketsSold: 30,
          ticketsLeft: 70,
        },
      ];

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="event-cards-container">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default NewHome;
