import React from "react";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col  mt-10 pb-10 bg-white">
      <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
        Projects
      </h1>
      <p className="text-[14px] pb-4 mb-4 text-center">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="w-full max-w-[1370px] h-full px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="group relative w-full h-[30vh] border border-gray-300 hover:scale-105 transition duration-300 bg-[url(/project1.jpg)] bg-no-repeat bg-center bg-cover cursor-pointer">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-70 transition duration-300"></div>

          {/* Content */}
          <div className="relative z-10 p-4">
            <div className="hidden group-hover:block bg-amber-400 w-[30%] text-[17px] mb-2">
              <p className="text-center text-white">Project 1</p>
            </div>

            <div className="hidden relative top-20 group-hover:flex items-center justify-center gap-2">
              <Link
                href="/project-details1"
                className="flex items-center text-white hover:underline group-hover:text-amber-300"
              >
                <span>More details</span>
                <FiArrowRightCircle className="ml-1" />
              </Link>
            </div>

            <h1 className="relative top-40 text-[20px] text-white font-semibold hidden group-hover:block text-center">
              Port and Harbor Construction
            </h1>
          </div>
        </div>

        <div className="group relative w-full h-[30vh] border border-gray-300 hover:scale-105 transition duration-300 bg-[url(/project2.jpg)] bg-no-repeat bg-center bg-cover cursor-pointer">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-70 transition duration-300"></div>

          {/* Content */}
          <div className="relative z-10 p-4">
            <div className="hidden group-hover:block bg-amber-400 w-[30%] text-[17px] mb-2">
              <p className="text-center text-white">Project 2</p>
            </div>

            <div className="hidden relative top-20 group-hover:flex items-center justify-center gap-2">
              <Link
                href="/project-details2"
                className="flex items-center text-white hover:underline group-hover:text-amber-300"
              >
                <span>More details</span>
                <FiArrowRightCircle className="ml-1" />
              </Link>
            </div>

            <h1 className="relative top-40 text-[20px] text-white font-semibold hidden group-hover:block text-center">
              Offshore Platform Installation
            </h1>
          </div>
        </div>

        <div className="group relative w-full h-[30vh] border border-gray-300 hover:scale-105 transition duration-300 bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover cursor-pointer">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-70 transition duration-300"></div>

          {/* Content */}
          <div className="relative z-10 p-4">
            <div className="hidden group-hover:block bg-amber-400 w-[30%] text-[17px] mb-2">
              <p className="text-center text-white">Project 3</p>
            </div>

            <div className="hidden relative top-20 group-hover:flex items-center justify-center gap-2">
              <Link
                href="/project-details3"
                className="flex items-center text-white hover:underline group-hover:text-amber-300"
              >
                <span>More details</span>
                <FiArrowRightCircle className="ml-1" />
              </Link>
            </div>

            <h1 className="relative top-40 text-[20px] text-white font-semibold hidden group-hover:block text-center">
              Bridge and Causeway Construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
