import React from 'react';
import Slider from 'react-slick';
import './carousel.css'; // Ensure this file exists for styles

const Carousel = () => {
  const images = [
    '/assets/event1.jpg',
    '/assets/event2.jpg',
    '/assets/event3.jpg',
    '/assets/event4.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set slide change interval to 2000 ms (2 seconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Event ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
