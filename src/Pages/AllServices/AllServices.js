import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div className="w-10/12 mt-16 mb-10 mx-auto">
      <h1 className="text-center text-4xl mb-5 font-semibold">All services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {services.map(service => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
