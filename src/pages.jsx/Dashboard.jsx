import React from "react";
import Boxes from "../components/Boxes";
import Jobdiv from "../components/Jobdiv";
import Categories from "../components/Categories";

const Dashboard = () => {
  return (
    <div className="h-full bg-black ">


      {/* Header  */}
      <div className="w-full flex justify-evenly p-6">
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
      

      {/* Jobs part */}
      <p className="text-white  ml-10 text-[24px] font-maga">Recents Jobs </p>


      <div className="w-full flex justify-center p-4 ">
          <div className="grid grid-cols-3 gap-4">
         <Jobdiv />
          <Jobdiv />
          <Jobdiv />
          <Jobdiv />
          <Jobdiv />
          <Jobdiv />
      </div>
      </div>


      {/* Cateroiry part */}
      <p className="text-white  ml-10 text-[24px] font-maga">Trending Categories </p>


      <div className="w-full flex justify-center items-center py-5">
        <div className="grid grid-cols-4 gap-4">
          <Categories/>
          <Categories/>
          <Categories/>
          <Categories/>
          <Categories/>
          <Categories/>
          <Categories/>
          <Categories/>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
