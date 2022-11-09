import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  // change title of route
  useTitle("Add Service");

  const addServiceHandler = event => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const description = form.description.value;
    const rating = parseFloat(form.rating.value);
    const price = form.price.value;
    const feature1 = form.feature1.value;
    const feature2 = form.feature2.value;
    const feature3 = form.feature3.value;
    const feature4 = form.feature4.value;
    const lists = [];

    const options = [feature1, feature2, feature3, feature4];

    for (const option of options) {
      if (option) {
        lists.push(option);
      }
    }

    const newService = {
      title,
      image,
      description,
      price,
      rating,
      lists: lists,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          // success toast
          const notify = () => toast.success(`Service added successfully`);
          notify();

          form.reset();
        }
      });
  };

  return (
    <div className="w-10/12 mt-14 mb-10 mx-auto">
      <h1 className="text-center text-xl md:text-4xl">Add a Service</h1>
      <form onSubmit={addServiceHandler}>
        {/* title */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Service Name:</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type Service Name here"
            className="input input-bordered w-full"
          />
        </div>
        {/* image link */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image Link:</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter link here"
            className="input input-bordered w-full"
          />
        </div>
        {/* description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Service Name:</span>
          </label>
          <textarea
            className="textarea textarea-bordered max-h-[150px] min-h-[150px]"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>
        {/* price and rating */}
        <div className="flex ">
          <div className="form-control w-full mr-3">
            <label className="label">
              <span className="label-text">Rating:</span>
            </label>
            <input
              type="float"
              name="rating"
              placeholder="Enter Rating here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter price here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* lists */}
        <div className="">
          <div className="form-control w-full mr-3">
            <label className="label">
              <span className="label-text">Feature 1:</span>
            </label>
            <input
              type="text"
              name="feature1"
              placeholder="Enter Feature here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mr-3">
            <label className="label">
              <span className="label-text">Feature 2:</span>
            </label>
            <input
              type="text"
              name="feature2"
              placeholder="Enter Feature here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mr-3">
            <label className="label">
              <span className="label-text">Feature 3:</span>
            </label>
            <input
              type="text"
              name="feature3"
              placeholder="Enter Feature here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Feature 4:</span>
            </label>
            <input
              type="text"
              name="feature4"
              placeholder="Enter Feature here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-5 block mx-auto">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
