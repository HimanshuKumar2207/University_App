import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
