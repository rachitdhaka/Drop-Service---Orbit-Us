import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <section className="bg-black  rounded-2xl w-xl p-5  flex flex-col justify-center items-center">
        <h1 className=" text-white text-3xl font-semibold mb-5 ">
          Create Your Account
        </h1>

        {/* <button className="border border-[#00FF94] w-xs  rounded-xl text-[#00FF94]  p-2 my-4 bg-[#111111] cursor-pointer text-xs">
          Connect Wallet
        </button> */}

        {/* <p className="text-[10px] text-[#9CA3AF]">or conitnue with</p> */}

        <input
          type="email"
          placeholder="Email"
          className="placeholder:text-xs text-sm border border-[#1F2937] w-xs  rounded-xl text-[#9CA3AF]  p-2 my-2 bg-[#111111] focus:outline-none"
        />
        <input
          type="text"
          placeholder="User Name"
          className="placeholder:text-xs text-sm border border-[#1F2937] w-xs  rounded-xl text-[#9CA3AF]  p-2 my-2 bg-[#111111] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="placeholder:text-xs text-sm  border border-[#1F2937] w-xs  rounded-xl text-[#9CA3AF]  p-2 my-2 bg-[#111111] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="placeholder:text-xs text-sm  border border-[#1F2937] w-xs  rounded-xl text-[#9CA3AF]  p-2 my-2 bg-[#111111] focus:outline-none"
        />


        <div className="flex gap-3 justify-left mt-2 ">
          
            <input type="checkbox" required class="form-checkbox" />
            <span class="text-[#9CA3AF] text-xs">
              I agree to the Terms of Service and Privacy Policy
            </span>
          
        </div>

        <button className="text-white bg-[linear-gradient(90deg,_#B026FF_0%,_#00FF94_100%)] h-10 w-24 rounded-xl mt-5 cursor-pointer text-xs">
          Create Account
        </button>

        <NavLink to="/login" className="text-white text-xs mt-3">
          Already Have an account ?{" "}
          <span className="text-[#00FF94]">
            <a href="#">Login</a>
          </span>
        </NavLink>
      </section>
    </div>
  );
};

export default Signup;
