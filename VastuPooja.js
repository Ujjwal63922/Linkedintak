//import React, { Component } from 'react';
import './App.css'; // Import your CSS file
//import Components from './Components';

const VastuPooja = () => {
  // Sample data for Vastu Pooja
  const vastuPoojaData = {
    title: 'Vastu Pooja',
    description:
      'Vastu Pooja is performed to harmonize and balance the energies of a new home or building. It ensures positive vibrations and prosperity.',
    price: '₹3500',
    benefits: [
      'Attracts positive energy and blessings for the dwelling.',
      'Removes negative influences and obstacles.',
      'Enhances overall well-being and prosperity.',
    ],
    howItHappens: [
      'Setting up a sacred space with Vastu Yantras and idols.',
      'Performing rituals to invoke positive energies.',
      'Blessing each room and corner of the house.',
    ],
    aboutVastu: [
      'Vastu Shastra is an ancient Indian science of architecture.',
      'It emphasizes the alignment of spaces with natural forces.',
      'Following Vastu principles brings harmony and balance.',
    ],
    whyBookWithUs: [
      'Experienced Vastu experts and priests.',
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
    <div className="vastu-pooja-container">
      <h1>{vastuPoojaData.title}</h1>
      <p>{vastuPoojaData.description}</p>
      <p className="price">Price: {vastuPoojaData.price}</p>
      <button className="book-now-button" onClick={handleBookNowClick}>
        Book Now
      </button>
      <hr></hr>
      {/* Benefits */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Benefits of Vastu  Pooja:</h2>
        <ul>
          {vastuPoojaData.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
<hr></hr>
      {/* How It Happens */}
      <hr className='x'></hr>
      <div className="section">
        <h2>How Vastu Pooja Happens:</h2>
        <ul>
          {vastuPoojaData.howItHappens.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
       {/* About Vastu Pooja */}
       <hr className='x'></hr>
       <div className="section">
        <h2>About Vastu:</h2>
        <ul>
          {vastuPoojaData.aboutVastu.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
<hr></hr>
      {/* Why Book With Us */}
      <hr className='x'></hr>
      <div className="section">
        <h2>Why Book With Us:</h2>
        <ul>
          {vastuPoojaData.whyBookWithUs.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
    </div>
     
    </div>
   
  );
};

export default VastuPooja;
