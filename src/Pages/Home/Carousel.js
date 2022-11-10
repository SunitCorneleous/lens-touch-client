import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const Carousel = () => {
  const images = [
    "https://i.ibb.co/f0vJYwJ/card-img.jpg",
    "https://i.ibb.co/f0vJYwJ/card-img.jpg",
    "https://i.ibb.co/L1kJK6g/concert.jpg",
    "https://i.ibb.co/3FqRQFd/community.jpg",
  ];

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "15px",
    color: "rgba(255, 255, 255, 0.581)",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <BsArrowLeftCircleFill fontSize={"35px"}></BsArrowLeftCircleFill>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <BsArrowRightCircleFill fontSize={"35px"}></BsArrowRightCircleFill>
      </button>
    ),
  };

  return (
    <div className="w-full md:w-11/12 mx-auto my-20 rounded">
      <h2 className="mt-5 mb-10 text-center text-2xl text-red-600 md:text-4xl font-semibold">
        Shots from my Lens
      </h2>
      <Fade {...properties}>
        {images.map(image => (
          <div key={images.indexOf(image)} className="each-slide">
            <div>
              <img src={image} alt="carousel" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Carousel;
