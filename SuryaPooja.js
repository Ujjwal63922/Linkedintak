//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const SuryaPooja = () => {
  // Sample data for Surya Pooja
  const suryaPoojaData = {
    title: 'Surya Pooja',
    description:
      'Surya Pooja is dedicated to Surya, the Hindu Sun God. It brings courage, relief from horoscope-related problems, and health benefits.',
    price: '₹3500',
    benefits: [
      'Courage to face difficult situations.',
      'Escape from horoscope-related troubles.',
      'Relief from health-related issues.',
    ],
    howItHappens: [
      'Perform the puja facing the rising sun.',
      'Light a lamp using red-colored oil.',
      'Offer lotus or any red flowers.',
      'Apply red-colored Tika or Chandan on the forehead.',
      'Chant the mantra "ह्रीं रवये कालाय नमः" 108 times.',
      'Offer leaves of Ashoka tree.',
      'Dhoop should be of Tagar.',
    ],
    aboutSurya: [
      'Surya is the Hindu Sun God and a significant Navgraha.',
      'Worshiping Surya helps avoid horoscope-related troubles.',
      'It is beneficial for people in authoritative positions.',
    ],
    whyBookWithUs: [
      'Experienced priests and knowledgeable guidance.',
      'Customized rituals based on your specific needs.',
      'Ensures a harmonious and auspicious environment.',
    ]
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="vastu-pooja-container">
      <h1>{suryaPoojaData.title}</h1>
      <p>{suryaPoojaData.description}</p>
      <p className="price">Price: {suryaPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Surya  Pooja:</h2>
        <ul>
          {suryaPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Surya Pooja Happens:</h2>
        <ul>
          {suryaPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Surya Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Surya:</h2>
        <ul>
          {suryaPoojaData.aboutSurya.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {suryaPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default SuryaPooja;
