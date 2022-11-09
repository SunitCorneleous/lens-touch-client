import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  // change title of route
  useTitle("Error Page");

  return (
    <div className="text-center w-10/12 flex flex-col justify-center mx-auto min-h-screen">
      <h1 className="text-8xl text-red-600">404 Error</h1>
      <p className="text-4xl mt-4">Page Not Found</p>
      <Link to="/" className="link link-primary text-xl mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
