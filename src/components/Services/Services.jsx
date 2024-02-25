import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import patientsIcon from '../../assets/icons/icon-patients.svg';
import doctorsIcon from '../../assets/icons/icon-doctors.svg';
import clinicsIcon from '../../assets/icons/icon-clinics.svg';

const servicesData = [
    {
      icon: patientsIcon, 
      title: 'For patients',
      description: 'Find a doctor, book a visit and solve any health-related doubt',
      backgroundColor: "green",
      options: [
        { label: 'Choose country', value: '#' },
        { label: 'Netherlands', value: 'nl' },
        { label: 'Tunisia', value: 'tn' },
      ],

    },
    {
      icon: doctorsIcon,
      title: 'For doctors',
      description: 'Save time managing visits and cut no-shows by half',
      backgroundColor: "blue",
      options: [
        { label: 'Choose country', value: '#' },
        { label: 'Netherlands', value: 'nl' },
        { label: 'Tunisia', value: 'tn' },
      ],
    },
    {
      icon: clinicsIcon, 
      title: 'For clinics',
      description: 'Deliver an exceptional patient experience in your clinic',
      backgroundColor: "black",
      options: [
        { label: 'Choose country', value: '#' },
        { label: 'Netherlands', value: 'nl' },
        { label: 'Tunisia', value: 'tn' },
      ],
    },
  ];
  

const Services = () => (
  <div className="services">
    {servicesData.map((service, index) => (
      <ServiceItem key={index} {...service} />
    ))}
  </div>
);

export default Services;
