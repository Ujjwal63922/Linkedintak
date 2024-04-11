//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const RahuPooja = () => {
  // Sample data for Rahu Pooja
  const rahuPoojaData = {
    title: 'Rahu Pooja',
    description: 'Rahu Pooja is dedicated to the planet Rahu, which represents mystery, illusion, and hidden desires. It seeks to mitigate negative effects and enhance positive energies.',
    price: '₹4000',
    benefits: [
        'Alleviating malefic effects of Rahu.',
        'Enhancing intuition and spiritual insight.',
        'Invoking blessings for clarity and focus.',
    ],
    howItHappens: [
        'Create a sacred space with an image or representation of Rahu.',
        'Light incense or candles.',
        'Recite Rahu mantras.',
        'Perform offerings (puja) specific to Rahu.',
        'Seek blessings for balance and protection.',
    ],
    aboutRahu: [
        'Rahu is a shadow planet associated with eclipses and hidden forces.',
        'It governs material desires, ambition, and sudden changes.',
        'Rahu Pooja helps harmonize Rahu\'s energies and reduce malefic influences.',
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in planetary rituals.',
        'Customized rituals based on individual needs.',
        'Creates a spiritually charged atmosphere for Rahu alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="rahu-pooja-container">
      <h1>{rahuPoojaData.title}</h1>
      <p>{rahuPoojaData.description}</p>
      <p className="price">Price: {rahuPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Rahu  Pooja:</h2>
        <ul>
          {rahuPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Rahu Pooja Happens:</h2>
        <ul>
          {rahuPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Rahu Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Rahu:</h2>
        <ul>
          {rahuPoojaData.aboutRahu.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {rahuPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default RahuPooja;
