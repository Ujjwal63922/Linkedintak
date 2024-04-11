//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const RudraBhishekPooja = () => {
  // Sample data for RudraBhishek Pooja
  const rudraPoojaData = {
    title: 'Rudra Bhishek Pooja',
    description: 'Rudra Bhishek Pooja is dedicated to Lord Shiva and invokes His blessings. It is performed with reverence and devotion to seek protection, inner peace, and spiritual growth.',
    price: '₹5000',
    benefits: [
        'Clearing negative energies and obstacles.',
        'Invoking blessings for mental clarity and tranquility.',
        'Enhancing spiritual connection and well-being.',
    ],
    howItHappens: [
        'Set up a sacred space with a Shiva lingam or image.',
        'Perform abhishek (ritual bathing) with water, milk, honey, and ghee.',
        'Recite Rudra mantras from the Yajurveda.',
        'Offer bilva leaves and other sacred items.',
        'Seek blessings for purification and divine grace.',
    ],
    aboutRudraBhishek: [
        'Rudra Bhishek is a powerful Vedic ritual.',
        'It honors Lord Shiva as the destroyer of negativity and ignorance.',
        'Studying Bhagavad Gita leads to self-realization and spiritual growth.',
    ],
    whyBookWithUs: [
        'Experienced priests well-versed in Vedic rituals.',
        'Customized rituals based on your intentions and needs.',
        'Creates an auspicious environment for spiritual elevation.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="rudrabhishek-pooja-container">
      <h1>{rudraPoojaData.title}</h1>
      <p>{rudraPoojaData.description}</p>
      <p className="price">Price: {rudraPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Rudra  Pooja:</h2>
        <ul>
          {rudraPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How RudraBhishek Pooja Happens:</h2>
        <ul>
          {rudraPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About RudraBhishek Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About RudraBhishek:</h2>
        <ul>
          {rudraPoojaData.aboutRudraBhishek.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {rudraPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default RudraBhishekPooja;
