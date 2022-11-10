import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";
import { homeSpinner } from "./../Shared/Spinner";

const ServicesList = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://lens-touch-server.vercel.app/services?limit=3")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-16 mb-10">
      <h1 className="text-center text-4xl font-semibold text-red-600">
        My Services
      </h1>
      <p className="text-center text-2xl font-medium mt-4">
        I ensure my clients get the top most satisfation
      </p>
      {loading ? (
        homeSpinner
      ) : (
        <>
          {/* services */}
          <div className="w-full flex md:flex-row flex-col justify-around my-6">
            {services?.map(service => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          {/* see all button */}
          <div className="flex justify-center">
            <Link to="/services" className="btn btn-primary">
              See all
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesList;
