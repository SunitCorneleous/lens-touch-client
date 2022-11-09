import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews/${user.email}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [user.email]);
  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto">
      <h1 className="text-2xl md:text-4xl text-center">Reviews added by me</h1>
      {reviews?.map(review => (
        <MyReviewsCard key={review._id} review={review}></MyReviewsCard>
      ))}
    </div>
  );
};

export default MyReviews;
