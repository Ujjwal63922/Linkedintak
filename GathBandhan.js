//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const GathBandhanPooja = () => {
  // Sample data for GathBandhan Pooja
  const gathPoojaData = {
    title: 'Gath Bandhan Pooja',
    description: 'Gath Bandhan Pooja is a sacred ritual performed during weddings. It symbolizes the union of two souls and the binding of their destinies.',
    price: '₹5500',
    benefits: [
        'Strengthening the marital bond and commitment.',
        'Invoking blessings for a harmonious and blissful married life.',
        'Creating a spiritual connection between partners.',
    ],
    howItHappens: [
        'The couples hands are tied together with a sacred thread (gath).',
        'Mantras are recited to invoke blessings from deities.',
        'The priest performs rituals to sanctify the bond.',
        'The couple seeks blessings for a lifelong partnership.'
    ],
    aboutGathBandhan: [
        'Gath Bandhan signifies the eternal bond between husband and wife.',
        'It represents love, trust, and mutual respect.',
        'The thread symbolizes the unbreakable connection.',
    ],
    whyBookWithUs: [
        'Experienced priests specializing in wedding rituals.',
        'Customized ceremonies based on your preferences.',
        'Creates a memorable and spiritually significant moment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="gathbandhan-pooja-container">
      <h1>{gathPoojaData.title}</h1>
      <p>{gathPoojaData.description}</p>
      <p className="price">Price: {gathPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of GathBandhan  Pooja:</h2>
        <ul>
          {gathPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How GathBandhan Pooja Happens:</h2>
        <ul>
          {gathPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About GathBandhan Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About GathBandhan:</h2>
        <ul>
          {gathPoojaData.aboutGathBandhan.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {gathPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default GathBandhanPooja;
