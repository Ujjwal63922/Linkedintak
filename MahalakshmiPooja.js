//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const MahalakshmiPooja = () => {
  // Sample data for Mahalakshmi Pooja
  const lakshmiPoojaData = {
    title: 'Mahalakshmi Pooja',
    description:
      'Mahalakshmi Pooja is dedicated to Goddess Mahalakshmi, the deity of wealth, prosperity, and abundance. It is performed to seek blessings and invoke positive energies.',
    price: '₹3500',
    benefits: [
      'Ideal for attracting wealth and financial stability.',
      'Removes obstacles related to money matters.',
      'Brings harmony and abundance to the household.',
      'Enhances overall prosperity and well-being.',
    ],
    howItHappens: [
      'Set up a sacred space with an image or idol of Goddess Mahalakshmi.',
      'Perform rituals to invoke positive energies.',
      'Light a lamp using ghee or oil.',
      'Offer flowers, incense, and uncooked rice.',
      'Chant Mahalakshmi mantras or stotras.',
      'Share the Prasad with family members.',
    ],
    aboutMahalakshmi: [
      'Goddess Mahalakshmi is revered as the bestower of wealth and fortune.',
      'Following Mahalakshmi Pooja brings blessings and abundance.',
    ],
    whyBookWithUs: [
      'Experienced priests and knowledgeable guidance.',
      'Customized rituals based on your specific needs.',
      'Ensures a prosperous and harmonious environment.',
    ],
  
  };

  // Handle button click and redirect to another page
  const handleBookNowClick = () => {
    // Redirect to the booking page (customize the URL as needed)
    window.location.href = '/booking'; // Replace with your actual booking page URL
  };

  return (
    <div className="lakshmi-pooja-container">
      <h1>{lakshmiPoojaData.title}</h1>
      <p>{lakshmiPoojaData.description}</p>
      <p className="price">Price: {lakshmiPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Mahalakshmi  Pooja:</h2>
        <ul>
          {lakshmiPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Mahalakshmi Pooja Happens:</h2>
        <ul>
          {lakshmiPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
       {/* About Mahalakshmi Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Mahalakshmi:</h2>
        <ul>
          {lakshmiPoojaData.aboutMahalakshmi.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {lakshmiPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default MahalakshmiPooja;
