//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const MrityunjayPooja = () => {
  // Sample data for Mrityunjay Pooja
  const mrityunjayPoojaData = {
    title: 'Maha Mrityunjaya Pooja',
    description:
      'Maha Mrityunjaya Pooja is dedicated to Lord Shiva and the Maha Mrityunjaya Mantra. It is performed to seek protection, good health, and victory over death.',
    price: '₹3500',
    benefits: [
      'Ideal for living a long and healthy life.',
      'Effective in nullifying negative energies.',
      'Relief from Pitra Dosh and Kaal Sarp Dosh.',
      'Promotes prosperity and well-being.',
    ],
    howItHappens: [
      'Perform the puja in the evening upon sighting the moon.',
      'Wear white attire after bathing.',
      'Offer prayers to Lord Ganesha and Lord Shiva in your mind.',
      'Go to a place where the moon is visible (e.g., terrace or balcony).',
      'Light a lamp using cow ghee.',
      'Light camphor (karpur).',

    ],
    aboutMrityunjaya: [
      'The Maha Mrityunjaya Mantra is a powerful chant associated with Lord Shiva.',
      'It can resolve any problem and promote spiritual growth.',
    ],
    whyBookWithUs: [
      'Experienced priests and knowledgeable guidance.',
      'Customized rituals based on your specific needs.',
      'Ensures protection and victory over death.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="mrityunjay-pooja-container">
      <h1>{mrityunjayPoojaData.title}</h1>
      <p>{mrityunjayPoojaData.description}</p>
      <p className="price">Price: {mrityunjayPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Mrityunjay  Pooja:</h2>
        <ul>
          {mrityunjayPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Mrityunjay Pooja Happens:</h2>
        <ul>
          {mrityunjayPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Mrityunjay Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Mrityunjay:</h2>
        <ul>
          {mrityunjayPoojaData.aboutMrityunjaya.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {mrityunjayPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default MrityunjayPooja;
