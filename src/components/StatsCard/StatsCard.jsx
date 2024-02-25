import React from 'react'

const StatsCard = ({ icon, title, number, description, className }) => {
    return (
      <div className={`stats-card ${className}`}>
        <div className="icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
        <h3 className="title">{title}</h3>
        <div className="number">{number}</div>
        <p className="description">{description}</p>
      </div>
    );
};


export default StatsCard;
