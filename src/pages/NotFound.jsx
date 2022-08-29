import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold my-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <button className="btn bg-sky-500 px-5 rounded-full py-1">
            <Link to="/">
              <FaHome className="mr-2" />
              Back To Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
