import React from 'react'
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const InsDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Seamless Integration Through Smart Installation & Testing
            </h1>
            <p>
              Our Installation & Commissioning team ensures that complex systems are deployed and launched with zero compromise. AXIS EPC specializes in the installation of electrical, mechanical, and instrumentation packages across marine and energy sectors. We carry out functional testing, loop checks, pre-commissioning, and full commissioning to verify system readiness. Every component is aligned with client specifications, ensuring operational efficiency, long-term reliability, and regulatory compliance from day one.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of installation and commissioning services designed to support operational readiness across technical environments. With a proven approach to managing complex installations and system integrations, our services include mechanical fitting, electrical setup, and complete commissioning checks. We are equipped to ensure your assets are installed correctly and activated safely, enabling flawless startup and performance.
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
  )
}

export default InsDetails