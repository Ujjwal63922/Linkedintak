//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const BhagwatPooja = () => {
  // Sample data for Bhagwat Pooja
  const bhagwatPoojaData = {
    title: 'Bhagavad Gita Pooja',
    description: 'Bhagavad Gita Pooja is dedicated to Lord Krishna and the sacred scripture Bhagavad Gita. It brings blessings for spiritual wisdom, guidance, and inner strength.',
    price: '₹3500',
    benefits: [
        'Enhanced spiritual knowledge and understanding.',
        'Guidance for life\'s challenges and dilemmas.',
        'Inner strength and resilience.',
    ],
    howItHappens: [
        'Set up a sacred space with an image or book of Bhagavad Gita.',
        'Light a ghee lamp or incense.',
        'Recite verses from Bhagavad Gita, especially Chapter 2 (Sankhya Yoga).',
        'Meditate on Lord Krishna\'s teachings.',
        'Seek blessings for spiritual wisdom and strength.',
    ],
    aboutBhagavadGita: [
        'Bhagavad Gita is a revered scripture containing Lord Krishna\'s teachings to Arjuna.',
        'It addresses life\'s purpose, duty, and devotion.',
        'Studying Bhagavad Gita leads to self-realization and spiritual growth.',
    ],
    whyBookWithUs: [
        'Experienced priests and personalized guidance.',
        'Customized rituals based on your intentions.',
        'Creates a sacred atmosphere for spiritual contemplation.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="bhagwat-pooja-container">
      <h1>{bhagwatPoojaData.title}</h1>
      <p>{bhagwatPoojaData.description}</p>
      <p className="price">Price: {bhagwatPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Bhagwat  Pooja:</h2>
        <ul>
          {bhagwatPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Bhagwat Pooja Happens:</h2>
        <ul>
          {bhagwatPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Bhagwat Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Bhagwat:</h2>
        <ul>
          {bhagwatPoojaData.aboutBhagavadGita.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {bhagwatPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default BhagwatPooja;
