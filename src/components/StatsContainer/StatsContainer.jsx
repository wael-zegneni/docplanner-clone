import React from "react";
import StatsText from "../StatsText/StatsText";
import StatsCards from "../StatsCards/StatsCards";

const StatsContainer = () => {
  return (
    <div className="stats-container">
      <StatsText />
      <StatsCards />
    </div>
  );
};

export default StatsContainer;
