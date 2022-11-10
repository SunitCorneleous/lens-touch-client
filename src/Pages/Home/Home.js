import React from "react";
import useTitle from "../../hooks/useTitle";
import Carousel from "./Carousel";
import HeroBanner from "./HeroBanner";
import MoreInfo from "./MoreInfo";
import ServicesList from "./ServicesList";

const Home = () => {
  // change title of route
  useTitle("Home");

  return (
    <div className="w-10/12 mx-auto">
      <HeroBanner></HeroBanner>
      <ServicesList></ServicesList>
      <Carousel></Carousel>
      <MoreInfo></MoreInfo>
    </div>
  );
};

export default Home;
