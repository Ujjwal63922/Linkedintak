//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const PitraDoshPooja = () => {
  // Sample data for Pitra Dosh Pooja
  const pitraDoshPoojaData = {
    title: 'Pitra Dosh Pooja',
    description: 'Pitra Dosh Pooja is dedicated to ancestors and seeks to alleviate any ancestral curses or negative karma. It aims to honor and appease departed souls.',
    price: '₹4200',
    benefits: [
        'Mitigating negative effects of ancestral karma.',
        'Invoking blessings for family harmony and well-being.',
        'Creating a positive connection with ancestors.',
    ],
    howItHappens: [
        'Set up a sacred space with images or representations of ancestors.',
        'Light incense and offer food (prasad) to departed souls.',
        'Recite mantras for ancestral peace and forgiveness.',
        'Perform rituals to honor ancestors.',
        'Seek blessings for ancestral healing.',
    ],
    aboutPitraDosh: [
        'Pitra Dosh arises from unresolved issues with ancestors.',
        'It can affect family life, health, and prosperity.',
        'Pitra Dosh Pooja helps pacify ancestral energies and bring harmony.',
    ],
    whyBookWithUs: [
        'Experienced priests knowledgeable in ancestral rituals.',
        'Customized ceremonies based on family lineage and specific issues.',
        'Creates a spiritually charged atmosphere for ancestral blessings.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{pitraDoshPoojaData.title}</h1>
      <p>{pitraDoshPoojaData.description}</p>
      <p className="price">Price: {pitraDoshPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Pitra Dosh  Pooja:</h2>
        <ul>
          {pitraDoshPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Pitra Dosh Pooja Happens:</h2>
        <ul>
          {pitraDoshPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Pitra Dosh Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Pitra Dosh:</h2>
        <ul>
          {pitraDoshPoojaData.aboutPitraDosh.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {pitraDoshPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default PitraDoshPooja;
