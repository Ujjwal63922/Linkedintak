//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const KetuPooja = () => {
  // Sample data for Ketu Pooja
  const  ketuPoojaData = {
    title: 'Ketu Pooja',
    description: 'Ketu Pooja is dedicated to the planet Ketu, which represents spirituality, liberation, and karmic influences. It seeks to balance energies and enhance positive aspects.',
    price: '₹3800',
    benefits: [
        'Mitigating negative effects of Ketu.',
        'Promoting spiritual growth and inner wisdom.',
        'Invoking blessings for clarity and detachment.',
    ],
    howItHappens: [
        'Create a sacred space with an image or representation of Ketu.',
        'Light incense or candles.',
        'Recite Ketu mantras.',
        'Perform offerings (puja) specific to Ketu.',
        'Seek blessings for karmic balance.',
    ],
    aboutKetu: [
        'Ketu is a shadow planet associated with past lives, intuition, and mystical experiences.',
        'It governs spiritual pursuits, psychic abilities, and detachment from material desires.',
        'Ketu Pooja helps harmonize Ketu\'s energies and promote spiritual evolution.',
    ],
    whyBookWithUs: [
        'Experienced priests well-versed in Vedic astrology and planetary rituals.',
        'Customized rituals tailored to individual spiritual needs.',
        'Creates an auspicious environment for Ketu alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{ketuPoojaData.title}</h1>
      <p>{ketuPoojaData.description}</p>
      <p className="price">Price: {ketuPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Ketu  Pooja:</h2>
        <ul>
          {ketuPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Ketu Pooja Happens:</h2>
        <ul>
          {ketuPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Ketu Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Ketu:</h2>
        <ul>
          {ketuPoojaData.aboutKetu.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {ketuPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default KetuPooja;
