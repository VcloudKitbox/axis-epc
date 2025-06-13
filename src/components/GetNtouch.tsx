"use client"

import React from "react";

import ContactForm from "@/./components/contact-form";

const GetNtouch = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-white">
      <div className="w-full max-w-[1370px] h-full px-4 flex flex-col lg:flex-row mb-30">
        {/* <div className=" lg:w-[70%] bg-white rounded-lg border border-amber-300 mt-10 p-10 mx-auto shadow-white flex flex-col justify-center items-center">
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
        </div> */}

        <div className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex flex-col px-7 pt-[150px]">
          <h1 className="text-3xl font-bold mb-7 md:text-3xl">
            Customized solutions tailored to your project’s unique scope and timeline.
          </h1>
          <div className="w-[20%] h-[.5vh] bg-amber-300 rounded-lg mb-7"></div>
          <p className="text-[14px] pb-4">
            From feasibility to final delivery, we simplify complex challenges with tailored EPC services. Our team is dedicated to precision, transparency, and support at every stage. Get in touch today for a quote that aligns with your project goals, budget, and execution timeline.
          </p>

          <p className="text-[14px]">
            We prioritize your success with expertise you can count on. Every quote reflects our commitment to quality, safety, and reliability in marine engineering.
          </p>
        </div>

        <div id="quote-form" className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex items-center flex-col pt-[80px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetNtouch;
