//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const SatyaNarayanPooja = () => {
  // Sample data for Satya Narayan Pooja
  const sataynarayanPoojaData = {
    title: 'Satya Narayan Pooja',
    description: 'Satya Narayan Pooja is dedicated to Lord Vishnu in His form as Satya Narayan. It is performed to seek blessings for truth, purity, and well-being.',
    price: '₹4800',
    benefits: [
        'Invoking blessings for honesty, integrity, and righteousness.',
        'Purifying the mind and soul.',
        'Enhancing spiritual connection and prosperity.',
    ],
    howItHappens: [
        'Set up a sacred space with an image or idol of Lord Satya Narayan.',
        'Light incense and ghee lamp.',
        'Recite Satya Narayan Katha (narrative) from scriptures.',
        'Offer prasad (sacred food) to Lord Vishnu.',
        'Seek blessings for truthfulness and fulfillment of desires.',
    ],
    aboutSatyaNarayan: [
        'Satya Narayan is an embodiment of truth and virtue.',
        'The pooja is often performed during significant life events.',
        'Devotees believe it brings blessings for spiritual growth and material prosperity.',
    ],
    whyBookWithUs: [
        'Experienced priests well-versed in Vedic rituals.',
        'Customized ceremonies based on your intentions and family traditions.',
        'Creates an auspicious environment for divine grace.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{sataynarayanPoojaData.title}</h1>
      <p>{sataynarayanPoojaData.description}</p>
      <p className="price">Price: {sataynarayanPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Satya Narayan  Pooja:</h2>
        <ul>
          {sataynarayanPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Satya Narayan Pooja Happens:</h2>
        <ul>
          {sataynarayanPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Satya Narayan Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Satya Narayan:</h2>
        <ul>
          {sataynarayanPoojaData.aboutSatyaNarayan.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {sataynarayanPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default SatyaNarayanPooja;
