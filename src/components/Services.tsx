"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineCog } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaHardHat, FaTools } from "react-icons/fa";
import { MdBuild, MdOutlineEco } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const Services = () => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center flex-col mt-10 bg-gray-100"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-[1370px] h-full px-4">
        <h1 className="text-3xl font-bold mt-17 mb-7 md:text-4xl text-center">
          Services
        </h1>
        <div className="w-[10%] h-[.4vh] bg-amber-300 mx-auto mb-5"></div>
        <p className="text-[15px] pb-4 text-center">
          Tailored marine solutions from design to delivery, built on expertise
          and reliability.
        </p>

        <div className="w-full max-w-[1370px] h-full px-4 pt-10 mb-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer"
            >
              <Link
                href={service.link}
              >
                <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
                  <service.icon size={60} className="absolute right-5 bottom-3" />
                </div>

                <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

                <div className="p-7 self-center items-center">
                  <h1 className="text-[20px] font-semibold">{service.title}</h1>
                  <p className="text-[14px] text-gray-500">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  {
    title: "Engineering Services",
    link: "/engineering",
    icon: HiOutlineCog,
    description:
      "Crafting innovative designs backed by deep technical expertise. Our solutions are tailored, precise, and ready for complex marine environments.",
  },
  {
    title: "Procurement Services",
    link: "/procurement",
    icon: FiShoppingCart,
    description:
      "We ensure timely sourcing of high-quality materials. Streamlined logistics meet strict compliance and project efficiency every step of the way.",
  },
  {
    title: "Construction & Fabrication",
    link: "/construction",
    icon: FaHardHat,
    description:
      "Robust fabrication and construction executed with accuracy. We turn designs into durable marine assets that exceed expectations.",
  },
  {
    title: "Installation & Commissioning",
    link: "/installation",
    icon: MdBuild,
    description:
      "From site setup to final handover, our teams ensure smooth deployment and performance validation of all marine systems and structures.",
  },
  {
    title: "Maintenance & Repair (EPCM/EPIC+)",
    link: "/maintenance",
    icon: FaTools,
    description:
      "Reliable upkeep and swift repair to maximize longevity. Our maintenance programs protect your investment and operational continuity.",
  },
  {
    title: "Environmental & Regulatory Compliance",
    link: "/environmental",
    icon: MdOutlineEco,
    description:
      "Navigating marine regulations with care. We prioritize sustainable practices and ensure full compliance with local and global standards.",
  },
];

export default Services;
