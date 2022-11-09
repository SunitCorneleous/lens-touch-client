import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const MyReviewsCard = ({ review }) => {
  return (
    <div className="p-5 my-5 rounded-lg shadow bg-base-200 flex justify-between items-center w-full mx-auto md:w-2/3">
      <div className="md:w-3/5">
        <h3 className="md:text-xl">Review:</h3>
        <p className="text-xl md:text-3xl font-medium">{review.text}</p>
        <h3 className="text-xl md:text-2xl mt-4">
          Service Name:{" "}
          <span className="text-lg md:text-2xl">{review?.service_name}</span>
        </h3>
      </div>
      <div className="md:w-1/3 flex flex-col md:flex-row justify-around">
        {/* edit review */}
        <button className="bg-green-500 p-4 rounded-full border-4 border-green-900 md:mx-2">
          <FaRegEdit className="text-xl md:text-4xl ml-1 text-white hover:text-green-700"></FaRegEdit>
        </button>
        {/* delete review */}
        <button className="bg-red-500 p-4 rounded-full border-4 border-red-900 md:mx-2 mt-2 md:mt-0">
          <AiFillDelete className="text-xl md:text-4xl ml-1 text-white hover:text-red-700"></AiFillDelete>
        </button>
      </div>
    </div>
  );
};

export default MyReviewsCard;
