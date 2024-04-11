//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const KaliPooja = () => {
  // Sample data for Kali Pooja
  const kaliPoojaData = {
    title: 'Kali Pooja',
    description: 'Kali Pooja is dedicated to Goddess Kali, the fierce and powerful deity associated with the destruction of evil forces and protection.',
    price: '₹3500',
    benefits: [
        'Protection from negative energies and enemies.',
        'Courage, strength, and fearlessness.',
        'Removal of obstacles and challenges.',
    ],
    howItHappens: [
        'Set up a sacred space with an idol or image of Goddess Kali.',
        'Light a lamp or candle.',
        'Offer red hibiscus flowers and vermillion (kumkum).',
        'Chant the mantra "ॐ क्रीं कालिकायै नमः" 108 times.',
        'Invoke the fierce energy of Goddess Kali.',
        'Seek her blessings for protection and strength.',
    ],
    aboutKali: [
        'Goddess Kali is depicted with a dark complexion, wild hair, and a necklace of skulls.',
        'She is the destroyer of evil and protector of devotees.',
        'Worshiping Kali is essential for overcoming challenges and obstacles.',
    ],
    whyBookWithUs: [
        'Experienced priests and personalized guidance.',
        'Customized rituals to align with your specific intentions.',
        'Creates a powerful and protective energy in your surroundings.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{kaliPoojaData.title}</h1>
      <p>{kaliPoojaData.description}</p>
      <p className="price">Price: {kaliPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Kali  Pooja:</h2>
        <ul>
          {kaliPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Kali Pooja Happens:</h2>
        <ul>
          {kaliPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Kali Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Kali:</h2>
        <ul>
          {kaliPoojaData.aboutKali.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {kaliPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default KaliPooja;
