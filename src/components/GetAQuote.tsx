"use clients";

import React from "react";
import ContactForm from "@/./components/contact-form";
import Image from "next/image";
import {portandharbor,
  offshoreoil,
  marinebridges,
  loadingarm} from "../../public/index";

const GetAQuote = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-white">
      {/* Get a Quote */}
      <div className="w-full max-w-[1370px] h-full px-4 flex flex-col lg:flex-row mb-30">
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

      {/* Constructions */}
      <div className="w-full max-w-[1370px] h-full px-4">
        <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
          Constructions
        </h1>
        <div className="w-[10%] h-[.4vh] bg-amber-300 mx-auto mb-5"></div>
        <p className="text-[14px] pb-4 text-center">
          Building durable marine infrastructure with engineering precision and environmental care.
        </p>

        {/* Construction type */}
        <div className="w-full max-w-[1370px] h-full px-4 mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-full place-items-center">
          <div className="w-full h-auto md:flex border border-gray-100 ">
            <div className="relative w-full h-[34vh] md:w-[200%]">
              <Image
                src={portandharbor}
                alt="Construction image"
                className="w-full h-full"
              />
            </div>
            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Port and Harbor Construction
              </h1>
              <p className="text-[14px] text-gray-500">
                We specialize in building modern ports and harbors that support commercial shipping, fishing industries, and naval operations. Our services include dredging, quay wall installation, breakwater design, and dock construction — all built to endure harsh marine environments.
              </p>
            </div>
          </div>

          <div className="w-full h-auto md:flex border border-gray-100 ">
            <div className="relative w-full h-[34vh] md:w-[200%]">
              <Image
                src={offshoreoil}
                alt="Construction image"
                className="w-full h-full"
              />
            </div>
            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Offshore Oil & Gas Facilities
              </h1>
              <p className="text-[14px] text-gray-500">
                EPC provides full-scale solutions for offshore platforms, subsea pipelines, and support structures essential to oil and gas operations. We manage everything from design to commissioning with a focus on safety, corrosion resistance, and long-term performance in deepwater and shallow fields.
              </p>
            </div>
          </div>
          <div className="w-full h-auto md:flex border border-gray-100 ">
            <div className="relative w-full h-[34vh] md:w-[200%]">
              <Image
                src={marinebridges}
                alt="Construction image"
                className="w-full h-full"
              />
            </div>
            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Marine Bridges and Causeways
              </h1>
              <p className="text-[14px] text-gray-500">
                Whether connecting islands or spanning challenging waterways, we construct durable marine bridges and causeways using advanced piling systems and erosion control. Our expertise ensures resilience against tides, currents, and climate stress.
              </p>
            </div>
          </div>
          <div className="w-full h-auto md:flex border border-gray-100 ">
            <div className="relative w-full h-[34vh] md:w-[200%]">
              <Image
                src={loadingarm}
                alt="Construction image"
                className="w-100% h-full"
              />
            </div>
            <div className="p-7 self-center items-center ">
              <h1 className="text-[20px] font-semibold">
                LNG Terminals and Marine Loading Arms
              </h1>
              <p className="text-[14px] text-gray-500">
                We design and construct LNG terminals equipped with precision marine loading arms for safe and efficient gas transfer. Our focus is on minimizing downtime, enhancing operational safety, and meeting international energy regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
