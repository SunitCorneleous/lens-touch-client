import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { title, image, description, price, rating, lists } = service;

  return (
    <div className="w-10/12 mt-16 mb-10 mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold">Service Details</h2>
      <div className="mt-8 flex justify-between flex-col md:flex-row w-full">
        <img src={image} className="w-full md:w-3/5 rounded-lg" alt="service" />
        <div className="ml-0 mt-5 md:mt-0 md:ml-10">
          <h3 className="text-4xl mb-4 font-bold">{title}</h3>
          <p className="text-xl">{description}</p>
          <p className="mt-10 text-xl font-semibold">Price: {price}$</p>
          <p className="mt-4 text-xl font-semibold">Rating: {rating}</p>
          <ul className="mt-10">
            {lists.map(list => (
              <li
                className="text-xl my-3 font-semibold"
                key={lists.indexOf(list)}
              >
                <BsFillPatchCheckFill className="inline mr-3"></BsFillPatchCheckFill>
                {list}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-8">Get this service</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
