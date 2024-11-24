import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-4 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-4xl font-extrabold transform hover:scale-110 hover:rotate-3 transition-all duration-500">
            <span className="text-cyan-400">Time</span> Capsule
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link
            to={"/"}
              href=""
              className="relative group text-lg font-semibold tracking-wide text-gray-300 hover:text-cyan-400"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
            
            </Link>
            <a
              href=""
              className="relative group text-lg font-semibold tracking-wide text-gray-300 hover:text-pink-400"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-400 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a
              href=""
              className="relative group text-lg font-semibold tracking-wide text-gray-300 hover:text-purple-400"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-purple-400 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a
              href=""
              className="relative group text-lg font-semibold tracking-wide text-gray-300 hover:text-blue-400"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 group-hover:w-full transition-all duration-500"></span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex space-x-6">
            <Link
            to={"/capsules"}
              href=""
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full shadow-lg transform hover:scale-110 hover:shadow-cyan-400/50 transition duration-300"
            >
              Your Capsules
            </Link>
            <a
              href=""
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-black rounded-full shadow-lg transform hover:scale-110 hover:shadow-pink-400/50 transition duration-300"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-cyan-400 transform hover:scale-125 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
