import React from "react";
import useTitle from "./../../hooks/useTitle";

const Blogs = () => {
  // change title of route
  useTitle("Blogs");

  return (
    <div className="w-10/12 mx-auto" style={{ minHeight: "60vh" }}>
      <h1>This is blogs page</h1>
    </div>
  );
};

export default Blogs;
