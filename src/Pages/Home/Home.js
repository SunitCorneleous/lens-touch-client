import React from "react";
import HeroBanner from "./HeroBanner";
import ServicesList from "./ServicesList";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <HeroBanner></HeroBanner>
      <ServicesList></ServicesList>
    </div>
  );
};

export default Home;
