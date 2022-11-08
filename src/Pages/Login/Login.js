import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="w-11/12 md:w-10/12 mt-16 mb-10 mx-auto">
      <div className="p-5 border border-red-300 rounded  w-11/12 md:w-2/6  mx-auto">
        <h1 className="text-center text-3xl font-bold">log in page</h1>

        <form onSubmit={submitHandler} className="mt-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter your email:</span>
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Enter your password:</span>
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full"
            />
            <p className="text-sm mt-3">
              <span>Don't have an account?</span>{" "}
              <Link className="hover:text-red-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary mt-3 block mx-auto">
            Login
          </button>
        </form>

        <div
          style={{ height: "1px", background: "#c9c5c5" }}
          className="mt-5"
        ></div>

        <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white ease-in duration-300 font-semibold py-2 px-3 rounded block mx-auto mt-5">
          <FaGoogle className="inline-block mr-2 mb-1"></FaGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
