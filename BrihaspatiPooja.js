//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const BrihaspatiPooja = () => {
  // Sample data for Brihaspati Pooja
  const brihaspatiPoojaData = {
    title: 'Brihaspati Pooja',
    description: 'Brihaspati Pooja is dedicated to Lord Brihaspati (Jupiter), the planet associated with wisdom, knowledge, and prosperity. It seeks blessings for intellect, good fortune, and spiritual growth.',
    price: '₹4200',
    benefits: [
        'Invoking blessings for wisdom, guidance, and positive influence.',
        'Mitigating malefic effects of Jupiter in the birth chart.',
        'Enhancing educational pursuits and career prospects.',
    ],
    howItHappens: [
        'Create a sacred space with an image or representation of Lord Brihaspati.',
        'Light incense and offer yellow flowers.',
        'Recite Brihaspati mantras from Vedic texts.',
        'Perform offerings (puja) specific to Jupiter.',
        'Seek blessings for knowledge and abundance.',
    ],
    aboutBrihaspati: [
        'Brihaspati is the teacher of the gods and symbolizes divine wisdom.',
        'Jupiter governs education, spirituality, and expansion.',
        'Brihaspati Pooja helps harmonize Jupiters energies and attract positive outcomes.'
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in planetary rituals.',
        'Customized ceremonies based on astrological considerations.',
        'Creates an auspicious environment for Jupiter alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="brihaspati-pooja-container">
      <h1>{brihaspatiPoojaData.title}</h1>
      <p>{brihaspatiPoojaData.description}</p>
      <p className="price">Price: {brihaspatiPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Brihaspati  Pooja:</h2>
        <ul>
          {brihaspatiPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Brihaspati Pooja Happens:</h2>
        <ul>
          {brihaspatiPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Brihaspati Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Brihaspati:</h2>
        <ul>
          {brihaspatiPoojaData.aboutBrihaspati.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {brihaspatiPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default BrihaspatiPooja;
