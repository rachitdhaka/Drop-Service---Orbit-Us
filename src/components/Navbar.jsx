import React from "react";
import { IconBellRinging } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconUserCircle } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <nav className="bg-black flex p-4 border-b border-[#1F2937] justify-between items-center">
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-3 py-2 rounded-xl bg-[#111111] text-white text-sm focus:outline-none placeholder:text-xs"
          placeholder="Search Work"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
          <IconSearch size={16} stroke={1.5} />
        </div>
      </div>



      <div className="flex gap-3 ">
        {/* notification Icon */}
        <div className="flex justify-center items-center">
          <IconBellRinging stroke={1} color="white" />
        </div>
        {/* Connect wallet button */}
        <div>
          <button className="   rounded-xl text-white  p-2  bg-[#111111] p-3 cursor-pointer text-xs">
          Connect Wallet
        </button>
        </div>

        {/* Profile section */}
        <div className="flex justify-center items-center">
          <IconUserCircle stroke={1} color="white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;