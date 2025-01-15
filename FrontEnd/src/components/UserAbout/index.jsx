import React from 'react';
import "./style.module.css" 

function UserAbout() {
  return (
    <div className="about-container">
      <div className="image-section">
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
          alt="Office environment"
          className="about-image"
        />
        <div className="overlay">
          <h2>Trusted Merchant</h2>
          <p>FOR 50 YEARS</p>
        </div>
      </div>
      <div className="text-section">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui fuga ipsa, 
          repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem 
          maxime, nisi excepturi ipsum libero ratione adipisci alias eius vero vel!
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
}

export default UserAbout;
