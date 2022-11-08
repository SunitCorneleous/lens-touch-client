import React from "react";
import cardImage from "../../assets/services/card-img.jpg";

const ServiceCard = () => {
  return (
    <div className="border border-red-600 rounded w-[380px]">
      <img src={cardImage} alt="card" />
      <div className="py-5 px-3">
        <h2 className="text-2xl font-bold text-center">Service Name</h2>
        <div className="flex justify-between mt-2">
          <p>Price: 1000$</p>
          <p>rating: 5 star</p>
        </div>
        <p className="my-3 text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          delectus quasi repellat fugit accusamus? Saepe, itaque debitis
          voluptatibus, atque nam ullam ea dolor laudantium beatae quis natus
        </p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default ServiceCard;
