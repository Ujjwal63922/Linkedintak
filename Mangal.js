//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const MangalPooja = () => {
  // Sample data for Mangal Pooja
  const mangalPoojaData = {
    title: 'Mangal Pooja',
    description: 'Mangal Pooja is dedicated to the planet Mangal (Mars), which represents energy, courage, and assertiveness. It seeks to balance its influences and enhance positive aspects.',
    price: '₹4200',
    benefits: [
        'Alleviating malefic effects of Mangal.',
        'Boosting physical vitality and determination.',
        'Invoking blessings for courage and success.',
    ],
    howItHappens: [
        'Create a sacred space with an image or representation of Mangal.',
        'Light incense or candles.',
        'Recite Mangal mantras.',
        'Perform offerings (puja) specific to Mangal.',
        'Seek blessings for balanced energy.',
    ],
    aboutMangal: [
        'Mangal is associated with strength, passion, and action.',
        'It governs ambition, conflicts, and physical health.',
        'Mangal Pooja helps harmonize Mangal\'s energies and enhance positive traits.',
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in planetary rituals.',
        'Customized rituals based on individual needs.',
        'Creates an energetic atmosphere for Mangal alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="mangal-pooja-container">
      <h1>{mangalPoojaData.title}</h1>
      <p>{mangalPoojaData.description}</p>
      <p className="price">Price: {mangalPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Mangal  Pooja:</h2>
        <ul>
          {mangalPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Mangal Pooja Happens:</h2>
        <ul>
          {mangalPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Mangal Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Mangal:</h2>
        <ul>
          {mangalPoojaData.aboutMangal.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {mangalPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default MangalPooja;
