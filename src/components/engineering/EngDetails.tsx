import React from "react";
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const EngDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Precision-Driven Engineering for Complex Maritime Projects.
            </h1>
            <p>
              At AXIS EPC, our Engineering Services are the foundation of every successful infrastructure and industrial development we undertake. We combine technical expertise with practical experience to design systems that meet the highest industry standards. From front-end engineering design (FEED) to detailed engineering and project optimization, our team delivers solutions tailored to the specific demands of marine, oil & gas, and civil environments. Every blueprint we draw is built on innovation, safety, and sustainability—ensuring project success from day one.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of engineering services designed to support infrastructure across the energy, civil, and marine sectors. With a proven ability to deliver innovative and practical solutions, our engineering services include detailed design, project planning, and system optimization. We are equipped with the tools and talent to navigate complex technical demands, ensuring your project is delivered with precision, safety, and efficiency.
          </p>
        </div>

        <div className="w-full h-full grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-4 mt-7">
          <Image
            src={dannyHabour}
            alt="Port and Harbor Construction"
            width={600}
            height={200}
            className="w-full h-[35vh]"
          />

          <Image
            src={offshoreoil}
            alt="Offshore Oil & Gas Facilities"
            width={700}
            height={400}
            className="w-full h-[35vh]"
          />

          <Image
            src={marinebridges}
            alt="AXIS EPC"
            width={500}
            height={100}
            className="w-full h-[35vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default EngDetails;
