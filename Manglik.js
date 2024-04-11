//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const ManglikPooja = () => {
  // Sample data for Manglik Pooja
  const manglikPoojaData = {
    title: 'Manglik Pooja',
    description: 'Manglik Pooja is performed to mitigate the malefic effects of Mars (Mangal) in an individual\'s birth chart. It seeks blessings for a harmonious married life and overall well-being.',
    price: '₹4100',
    benefits: [
        'Balancing the energies related to Mars (Mangal).',
        'Alleviating potential obstacles in marriage.',
        'Invoking blessings for marital happiness and compatibility.',
    ],
    howItHappens: [
        'Create a sacred space with an image or representation of Mars.',
        'Light incense and offer red flowers.',
        'Recite Mars mantras from Vedic texts.',
        'Perform offerings (puja) specific to Mars.',
        'Seek blessings for a Manglik\'s well-being.',
    ],
    aboutManglik: [
        'Manglik dosha occurs when Mars is unfavorably positioned in the birth chart.',
        'It is believed to impact marital relationships and health.',
        'Manglik Pooja helps harmonize Mars\'s energies and reduce malefic effects.',
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in planetary rituals.',
        'Customized ceremonies based on individual astrological charts.',
        'Creates an auspicious environment for Mars alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="manglik-pooja-container">
      <h1>{manglikPoojaData.title}</h1>
      <p>{manglikPoojaData.description}</p>
      <p className="price">Price: {manglikPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Manglik  Pooja:</h2>
        <ul>
          {manglikPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Manglik Pooja Happens:</h2>
        <ul>
          {manglikPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Manglik Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Manglik:</h2>
        <ul>
          {manglikPoojaData.aboutManglik.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {manglikPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default ManglikPooja;
