import React from "react";
import { NavLink } from "react-router-dom";

export const Add = () => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row justify-center">
      <div className="max-w-xl mx-8 my-8 border border-gray-300 rounded-lg p-6 sm:p-12">
        <h1 className="text-center text-2xl font-bold mb-6 mt-1">
          Demo Course
        </h1>
        <div className="flex justify-center flex-wrap">
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg mb-4 mr-4">
            <NavLink to="/Jee">JEE</NavLink>
          </button>
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg mb-4 mr-4">
            NEET
          </button>
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg">
            BOOK STORE
          </button>
        </div>
      </div>
      <div className="max-w-md mx-8 my-8 border border-gray-300 rounded-lg p-6 sm:p-12 mt-8 sm:mt-0 ml-0 sm:ml-16">
        <h1 className="text-center text-2xl font-bold mb-4">JEE/NEET</h1>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg">
            Paid Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
