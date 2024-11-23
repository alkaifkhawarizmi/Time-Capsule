import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setAccounts, setContacts, setNote, setTasks } from "../dataSlice";
function UploadPage() {

  const [uploadType, setUploadType] = useState("note");

  const [data , setData] = useState("");

  const [socialName , setSocialName] = useState("");

  const [id, setId] = useState("");

  const [pass, setPass] = useState("");

  const [task, setTask] = useState("");

  const [date , setDate] = useState("");

  const [contactName , setContactName] = useState(""); 

  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  function validateInput(){
    if(uploadType === "note" && !data.trim()){
      return "please enter a note"
    }
    if(uploadType === "password" && ((!socialName.trim() || !id.trim() || !pass.trim()))){
      return "please fill all fields"
    }
    if (uploadType === "reminder" && (!task.trim() || !date))
      return console.log("Task and deadline cannot be empty!");
     if(uploadType === "contacts" && (!contact.trim() ||!contactName.trim())){
      return "please fill all fields"
    }
     return null
  }

  function handleSubmit(){

    const error = validateInput()

    if(error){
      alert(error)
      return
    }

    if(uploadType === "note"){
      dispatch(setNote(data))
      setData("")
    }
    else if(uploadType === "password"){
      dispatch(setAccounts({socialName , id , pass}))
      setSocialName("")
      setId("")
      setPass("")
    }
    else if(uploadType === "reminder"){
      dispatch(setTasks({task, date}))
      setTask("")
      setDate("")
    }
    else if(uploadType === "contacts"){
      dispatch(setContacts({contact, contactName}))
      setContact("")
      setContactName("")
    }
    
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900">
      <div className="w-full max-w-lg bg-black/70 rounded-3xl p-8 shadow-xl border border-teal-500">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Upload Your Files
        </h1>

        {/* Dropdown to choose the type of file to upload */}
        <div className="mb-6">
          <label className="text-white text-lg">
            What do you want to upload?
          </label>
          <select
            onChange={(e) => setUploadType(e.target.value)}
            value={uploadType}
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="note">Note</option>
            <option value="password">Accounts & Password</option>
            <option value="reminder">Reminder & Tasks</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>

        {uploadType === "note" && (
          <>
            <label className="text-white text-lg">Upload your notes:</label>
            <textarea
              onChange={(e) => setData((e.target.value).trim())}
              placeholder="Type your notes here..."
              className="w-full h-60 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        {uploadType === "password" && (
          <>
            <label className="text-white text-xl">Upload your passwords:</label>
            <textarea
               onChange={(e)=>{setSocialName((e.target.value).trim())}}
              placeholder="Social Account Name (instagram , facebook , twitter ...)"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              onChange={(e)=>{setId((e.target.value).trim())}}
              placeholder="Enter Your Id"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              onChange={(e)=>{setPass((e.target.value).trim())}}
              placeholder="Enter Your Password"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        {uploadType === "reminder" && (
          <>
            <label className="text-white text-xl">Upload your Tasks:</label>
            <textarea
              onChange={(e) => setTask((e.target.value).trim())}
              placeholder="Appointment schedules."
              className="w-full h-40 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <h1 className="text-white text-xl">Deadline alerts.</h1>
            <input
              onChange={(e) => setDate((e.target.value))}
             placeholder="Deadline alerts." type="date" className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </>
        )}

        {uploadType === "contacts" && (
          <>
            <label className="text-white text-lg">Upload your Contacts:</label>
            <textarea
              onChange={(e)=> setContactName((e.target.value).trim())}
              placeholder="Type your contact name here..."
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea 
              onChange={(e)=> setContact((e.target.value).trim())}
              placeholder="contact details (number or email)"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}    

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-lg text-lg shadow-xl hover:bg-teal-600 focus:outline-none"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
