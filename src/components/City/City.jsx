import React from "react";

const City = ({ name, imgSrc, imgSrcSet, link }) => (
  <div className="city">
    <figure className="city__image">
      <img src={imgSrc} srcSet={imgSrcSet} alt={`Office in ${name}`} />
    </figure>
    <div className="city__desc">
      <h2>{name}</h2>
      <span className="btn btn--small">SEE OPENINGS</span>
    </div>
  </div>
);

export default City;
