import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, image, description, price, rating } = service;
  return (
    <div className="border border-red-600 rounded w-[95%] my-2 md:my-0 md:w-[380px] mx-auto md:mx-3">
      <img src={image} className="object-cover h-80 rounded" alt="card" />
      <div className="py-5 px-3">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <div className="flex justify-between mt-2">
          <p>Price: {price}$</p>
          <p>rating: {rating} star</p>
        </div>
        <p className="my-3 text-base">
          {description.slice(0, 100)}
          ...
        </p>
        <Link to={`/services/${_id}`} className="btn btn-primary mt-7">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
