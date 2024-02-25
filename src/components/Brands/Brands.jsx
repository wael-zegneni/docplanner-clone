import React from "react";
import logoClinicloud from "../../assets/logos/logo-clinicloud.svg";
import logoFeegow from "../../assets/logos/logo-feegow.svg";
import logoGipoPrimary from "../../assets/logos/logo-gipo-primary.svg";
import logoJameda from "../../assets/logos/logo-jameda.svg";
import logoTuotempo from "../../assets/logos/logo-tuotempo.svg";
import logoMyDrEdm from "../../assets/logos/my-dr-edm-logo.svg";
import "../../styles/main.scss";

const Brands = () => {
  return (
    <section className="brands">
      <h1>
        We are a global company
        with local culture
      </h1>
      <ul className="brands__logos">
        <li>
          <img src={logoClinicloud} alt="Clinicloud" />
        </li>
        <li>
          <img src={logoFeegow} alt="Feegow" />
        </li>
        <li>
          <img src={logoGipoPrimary} alt="Gipo Primary" />
        </li>
        <li>
          <img src={logoJameda} alt="Jameda" />
        </li>
        <li>
          <img src={logoTuotempo} alt="Tuotempo" />
        </li>
        <li>
          <img src={logoMyDrEdm} alt="My Dr Edm" />
        </li>
        <li>
          <img src={logoGipoPrimary} alt="Gipo Primary" />
        </li>
        <li>
          <img src={logoJameda} alt="Jameda" />
        </li>
        <li>
          <img src={logoMyDrEdm} alt="My Dr Edm" />
        </li>
      </ul>
    </section>
  );
};

export default Brands;
