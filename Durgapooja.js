// DurgaPoojaImage.js

import React from 'react';
import './App.css'; // Import your CSS file

const DurgaPoojaImage = () => {
  // Sample data for Durga Pooja
  const durgaPoojaData = {
    title: 'Durga Pooja',
    description:
      'Durga Puja, a vibrant Hindu festival, celebrates the victory of Goddess Durga over the demon Mahishasura. It symbolizes the triumph of good over evil. Devotees worship the ten-armed goddess with fervor and enthusiasm.',
    price: '₹3500',
    benefits: [
      'Invokes blessings for strength, courage, and protection.',
      'Celebrates the divine feminine energy and empowerment.',
      'Promotes unity, joy, and cultural heritage.',
    ],
    howItHappens: [
      'Elaborate pandals (temporary structures) are set up.',
      'Idols of Goddess Durga are beautifully adorned.',
      'Chanting of mantras, cultural performances, and feasting occur.',
    ],
    aboutGoddessDurga: [
      'Goddess with ten arms, riding a lion or tiger.',
      'Symbolizes power, courage, and compassion.',
      'Defeats the buffalo demon Mahishasura.',
    ],
    postPoojaCelebrations: [
      'Visiting pandals, enjoying cultural programs.',
      'Exchanging greetings and sweets with loved ones.',
      'Participating in processions and immersion of idols.',
    ],
    whyBookWithUs: [
      'Authentic rituals and experienced priests.',
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
    <div className="durga-pooja-container">
      <h1>{durgaPoojaData.title}</h1>
      <p>{durgaPoojaData.description}</p>
      <p className="price">Price: {durgaPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>

      {/* Benefits */}
      <div className="section">
        <h2>Benefits of Durga Pooja:</h2>
        <ul>
          {durgaPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
      {/* How It Happens */}
      <div className="section">
        <h2>How Durga Pooja Happens:</h2>
        <ul>
          {durgaPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       <hr></hr>
      {/* About Goddess Durga */}
      <div className="section">
        <h2>About Goddess Durga:</h2>
        <ul>
          {durgaPoojaData.aboutGoddessDurga.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
       <hr></hr>
      {/* Post-Pooja Celebrations */}
      <div className="section">
        <h2>Post-Pooja Celebrations:</h2>
        <ul>
          {durgaPoojaData.postPoojaCelebrations.map((celebration, index) => (
            <li key={index}>{celebration}</li>
          ))}
        </ul>
      </div>
       <hr></hr>
      {/* Why Book With Us */}
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {durgaPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DurgaPoojaImage;
