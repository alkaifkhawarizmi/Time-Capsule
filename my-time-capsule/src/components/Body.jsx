import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Body() {
  
  const navigate = useNavigate()

  function handleUpload(){
    navigate("/upload")
  }

  return (
    <div className="relative h-screen overflow-hidden">
    {/* Animated Background */}
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute w-[150%] h-[150%] bg-gradient-to-br from-indigo-800 via-black to-gray-900 animate-pulse blur-3xl opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-stars"></div>
    </div>

    {/* 3D Futuristic Content */}
    <div className="flex flex-col items-center justify-center h-full px-4">
      {/* Futuristic Title */}
      <h1 className="text-7xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 animate-text drop-shadow-[0_10px_20px_rgba(0,255,255,0.7)]">
        Time Capsule
      </h1>

      {/* Neon Floating Card */}
      <div className="relative w-96 h-64 bg-black rounded-3xl border border-teal-500/50 shadow-[0_10px_30px_rgba(0,255,255,0.5)] p-8 flex items-center justify-center text-center transition-all duration-500 hover:scale-110 hover:shadow-teal-500/80 hover:border-teal-400">
        <p className="text-lg font-medium text-gray-200 drop-shadow-[0_3px_10px_rgba(0,255,255,0.7)]">
          Create memories with a futuristic touch. Save your moments for eternity!
        </p>
        <IoIosAddCircleOutline onClick={handleUpload} className="text-white text-4xl absolute bottom-10 drop-shadow-[0_3px_10px_rgba(0,255,255,0.7)] cursor-pointer" />
        {/* Glowing Circle Behind */}
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-700 opacity-20 blur-2xl -z-10"></div>
      </div>
    </div>
  </div>
  );
}

export default Body;
