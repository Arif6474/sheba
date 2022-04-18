import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog">
        <h2 className="blog-title">
          Difference between authorization and authentication?
        </h2>
        <p>
          Authentication is the process of verifying someone or something to be
          genuine or valid. In computing terms, this could be a person, process,
          or device.Authorization is the process of permitting someone to access
          something and specifying the type of access privileges and permissions
          they have.
        </p>
      </div>
      <div className="blog">
        <h2 className="blog-title">
          Why are we using firebase?What other options do we have to implement?
        </h2>
        <p>
          The use of Firebase in building mobile and web applications is common
          nowadays. Developers rely on this platform because of extensive tools,
          fast development, and real-time databases to make interactive apps.
          Crash reporting, Google Analytics, secure hosting and authentication
          are also benefits of using Firebase.
        </p>
      </div>
      <div className="blog">
        <h2 className="blog-title">
          What others services does firebase provide?
        </h2>
        <p>
          Cloud Firestore, Cloud Functions,Hosting, Cloud
          Storage, Google Analytics, Predictions, Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blog;
