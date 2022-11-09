import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-10/12 mx-auto my-5 shadow px-4 py-5 rounded-xl bg-base-200">
      <div className="flex flex-col items-center">
        <img
          className="w-14 md:w-24 border-black border rounded-full"
          alt="user"
          src={review.user_image}
        />
        <h3 className="text-lg font-normal mt-1">{review.user_name}</h3>
      </div>
      <div className="flex items-center justify-center ml-0 md:ml-5 w-full mt-3 md:mt-0 md:w-9/12">
        <p className="text-lg text-center md:text-2xl font-medium">
          {review.text}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
