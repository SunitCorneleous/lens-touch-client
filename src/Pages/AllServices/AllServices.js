import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

import ServiceCard from "../Shared/ServiceCard";
import Spinner from "../Shared/Spinner";

const AllServices = () => {
  const [services, setServices] = useState(true);
  const [loading, setLoading] = useState(true);

  // change title of route
  useTitle("All Services");

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto">
      <h1 className="text-center text-4xl mb-5 font-semibold">All services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          services.map(service => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllServices;
