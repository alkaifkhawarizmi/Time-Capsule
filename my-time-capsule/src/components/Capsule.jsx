import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteDATA } from '../dataSlice';

function Capsule() {

  const location = useLocation();
  const capsule = location.state

  const [capsules , setCapsules] = useState()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  function handleDelete(){
    dispatch(deleteDATA(capsule.title))
    navigate("/capsules")
  }
  
  return (
    <div>
    
    {capsule.data  && 
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="relative w-[35%] h-[50%] p-6 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">{capsule.title}</h2>
        <p className="text-sm leading-6 mb-6">{capsule.data.note}</p>
        <div className="absolute inset-x-0 px-4 bottom-4 flex justify-between text-xs">
          <span>Created: {capsule.formattedDate}</span>
          <span>By: You</span>
        </div>
      </div>
    </div> }

    {capsule.Accounts && 
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="relative w-[35%] h-[50%] p-6 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">{capsule.title}</h2>
      <p className="text-2xl leading-6 mb-6">Social Media : {capsule.Accounts.name}</p>
      <p className="text-2xl leading-6 mb-6">Account : {capsule.Accounts.id}</p>
      <p className="text-2xl leading-6 mb-6">Password : {capsule.Accounts.pass}</p>
      <div className="absolute inset-x-0 px-4 bottom-4 flex justify-between text-xs">
        <span>Created: {capsule.formattedDate}</span>
        <span>By: You</span>
      </div>
    </div>
  </div>
    }

    {
      capsule.task && 
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="relative w-[35%] h-[50%] p-6 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">{capsule.title}</h2>
      <p className="text-2xl leading-6 mb-6">Task : {capsule.task.task}</p>
      <p className="text-2xl leading-6 mb-6">Due Date : {capsule.task.date}</p>
      <div className="absolute inset-x-0 px-4 bottom-4 flex justify-between text-xs">
        <span>Created: {capsule.formattedDate}</span>
        <span>By: You</span>
      </div>
    </div>
  </div>
    }

    {
      capsule.contacts && 
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="relative w-[35%] h-[50%] p-6 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">{capsule.title}</h2>
      <p className="text-2xl leading-6 mb-6"> Name : {capsule.contacts.contact}</p>
      <p className="text-2xl leading-6 mb-6">Contact : {capsule.contacts.contactName}</p>
      <div className="absolute inset-x-0 px-4 bottom-4 flex justify-between text-xs">
        <span>Created: {capsule.formattedDate}</span>
        <span>By: You</span>
      </div>
    </div>
  </div>
    }

<MdDeleteOutline
onClick={handleDelete}
 className='absolute bottom-44 cursor-pointer right-96 text-5xl text-red-500' />

    </div>
    
  )
}

export default Capsule