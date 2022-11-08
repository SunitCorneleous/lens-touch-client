import React from "react";

const AddReview = ({ user, submitReviewHandler }) => {
  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto flex flex-col md:flex-row justify-around">
      <div className="w-11 md:w-32" title={user.displayName}>
        <img
          src={user.photoURL}
          className="border border-black  rounded-full"
          alt="user"
        />
      </div>
      <form
        onSubmit={event => submitReviewHandler(event)}
        className="flex flex-col md:flex-row items-center"
      >
        <textarea
          className="textarea textarea-primary md:mt-0 mt-5 md:ml-5 w-full md:max-w-lg text-xl md:text-2xl"
          placeholder="Add your Review"
          name="review"
          rows="4"
          cols="100"
          style={{ maxHeight: "200px" }}
        ></textarea>
        <button className="btn btn-primary ml-0 md:ml-5 mt-5 md:mt-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
