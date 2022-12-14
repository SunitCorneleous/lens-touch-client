import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { homeSpinner } from "../Shared/Spinner";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // // change title of route
  useTitle("My Reviews");

  useEffect(() => {
    fetch(`https://lens-touch-server.vercel.app/myreviews/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("lens-touch-token")}`,
      },
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logOutUser();
        }
        return res.json();
      })
      .then(data => {
        setReviews(data);
        setLoading(false);
      });
  }, [user.email, logOutUser]);

  // delete review
  const deleteHandler = review_id => {
    const confirmation = window.confirm("Are you sure you want to delete?");

    if (confirmation) {
      fetch(`https://lens-touch-server.vercel.app/reviews/${review_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("lens-touch-token")}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter(
              review => review._id !== review_id
            );
            setReviews(remaining);

            // confirmation toast
            // success toast
            const notify = () => toast.success(`Review deleted successfully`);
            notify();
          }
        })
        .catch(error => {
          const notify = () =>
            toast.error(`Failed to delete, error: ${error?.message}`);
          notify();
        });
    }
  };

  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto" style={{ minHeight: "60vh" }}>
      <h1 className="text-2xl md:text-4xl text-center">Reviews added by me</h1>
      {loading ? (
        homeSpinner
      ) : reviews.length > 0 ? (
        reviews?.map(review => (
          <MyReviewsCard
            key={review._id}
            review={review}
            deleteHandler={deleteHandler}
          ></MyReviewsCard>
        ))
      ) : (
        <p className="text-3xl text-center mt-24 text-warning font-medium">
          No review were added
        </p>
      )}
    </div>
  );
};

export default MyReviews;
