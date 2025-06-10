import React from 'react'
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const ProDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Global Procurement Solutions That Guarantee Project Efficiency.
            </h1>
            <p>
              Our Procurement Services streamline sourcing and supply chain processes for critical infrastructure and energy projects. AXIS EPC leverages strategic vendor relationships and a global network to ensure cost-effective, timely delivery of equipment, materials, and systems. With a focus on quality assurance, compliance, and risk mitigation, we handle every procurement stage—from planning and bidding to logistics and customs clearance—empowering clients to stay on schedule and within budget.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of procurement services designed to support industries with high-quality and timely material sourcing. With a proven track record of managing complex logistics and vendor coordination, our procurement services cover everything from bid management and contract negotiation to delivery and compliance. We ensure that your supply chain remains seamless, cost-effective, and on schedule from start to finish.
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

export default ProDetails