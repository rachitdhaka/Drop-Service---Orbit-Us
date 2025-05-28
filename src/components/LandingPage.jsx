import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-3">

        <p className="text-white">This is the Landing Page</p>
      <NavLink to="/dashboard" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Dashboard</span>
      </NavLink>
    </div>
  );
};

export default LandingPage;
