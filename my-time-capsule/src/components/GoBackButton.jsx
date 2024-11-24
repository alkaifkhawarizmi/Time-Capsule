import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Navigates to the previous page
      className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl focus:outline-none"
    >
      ← Go Back
    </button>
  );
};

export default GoBackButton;
