import React from "react";
import heroImage from "../../assets/home/hero_image.jpg";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="flex justify-center items-center">
        <div className="w-11/12 mx-auto">
          <h1 className="text-6xl font-semibold">
            Hi I'm <span className="text-red-600">Alex</span> the{" "}
            <span className="text-red-600">Lensman</span>
          </h1>
          <p className="text-lg mt-4">
            I make sure your special moments are captured to make your journey
            wonderful.
            <br />I provide various of services.
            <br /> I do wedding photoshoot, birthday photoshoot and many more
          </p>
          <p>Find out more</p>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          className="w-11/12 md:w-3/5 mx-auto border-4 border-red-600 shadow hero-image"
          src={heroImage}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
