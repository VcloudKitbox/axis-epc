import React from 'react'
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const EnvDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Sustainable Practices Anchored in Regulatory Expertise
            </h1>
            <p>
              AXIS EPC’s Environmental & Regulatory Compliance services are tailored to navigate the complex frameworks of today’s environmental policies. We assist clients in achieving full project compliance through environmental impact assessments, waste management strategies, emissions control, and regulatory documentation. Our multidisciplinary experts ensure that every phase—from design to decommissioning—meets international and local standards. Sustainability is not an afterthought—it’s integrated into every step of your project’s lifecycle.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of environmental and compliance services designed to support projects across regulated industries. With a proven method for managing sustainability goals and legal requirements, our services include environmental reporting, audits, and mitigation planning. We are equipped to guide you through every compliance milestone, ensuring your project aligns with both global standards and local regulations.
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

export default EnvDetails