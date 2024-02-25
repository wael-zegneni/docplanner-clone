import React from "react";
import Warsaw from "../../assets/images/warsaw.png";
import Barcelona from "../../assets/images/barcelona.png";
import Bogota from "../../assets/images/bogota.png";
import Bologna from "../../assets/images/bologna.png";
import Curitiba from "../../assets/images/curitiba.png";
import Istanbul from "../../assets/images/istanbul.png";
import MexicoCity from "../../assets/images/mexico-city.png";
import Munich from "../../assets/images/munich.png";
import Rio from "../../assets/images/rio-janeiro.png";
import Rome from "../../assets/images/rome.png";
import City from "../City/City"

const Cities = () => {
  const cities = [
    {
      name: 'Warsaw',
      imgSrc: Warsaw,
      link: '/career?&loc=poland#jobs-offers',
    },
    {
      name: 'Barcelona',
      imgSrc: Barcelona,
      link: '/career?&loc=spain#jobs-offers',
    },
    {
      name: 'Bogota',
      imgSrc: Bogota,
      link: '/career?&loc=colombia#jobs-offers',
    },
    {
      name: 'Bologna',
      imgSrc: Bologna,
      link: '/career?&loc=italy#jobs-offers',
    },
    {
      name: 'Curitiba',
      imgSrc: Curitiba,
      link: '/career?&loc=brazil#jobs-offers',
    },
    {
      name: 'Istanbul',
      imgSrc: Istanbul,
      link: '/career?&loc=turkey#jobs-offers',
    },
    {
      name: 'Mexico City',
      imgSrc: MexicoCity,
      link: '/career?&loc=mexico#jobs-offers',
    },
    {
      name: 'Munich',
      imgSrc: Munich,
      link: '/career?&loc=germany#jobs-offers',
    },
    {
      name: 'Rio de Janeiro',
      imgSrc: Rio,
      link: '/career?&loc=brazil#jobs-offers',
    },
    {
      name: 'Rome',
      imgSrc: Rome,
      link: '/career?&loc=italy#jobs-offers',
    },
  ];

  return (
    <section className="cities__section">
      <h1>Improve the lives of millions. Change yours forever.</h1>
      <p>
        More than 2800 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna,
        Mexico City, and Curitiba, our search for great talent never stops.
      </p>

      <div className="cities__list">
        {cities.map((city, index) => (
          <City key={index} name={city.name} imgSrc={city.imgSrc} link={city.link} />
        ))}
      </div>

      <section className="call_to_action">
          <h1>Sounds interesting? Join us now!</h1>
          <span className="btn btn--small">SEE ALL CURRENT OPENINGS</span>
      </section>
    </section>

  );
};

export default Cities;
