"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const Projects = () => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center flex-col mt-10 pb-10 bg-white"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
        Projects
      </h1>
      <div className="w-[10%] h-[.4vh] bg-amber-300 mx-auto mb-5"></div>
      <p className="text-[14px] pb-4 mb-4 text-center">
        Showcasing our commitment to quality through successfully delivered marine projects.
      </p>

      <div className="w-full max-w-[1370px] h-full px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="group relative w-full h-[30vh] border border-gray-300 hover:scale-105 transition duration-300 bg-no-repeat bg-center bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${project.image})` }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-70 transition duration-300"></div>

            {/* Content */}
            <div className="relative z-10 p-4">
              <div className="hidden group-hover:block bg-amber-400 w-[30%] text-[17px] mb-2">
                <p className="text-center text-white">{project.tag}</p>
              </div>

              <div className="hidden relative top-20 group-hover:flex items-center justify-center gap-2">
                <Link
                  href={project.link}
                  className="flex items-center text-white hover:underline group-hover:text-amber-300"
                >
                  <span>More details</span>
                  <FiArrowRightCircle className="ml-1" />
                </Link>
              </div>

              <h1 className="relative top-40 text-[20px] text-white font-semibold hidden group-hover:block text-center">
                {project.title}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const projectList = [
  {
    tag: "Project 1",
    title: "Port and Harbor Construction",
    image: "/project1.jpg",
    link: "/project-details1",
  },
  {
    tag: "Project 2",
    title: "Offshore Platform Installation",
    image: "/project2.jpg",
    link: "/project-details2",
  },
  {
    tag: "Project 3",
    title: "Bridge and Causeway Construction",
    image: "/project3.1.jpg",
    link: "/project-details3",
  },
];

export default Projects;
