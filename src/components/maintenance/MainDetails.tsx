import React from 'react'
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const MainDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Reliable Maintenance Backed by Comprehensive EPCM Expertise
            </h1>
            <p>
              With our Maintenance & Repair services, AXIS EPC extends the life and performance of critical assets. Whether under EPCM or EPIC+ contracts, we provide planned, corrective, and emergency maintenance across industrial, marine, and energy systems. Our experienced field teams respond rapidly to minimize downtime while ensuring compliance and safety. From asset inspections to complete overhauls, we deliver integrated, lifecycle-based support that keeps your infrastructure running at peak efficiency.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of maintenance and repair services designed to support long-term asset reliability and uptime. With a proven system for proactive and corrective maintenance, our services cover equipment inspection, diagnostics, refurbishments, and emergency support. We are equipped to respond efficiently, keeping your operations safe, compliant, and consistently running at optimal performance.
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

export default MainDetails