import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { loadingSpinner } from "../Shared/Spinner";
import useTitle from "./../../hooks/useTitle";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // change title of route
  useTitle("Login");

  const googleLoginHandler = () => {
    setLoading(true);
    signInWithGoogle()
      .then(result => {
        const currentUser = {
          email: result.user.email,
        };

        setLoading(false);

        // get token
        fetch("https://lens-touch-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then(res => res.json())
          .then(data => {
            // store access token
            localStorage.setItem("lens-touch-token", data.token);
            navigate(from, { replace: true });
          });

        // success toast
        const notify = () =>
          toast.success(`${result.user.displayName} logged in`);

        notify();

        navigate("/");
      })
      .catch(error => {
        const notify = () => toast.error(`login failed, error: ${error}`);
        setLoading(false);
        notify();
      });
  };

  const submitHandler = event => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        const currentUser = {
          email: result.user.email,
        };

        setLoading(false);

        // get token
        fetch("https://lens-touch-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then(res => res.json())
          .then(data => {
            // store access token
            localStorage.setItem("lens-touch-token", data.token);
            navigate(from, { replace: true });
          });

        // success toast
        const notify = () =>
          toast.success(`${result.user.displayName} logged in`);
        notify();

        // navigate to right route
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        const notify = () => toast.error(`login failed, error: ${error}`);
        notify();
      });
  };

  return (
    <div className="w-11/12 md:w-10/12 mt-16 mb-10 mx-auto">
      {user?.email ? (
        navigate("/")
      ) : (
        <div className="p-5 border border-red-300 rounded  w-11/12 md:w-2/6  mx-auto">
          <h1 className="text-center text-3xl font-bold">Log In Now</h1>

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
                <Link
                  to="/signup"
                  className="hover:text-red-600 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 block mx-auto"
            >
              {loading ? loadingSpinner : "login"}
            </button>
          </form>

          <div
            style={{ height: "1px", background: "#c9c5c5" }}
            className="mt-5"
          ></div>

          <button
            onClick={googleLoginHandler}
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white ease-in duration-300 font-semibold py-2 px-3 rounded block mx-auto mt-5"
          >
            <FaGoogle className="inline-block mr-2 mb-1"></FaGoogle>
            Continue with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
