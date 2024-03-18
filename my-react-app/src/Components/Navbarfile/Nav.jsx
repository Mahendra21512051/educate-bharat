import React from "react";
import logo from "./logo.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <header className="flex justify-start sm:justify-between justify-self-start border border-gray-300 rounded-lg items-center fixed top-0 w-full z-10 bg-white ">
      <img src={logo} alt="Company Logo" style={{ width: "50", height: 50 }} />
      <button
        className=" hidden sm:block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-4"
        onClick={handleHomeClick}
      >
        {" "}
        <NavLink to="/"> Home</NavLink>
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2 sm:mx-4">
        <NavLink to="/Course">All Courses</NavLink>
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 sm:mx-4">
        Book Store
      </button>
      <div className="ml-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded mx-2 sm:mx-4">
          <NavLink activeClassName="bg-red" to="/Login">
            Log In
          </NavLink>
        </button>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mx-2 sm:mx-4">
          <NavLink activeClassName="bg-red" to="/Ragister">
            Ragister
          </NavLink>
        </button>
      </div>
    </header>
  );
};
export default Nav;
