import React, { useContext } from "react";
import { Link } from "react-router-dom";
import camera1 from "../../assets/home/camera-1.jpg";
import camera2 from "../../assets/home/camera-2.jpg";
import camera3 from "../../assets/home/camera-3.jpg";
import { AuthContext } from "./../../contexts/AuthProvider";

const MoreInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-10/12 my-12 mx-auto">
      <h2 className="mt-5 mb-10 text-center text-2xl text-red-600 md:text-4xl font-semibold">
        More Info
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="my-5 md:my-0">
          <img src={camera1} alt="camera" className="moreinfo-img" />
        </div>
        <div className="my-5 md:my-0">
          <img src={camera2} alt="camera" className="moreinfo-img" />
        </div>
        <div className="my-5 md:my-0">
          <img src={camera3} alt="camera" className="moreinfo-img" />
        </div>
      </div>
      <p className="mt-10 mb-5 text-center text-2xl text-red-600 md:text-3xl font-semibold">
        I provide full profssional setup
      </p>
      {!user?.email && (
        <div className="w-full text-center">
          <h3 className="text-xl mb-5">Sign up to find out more</h3>
          <Link to="/signup" className="btn btn-primary">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
