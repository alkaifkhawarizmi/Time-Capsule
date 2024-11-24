import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { deleteDATA } from "../dataSlice";

const Capsules = () => {

  const [capsules, setCapsules] = useState([]);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const data = useSelector((state) => state.dataSlice)
  // console.log(data)

  function handleDelete(i){
    console.log(i)
    dispatch(deleteDATA(i))
  }

  function handleNext(capsule){
    navigate(`/capsule/${capsule.title}`, { state : capsule})
  }

  useEffect(() => {
    setCapsules(data.DATA);
  },[data])

  console.log(capsules)

  return (
    <div className="">
      <button
      onClick={() => navigate('/')}
      className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      style={{
        perspective: '500px', // Enable the 3D effect
      }}
    >
      {/* Home Icon */}
      <span
        className="w-8 h-8 bg-white text-blue-500 rounded-full flex justify-center items-center shadow-md hover:rotate-180 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        🏠
      </span>
      {/* Text */}
      <span className="font-semibold text-lg tracking-wider">Home</span>
    </button>
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-8 animate-gradientBackground">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Saved Capsules</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {capsules.length > 0 ? (
          capsules.map((capsule) => (
            <div
              key={capsule.id}
              className={`${capsule.differenceInDays > 0 ? "bg-gray-700" : "scale-105 shadow-2xl rotate-2 bg-gradient-to-r from-blue-800 to-teal-500 text-white animate-cardHover" } p-6 rounded-xl shadow-2xl transform transition duration-500 `}
            > 
            <MdDeleteOutline
            onClick={() => handleDelete(capsule.title)}
             className="text-4xl text-red-400 absolute right-4 cursor-pointer" />
              <h3 className="text-xl font-semibold text-white mb-4">{capsule.title}</h3>
              <p className="text-md text-gray-400"><strong>Date Created:</strong> {capsule.date}</p>
              <p className="text-md text-gray-400"><strong>Unlock On:</strong> {capsule.formattedDate}</p>
              <p className="text-sm text-gray-400 mt-2"><strong>Type:</strong> {capsule.uploadType}</p>
              <div className="text-white text-7xl text-center w-full font-bold">
                { capsule.differenceInDays > 0 ? <CiLock className="font-bold mx-auto" /> : <CiUnlock className="font-bold mx-auto" />}
              
              </div>
              <button
              onClick={() => capsule.differenceInDays > 0 ? "" : handleNext(capsule)}
               className={`mt-4 ${capsule.differenceInDays > 0 ? "bg-gradient-to-r from-green-500 to-green-800" : "bg-gradient-to-r from-red-500 to-red-800"}   w-full text-white py-2 px-4 rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl hover:animate-buttonHover`}>
                {capsule.differenceInDays > 0 ? `${capsule.differenceInDays} Days are Left !` : "Check Now " }
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No saved capsules yet!</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Capsules;
