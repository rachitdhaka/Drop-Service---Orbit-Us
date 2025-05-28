import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-3">

        <p className="text-white">This is the Landing Page - Go to this Pages </p>
      <div className="flex gap-4">
        <NavLink to="/dashboard" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Dashboard</span>
      </NavLink>
      <NavLink to="/signup" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Sign up</span>
      </NavLink>
      <NavLink to="/login" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Login</span>
      </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
