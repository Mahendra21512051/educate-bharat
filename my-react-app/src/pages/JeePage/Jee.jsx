import React from "react";
import courseImage from "./download.jpeg";
const Jee = () => {
  return (
    <div>
      <div className=" bg-pink-500 w-full h-50 border border-gray-300 rounded-lg ">
        <h1 className="inline-block   text-cyan-50 text-4xl font-bold w-full mr-50">
          ONLINE IIT JEE COACHING
        </h1>
        <p className="text-md text-center text-pretty text-cyan-50">
          The online class is considered one of the best options for preparing
          for the IIT JEE exam. Educate Bharat offers the best online coaching
          for IIT JEE exam preparation, making it an ideal choice for aspirants.
          With the EB IIT JEE Online Coaching Program, students can access the
          best courses that are both effective and affordable. By opting for
          this accessible and cost-effective online coaching for IIT JEE,
          students can effectively prepare themselves for the renowned
          engineering examination.
        </p>
      </div>
      <div className="w-full flex justify-center p-3">
        <div className="max-w-xl mx-8 my-8 border border-gray-300 rounded-lg p-24 mr-16 overflow-hidden shadow-lg">
          <button className="bg-blue-500 text-white font-bold py-6 px-12 rounded-lg mr-12">
            formulaSheet
          </button>
        </div>
        <div className="max-w-xl mx-8 my-8 border border-gray-300 rounded-lg p-24 mr-16  overflow-hidden shadow-lg">
          <button className="bg-blue-500 text-white font-bold py-6 px-12 rounded-lg mr-12">
            Revision Notes
          </button>
        </div>
      </div>

      <div className=" flex spacborder border border-gray-300 rounded-lg  shadow-lg items-center">
        <div className=" flex flex-row justify-around relative w-full max-w-sm ">
          {/* Course Image */}
          <img
            src={courseImage}
            alt="Course"
            className="w-1/2 h-full object-cover rounded-l-md"
          />

          {/* Course Details */}

          <div className="  left-1/2 relative flex p-3  w-full max-w-xl transform -translate-x-1/2 flex-col bg-white  px-2 py-2 border border-gray-300 rounded-lg overflow-hidden shadow-lg ">
            <h3 className="text-lg font-bold">Course Name</h3>
            <div className="text-sm">
              <p className="text-gray-600">
                Price: <span className="line-through">RS:2000</span>
              </p>
              <p className="text-red-500">
                Now: RS:1500 <span className="text-xs">(25% Off)</span>
              </p>
            </div>
            <button className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jee;
