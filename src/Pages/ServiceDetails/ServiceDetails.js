import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider";
import AddReview from "./AddReview";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, image, description, price, rating, lists } = service;

  const { user } = useContext(AuthContext);

  const submitReviewHandler = event => {
    event.preventDefault();

    const reviewObj = {
      text: event.target.review.value,
      user_email: user.email,
      user_name: user.displayName,
      service_id: _id,
    };

    // post review
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("review added successfully");
        }
      });
  };

  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto">
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
      <div className="mt-8">
        <h2 className="text-3xl text-center md:text-4xl font-semibold">
          Service Review
        </h2>

        {user?.uid && user?.email ? (
          <AddReview
            user={user}
            submitReviewHandler={submitReviewHandler}
          ></AddReview>
        ) : (
          <div className="text-center my-5">
            <h1 className="mb-3 text-xl">Please login to add a review</h1>
            <Link to="/login" className="btn btn-primary btn-outline font-bold">
              Login to add a review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
