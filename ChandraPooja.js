//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const ChandraPooja = () => {
  // Sample data for Chandra Pooja
  const chandraPoojaData = {
    title: 'Chandra Pooja',
    description:
      'Chandra Pooja is dedicated to Lord Chandra (the Moon). It is performed to seek blessings, mental peace, and to solve mind-related problems.',
    price: '₹3500',
    benefits: [
      'Ideal for solving issues related to the bad positioning of Chandra Navgraha in horoscope or janam kundli.',
      'Beneficial for performing artists, musicians, writers, and actors seeking fame and success.',
      'Helps alleviate mental problems, including depression.',
      'Aids in solving difficulties in the mother’s life.',
      'Assists in regaining lost wealth and resolving debt-related issues.',
    ],
    howItHappens: [
      'Perform the puja in the evening upon sighting the moon.',
      'After bathing, wear white attire.',
      'Offer prayers to Lord Ganesha and Lord Shiva in your mind.',
      'Go to a place where the moon is visible (e.g., terrace or balcony).',
      'Light a lamp using cow ghee.',

    ],
    aboutChandra: [
      'Chandra (the Moon) is one of the Navgrahas (nine planets) in Hinduism.',
      'It governs the mind, emotions, and sentiments.',
      'Following Chandra Puja brings harmony and auspiciousness.',
    ],
    whyBookWithUs: [
      'Experienced Chandra experts and priests.',
      'Customized guidance for your specific space.',
      'Ensures a harmonious and auspicious environment.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="chandra-pooja-container">
      <h1>{chandraPoojaData.title}</h1>
      <p>{chandraPoojaData.description}</p>
      <p className="price">Price: {chandraPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Chandra  Pooja:</h2>
        <ul>
          {chandraPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Chandra Pooja Happens:</h2>
        <ul>
          {vastuPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Chandra Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Chandra Pooja:</h2>
        <ul>
          {chandraPoojaData.aboutChandra.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {chandraPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default ChandraPooja;
