import React from "react";

const MissionVision = () => {
  return (
    <div className="w-full h-auto pt-12 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left border border-amber-300 rounded-lg p-10 bg-gray-100 shadow-2xs hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-3xl text-bold">Mission</h1>
          <div className="w-[10%] h-[.2vh] bg-amber-300 mx-auto lg:mx-0 mt-5 mb-5"></div>
          <p>
            Delivering top-quality EPC solutions that drive innovation and efficiency across marine and industrial sectors.
          </p>
        </div>
        <div className="text-center md:text-left border border-amber-300 rounded-lg p-10 bg-gray-100 shadow-2xs hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-3xl text-bold">Vision</h1>
          <div className="w-[10%] h-[.2vh] bg-amber-300 mx-auto lg:mx-0 mt-5 mb-5"></div>
          <p>
            To be a global leader in EPC services, recognized for excellence from project start to operation and maintenance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
