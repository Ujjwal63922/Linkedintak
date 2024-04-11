//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const NakshtraPooja = () => {
  // Sample data for Nakshtra Pooja
  const nakshatraPoojaData = {
    title: 'Nakshatra Pooja',
    description: 'Nakshatra Pooja is dedicated to the lunar constellations (nakshatras) in Vedic astrology. It seeks blessings for specific life aspects associated with each nakshatra.',
    price: '₹3900',
    benefits: [
        'Harmonizing energies related to a specific nakshatra.',
        'Mitigating negative effects of planetary positions.',
        'Invoking blessings for specific life goals.',
    ],
    howItHappens: [
        'Identify the relevant nakshatra based on the individual\'s birth chart.',
        'Create a sacred space with images or symbols representing the nakshatra.',
        'Recite nakshatra-specific mantras.',
        'Perform offerings (puja) related to the nakshatra deity.',
        'Seek blessings for alignment with the nakshatra\'s qualities.',
    ],
    aboutNakshatra: [
        'Nakshatras are 27 lunar constellations with unique characteristics.',
        'Each nakshatra governs specific aspects of life, such as career, health, and relationships.',
        'Nakshatra Pooja helps balance energies and enhance positive influences.',
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in nakshatra rituals.',
        'Customized ceremonies based on individual birth charts.',
        'Creates an auspicious environment for nakshatra alignment.',
    ],
};


  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="Nakshtra-pooja-container">
      <h1>{nakshtraPoojaData.title}</h1>
      <p>{nakshtraPoojaData.description}</p>
      <p className="price">Price: {nakshtraPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Nakshtra  Pooja:</h2>
        <ul>
          {nakshtraPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Nakshtra Pooja Happens:</h2>
        <ul>
          {nakshtraPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Nakshtra Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Nakshtra:</h2>
        <ul>
          {nakshtraPoojaData.aboutNakshatra.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {nakshtraPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default NakshtraPooja;
