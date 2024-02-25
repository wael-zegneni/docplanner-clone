import React from "react";
import "../../styles/main.scss";
import Mission from "../../components/Mission/Mission";
import Services from "../../components/Services/Services";
import Brands from "../../components/Brands/Brands";
import StatsContainer from "../../components/StatsContainer/StatsContainer"
import Cities from "../../components/Cities/Cities";

const AboutPage = () => {
  return (
    <>
      <section className="margin__section">
        <Mission />
        <Services />
        <Brands />
      </section>
      <StatsContainer/>
      <section className="margin__section">
        <Cities/>
      </section>
    </>
  );
};

export default AboutPage;
