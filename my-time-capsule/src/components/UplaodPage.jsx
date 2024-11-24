import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDATA } from "../dataSlice";
import GoBackButton from "./GoBackButton";
import dataSlice from "../dataSlice";
import { useNavigate } from "react-router-dom";
function UploadPage() {

  const [diplay , setDisplay] = useState(true)

  const [uploadType, setUploadType] = useState("note");

  const [data, setData] = useState({
    note:""
  });

  const [Accounts, setAccounts] = useState({
    name: "",
    id: "",
    pass: "",
  });

  const [task , setTask] = useState({
    task: "",
    dates: ""
  })

  const [contacts , setContacts] = useState({
    contact: "",
    contactName: "",
  })

  const [title , setTitle] = useState("")
  const [date , setDate] = useState("")

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const dd = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${yyyy}-${mm}-${dd}`;

  const date1 = new Date(date)

  const date2 = new Date(formattedDate)

  const differenceInMs = date1 - date2;
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);


  function handleChange(key, value) {
    if(uploadType === "password"){
      setAccounts((prev) => ({
        ...prev,
        [key]: value,
      }));
    } else if(uploadType === "reminder"){
      setTask((prev) => ({
        ...prev,
        [key]: value,
      }));
    } else if(uploadType === "contacts"){
      setContacts((prev) => ({
        ...prev,
        [key]: value,
      }));
    } else if(uploadType === "note"){
      setData((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
    
  }

  const dispatch = useDispatch();

  function validateInput() {
    if (uploadType === "note" && !data.note.trim()) {
      return "please enter a note";
    }
    if (
      uploadType === "password" &&
      (!Accounts.name.trim() || !Accounts.id.trim() || !Accounts.pass.trim())
    ) {
      return "please fill all fields";
    }
    if (uploadType === "reminder" && (!task.task.trim() || !task.date))
      return "Task and deadline cannot be empty!";
    if (uploadType === "contacts" && (!contacts.contact.trim() || !contacts.contactName.trim())) {
      return "please fill all fields";
    }
    return null;
  }

  function handleFinish(){
    const error = validateInput()
    if (error){
      alert(error);
      return;
    } else {
      setDisplay(false)
    }
  }

  const navigate = useNavigate()

  function handleSubmit() {

    const error = validateInput()

    if (error) {
      alert(error);
      return;
    } else {
      if(title.trim() === "" || date === ""){
        alert("Please fill all fields ...")
      }
      else{
      setDisplay(false);
      navigate("/capsules")
      if(uploadType === "note"){
        dispatch(setDATA({ data, uploadType , title , date ,formattedDate , differenceInDays }));
      } else if(uploadType === "password"){
        dispatch(setDATA({Accounts , uploadType , title , date , formattedDate , differenceInDays }));
      } else if(uploadType === "reminder"){
        dispatch(setDATA({task , uploadType , title , date , formattedDate , differenceInDays }));
      } else if(uploadType === "contacts"){
        dispatch(setDATA({contacts , uploadType , title , date ,formattedDate , differenceInDays }));
      }
    }
    }
  }

  return (
    <div className="min-h-screen">
    <div className={`min-h-screen ${diplay ? "flex" : "hidden"} flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900`}>
      <GoBackButton />
      <div className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        🔒 Your data is 100% secure
      </div>
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
              onChange={(e) => handleChange("note", e.target.value.trim())}
              placeholder="Type your notes here..."
              className="w-full h-60 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        {uploadType === "password" && (
          <>
            <label className="text-white text-xl">Upload your passwords:</label>
            <textarea
              onChange={(e) => handleChange("name", e.target.value.trim())}
              placeholder="Social Account Name (instagram , facebook , twitter ...)"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              onChange={(e) => handleChange("id", e.target.value.trim())}
              placeholder="Enter Your Id"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              onChange={(e) => handleChange("pass", e.target.value.trim())}
              placeholder="Enter Your Password"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        {uploadType === "reminder" && (
          <>
            <label className="text-white text-xl">Upload your Tasks:</label>
            <textarea
              onChange={(e) => handleChange("task", e.target.value.trim())}
              placeholder="Appointment schedules."
              className="w-full h-40 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <h1 className="text-white text-xl">Deadline alerts.</h1>
            <input
              onChange={(e) => handleChange("date", e.target.value)}
              placeholder="Deadline alerts."
              type="date"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        {uploadType === "contacts" && (
          <>
            <label className="text-white text-lg">Upload your Contacts:</label>
            <textarea
              onChange={(e) => handleChange("contact", e.target.value)}
              placeholder="Type your contact name here..."
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              onChange={(e) => handleChange("contactName", e.target.value)}
              placeholder="contact details (number or email)"
              className="w-full h-14 mt-2 p-3 rounded-lg bg-gray-700 text-white border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </>
        )}

        <div className="mt-6">
          <button
            onClick={handleFinish}
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-lg text-lg shadow-xl hover:bg-teal-600 focus:outline-none"
          >
            Create Capsule
          </button>
        </div>
      </div>
    </div>
    <div className={`${diplay ? "hidden" : "block"}`}>
    <button
      onClick={() => setDisplay(true)} 
      className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-teal-500 z-20 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition transform hover:scale-110 hover:shadow-xl focus:outline-none"
    >
      ← Go Back
    </button>
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
       
      <div
        className="relative w-full max-w-lg p-8 rounded-xl bg-opacity-30 bg-gradient-to-r from-gray-700 to-gray-900 backdrop-blur-md border border-gray-600 shadow-[0px_4px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
          Create Your Capsule
        </h2>

        {/* Capsule Title Input */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-white mb-2">
            Capsule Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 bg-opacity-20 bg-gray-800 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          />
        </div>

        {/* Capsule Date Input */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-lg font-medium text-white mb-2">
            Opening Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate((e.target.value))}
            className="w-full p-4 bg-opacity-20 bg-gray-800 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.8)] hover:shadow-[0px_6px_20px_rgba(0,255,255,0.5)] transform hover:translate-y-[-2px] transition duration-300"
        >
          Finish
        </button>

        {/* Decorative Neon Glow */}
        <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 blur-xl"></div>
      </div>

      {/* Additional Styling for Depth */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 rounded-full blur-3xl"></div>
    </div>
    </div>
    </div>
  );
}

export default UploadPage;
