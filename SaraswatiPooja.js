//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const SaraswatiPooja = () => {
  // Sample data for Saraswati Pooja
  const saraswatiPoojaData = {
    title: 'Saraswati Pooja',
    description:
      'Saraswati Pooja is dedicated to Goddess Saraswati, the deity of knowledge, music, arts, and wisdom. It brings blessings for education, creativity, and intellect.',
    price: '₹3200',
    benefits: [
      'Enhanced learning abilities and academic success.',
      'Boosted creativity and artistic talents.',
      'Wisdom and clarity of thought.',
    ],
    howItHappens: [
      'Set up a sacred space with an idol or image of Goddess Saraswati.',
      'Light an incense stick or lamp.',
      'Offer white flowers, especially lotus.',
      'Chant the mantra "ॐ ऐं सरस्वत्यै नमः" 108 times.',
      'Place books, musical instruments, or tools related to learning and creativity.',
      'Seek blessings for knowledge and wisdom.',
    ],
    aboutSaraswati: [
      'Goddess Saraswati is revered as the embodiment of knowledge and arts.',
      'She is depicted with a veena (musical instrument) and a book.',
      'Worshiping Saraswati is essential for students, artists, and scholars.',
    ],
    whyBookWithUs: [
      'Experienced priests and personalized guidance.',
      'Tailored rituals to suit your specific intentions.',
      'Creates a positive and conducive atmosphere for learning and creativity.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{saraswatiPoojaData.title}</h1>
      <p>{saraswatiPoojaData.description}</p>
      <p className="price">Price: {saraswatiPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Saraswati  Pooja:</h2>
        <ul>
          {saraswatiPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Saraswati Pooja Happens:</h2>
        <ul>
          {saraswatiPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Saraswati Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Saraswati:</h2>
        <ul>
          {saraswatiPoojaData.aboutSaraswati.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {saraswatiPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default SaraswatiPooja;
