//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const NavgrahPooja = () => {
  // Sample data for Navgrah Pooja
  const navgrahPoojaData = {
    title: 'Navgrah Pooja',
    description: 'Navgrah Pooja is dedicated to the nine celestial bodies (planets) in Hindu astrology. It seeks to balance their energies and mitigate negative influences.',
    price: '₹4500',
    benefits: [
        'Harmonizing planetary energies for overall well-being.',
        'Alleviating malefic effects of planets.',
        'Invoking blessings for success, health, and prosperity.',
    ],
    howItHappens: [
        'Create a sacred space with images or representations of the nine planets.',
        'Light incense or candles.',
        'Recite planetary mantras associated with each graha (planet).',
        'Perform offerings (puja) specific to each planet.',
        'Seek blessings for planetary harmony.',
    ],
    aboutNavgrah: [
        'Navgrah consists of the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.',
        'Each planet governs specific aspects of life and has its own significance.',
        'Navgrah Pooja helps balance planetary energies and enhance positive influences.',
    ],
    whyBookWithUs: [
        'Experienced priests well-versed in Vedic astrology.',
        'Customized rituals based on your astrological chart.',
        'Creates an auspicious environment for planetary alignment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="Navgrah-pooja-container">
      <h1>{navgrahPoojaData.title}</h1>
      <p>{navgrahPoojaData.description}</p>
      <p className="price">Price: {navgrahPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Navgrah  Pooja:</h2>
        <ul>
          {navgrahPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Navgrah Pooja Happens:</h2>
        <ul>
          {navgrahPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Navgrah Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Navgrah:</h2>
        <ul>
          {navgrahPoojaData.aboutNavgrah.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {navgrahPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default NavgrahPooja;
