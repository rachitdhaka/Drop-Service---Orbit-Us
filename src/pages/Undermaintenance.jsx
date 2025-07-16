import React from "react";
import image from "../assets/images/Here.png"

const Undermaintenance = () => {
  return (
    <div className="bg-black h-screen text-white flex flex-col justify-center items-center">
      <div className="text-center text-2xl">
        Website is Under Maintaince : Check the Project Here
      </div>
      <div className="rounded-xl">
        <a href="https://devfolio.co/projects/orbitus-d287" target="_blank">
            <img src={image} alt="" className="w-125 h-100 object-contain " />
        </a>
      </div>
      
    </div>
  );
};

export default Undermaintenance;
