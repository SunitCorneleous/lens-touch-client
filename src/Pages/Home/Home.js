import React from "react";
import useTitle from "../../hooks/useTitle";
import HeroBanner from "./HeroBanner";
import ServicesList from "./ServicesList";

const Home = () => {
  // change title of route
  useTitle("Home");

  return (
    <div className="w-10/12 mx-auto">
      <HeroBanner></HeroBanner>
      <ServicesList></ServicesList>
    </div>
  );
};

export default Home;
