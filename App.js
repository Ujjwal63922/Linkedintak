// Sure! Let's create a React component for the Gopal Pooja. You can customize the content and styles as needed.

import React from 'react';
import './GopalPooja.css'; // Import your CSS file

const GopalPooja = () => {
  // Sample data for Gopal Pooja
  const gopalPoojaData = {
    title: 'Gopal Pooja',
    description:
      'Gopal Pooja celebrates the divine child form of Lord Krishna, known as Bal Gopal. It is believed to bring blessings for healthy children and protection for existing ones.',
    price: '₹2500',
    benefits: [
      'Blessings for healthy and happy children.',
      'Protection for children up to the age of 12 years.',
      'Removal of obstacles related to childbirth.',
    ],
    howItHappens: [
      'Setting up a sacred space with Bal Gopal idol or photo frame.',
      'Chanting of mantras and offering prayers.',
      'Feasting and sharing sweets with family and friends.',
    ],
    aboutBalGopal: [
      'Bal Gopal represents the playful and adorable child Krishna.',
      'Devotees seek his blessings for parenthood and child welfare.',
      'His divine energy brings joy and positivity to households.',
    ],
    whyBookWithUs: [
      'Authentic rituals and experienced pandits.',
      'Customized guidance and seamless arrangements.',
      'Ensures auspicious outcomes for devotees.',
    ],
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="gopal-pooja-container">
      <h1>{gopalPoojaData.title}</h1>
      <p>{gopalPoojaData.description}</p>
      <p className="price">Price: {gopalPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>

      {/* Benefits */}
      <div className="section">
        <h2>Benefits of Gopal Pooja:</h2>
        <ul>
          {gopalPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <div className="section">
        <h2>How Gopal Pooja Happens:</h2>
        <ul>
          {gopalPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* About Bal Gopal */}
      <div className="section">
        <h2>About Bal Gopal:</h2>
        <ul>
          {gopalPoojaData.aboutBalGopal.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {gopalPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GopalPooja;
