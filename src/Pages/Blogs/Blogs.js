import React from "react";
import useTitle from "./../../hooks/useTitle";

const Blogs = () => {
  // change title of route
  useTitle("Blogs");

  return (
    <div className="w-10/12 mx-auto" style={{ minHeight: "60vh" }}>
      <h1 className="text-center text-4xl my-5 font-semibold text-red-600">
        This is blogs page
      </h1>
      <div className="my-10">
        {/* question 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              SQL is relational database management system and NoSQL is
              distributed database management system. SQL is vertically and
              NoSQL is horizontally scalable. SQL can be used for complex
              queries, but NoSQL is not good for complex queries.
            </p>
          </div>
        </div>
        {/* question 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
        >
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              JWT is json web token which is an open standard (RFC 7519) for
              securely transmitting information between parties as JSON object.
              <br />
              Server provide special token to the client using jwt then the
              client use the token to access data from the server. The server
              verify the token using jwt which is created by jwt in server. If
              the token does not match sent from the client, the server do not
              give authorization to the user to access data.
            </p>
          </div>
        </div>
        {/* question 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between JavaScript and NodeJS?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              JavaScript is a programming language which runs in the browser and
              NodeJS is a run time environment to run JavaScript in server side.
            </p>
          </div>
        </div>
        {/* question 4 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              NodeJS can receives multiple client requests and place them into
              Event-Queue. NodeJS is built with event-driven architecture.
              NodeJS also has its own Event-Loop which is an infinite loop which
              receives requests and processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
