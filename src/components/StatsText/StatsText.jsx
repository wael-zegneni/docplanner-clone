import React from 'react';
import logo from '../../assets/logos/logo.png'

const StatsText = () => {
  return (
    <div className="stats-text">
        <h1>The world's biggest healthcare platform</h1>
        <p>We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.</p>
        <img src={logo} alt="Logo" />
    </div>
  )
}

export default StatsText;
