import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  const review = useLoaderData();
  const { _id, user_email, user_name, service_id, user_image, service_name } =
    review;
  const navigate = useNavigate();

  // change title of route
  useTitle("Update Review");

  const updateReviewHandler = event => {
    event.preventDefault();
    const text = event.target.text.value;

    const newReview = {
      text,
      user_email,
      user_name,
      service_id,
      user_image,
      service_name,
    };

    fetch(`https://lens-touch-server.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then(res => res.json())
      .then(data => {
        //

        if (data.modifiedCount > 0) {
          navigate("/myreviews");

          // success toast
          const notify = () => toast.success(`review updated successfully`);
          notify();
        }
      });
  };

  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto" style={{ minHeight: "60vh" }}>
      <form onSubmit={updateReviewHandler} className="md:w-3/5 mx-auto w-full">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Enter your review to update:</span>
          </label>
          <input
            type="text"
            name="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            defaultValue={review.text}
          />
        </div>
        <button className="btn btn-primary mt-5 block ml-auto">update</button>
      </form>
    </div>
  );
};

export default UpdateReview;
