"use client";

import React from "react";
import Image from "next/image";
import {
  portandhabor,
  offshoreoil,
  marinebridge,
  loadingarm,
} from "../../public/index";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const GetAQuote = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-white pt-7">
      {/* Constructions */}
      <motion.div
        className="w-full max-w-[1370px] h-full px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
          Constructions
        </h1>
        <div className="w-[10%] h-[.4vh] bg-amber-300 mx-auto mb-5"></div>
        <p className="text-[14px] pb-4 text-center">
          Building durable marine infrastructure with engineering precision and
          environmental care.
        </p>
      </motion.div>

      <div className="w-full max-w-[1370px] h-full px-4 mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-full place-items-center">
        {[ // Array of card data to clean up repetition
          {
            img: portandhabor,
            title: "Port and Harbor Construction",
            desc:
              "We specialize in building modern ports and harbors that support commercial shipping, fishing industries, and naval operations. Our services include dredging, quay wall installation, breakwater design, and dock construction — all built to endure harsh marine environments.",
          },
          {
            img: offshoreoil,
            title: "Offshore Oil & Gas Facilities",
            desc:
              "EPC provides full-scale solutions for offshore platforms, subsea pipelines, and support structures essential to oil and gas operations. We manage everything from design to commissioning with a focus on safety, corrosion resistance, and long-term performance in deepwater and shallow fields.",
          },
          {
            img: marinebridge,
            title: "Marine Bridges and Causeways",
            desc:
              "Whether connecting islands or spanning challenging waterways, we construct durable marine bridges and causeways using advanced piling systems and erosion control. Our expertise ensures resilience against tides, currents, and climate stress.",
          },
          {
            img: loadingarm,
            title: "LNG Terminals and Marine Loading Arms",
            desc:
              "We design and construct LNG terminals equipped with precision marine loading arms for safe and efficient gas transfer. Our focus is on minimizing downtime, enhancing operational safety, and meeting international energy regulations.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="w-full h-auto md:flex border border-gray-100"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={i}
          >
            <div className="relative w-full h-[34vh] flex self-center items-center md:w-[200%] lg:w-[300%]">
              <Image
                src={item.img}
                alt="Construction image"
                className="w-[350px] h-[250px] object-cover "
              />
            </div>
            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">{item.title}</h1>
              <p className="text-[14px] text-gray-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GetAQuote;
