import React from "react";
import { NavLink } from "react-router-dom";
import cover from "../assets/images/image.png"

const LandingPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center gap-3">

        <p className="text-white pb-5 text-2xl font-maga"> Website Under Maintenance : Check the project here </p>


        <a href="https://devfolio.co/projects/orbitus-d287">
          <img src={cover} alt="Cover Image"  
          className="rounded-3xl h-72"/>
        </a>

      {/* <div className="flex gap-4">
        <NavLink to="/dashboard" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Dashboard</span>
      </NavLink>
      <NavLink to="/signup" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Sign up</span>
      </NavLink>
      <NavLink to="/login" className="text-white text-xs mt-3"> 
        <span className="text-white bg-neutral-700 p-3 rounded-2xl  ">Login</span>
      </NavLink>
      </div> */}
    </div>
  );
};

export default LandingPage;
