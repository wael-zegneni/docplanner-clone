import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import iconFlag from '../../assets/icons/flag.png'; 
import iconDoctors from '../../assets/icons/doctors.png';
import iconPatients from '../../assets/icons/patients.png';
import iconVisits from '../../assets/icons/visits.png'; 

const statCardData = [
  {
    icon: iconFlag,
    title: "Leader in 13 countries",
    description: "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile"
  },
  {
    icon: iconVisits,
    title: "22,000,000 appointments",
    description: "booked last month"
  },
  {
    icon: iconPatients,
    title: "100,000,000 patients",
    description: "visit our websites each month"
  },
  {
    icon: iconDoctors,
    title: "280,000 active doctors",
    description: "trust our solutions"
  }
];

const StatsCards = () => {
    return (
      <div className="stats-cards">
        {statCardData.map((card, index) => (
          <StatsCard 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className={index % 2 === 0 ? "" : "card-raise"}
          />
        ))}
      </div>
    );
  };
  

export default StatsCards;
