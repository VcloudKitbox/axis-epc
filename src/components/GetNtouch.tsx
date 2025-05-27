"use client"

import React from "react";

const GetNtouch = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className=" lg:w-[70%] bg-white rounded-lg border border-amber-300 mt-10 p-10 mx-auto shadow-white flex flex-col justify-center items-center">
          <h1 className="text-[18px] text-gray-600 font-semibold mb-3 md:text-3xl text-center">
            We’d Love to Hear from You
          </h1>

          <button
            onClick={() => {
              const section = document.getElementById("quote-form");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" w-[50%] lg:w-[30%] bg-amber-100 p-5 rounded-lg border-1 align-center cursor-pointer hover:bg-amber-300 transition ease-in-out"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetNtouch;
