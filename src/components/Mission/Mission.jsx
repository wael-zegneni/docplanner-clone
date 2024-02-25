import React from 'react';
import logoImage from '../../assets/logos/sygnet.png'; // Ensure you have this logo in your project's assets

const Mission = () => (
  <section className="mission section__inner">
    <img 
      className="mission__logo" 
      src={logoImage} 
      alt="Docplanner Logo" 
    />
    <h1>Making the healthcare experience more human</h1>
    <div className="mission__content">
      <div className="mission__column">
        <p>
          We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
        </p>
      </div>
      <div className="mission__column">
        <p>
          We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
        </p>
      </div>
    </div>
  </section>
);

export default Mission;