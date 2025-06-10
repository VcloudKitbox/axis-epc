import React from 'react'
import Image from "next/image";
import { dannyHabour, marinebridges, offshoreoil } from "../../../public";

const ConDetails = () => {
  return (
    <div className="w-full h-full py-15 flex items-center justify-center flex-col bg-gray-200">
      <div className="w-full max-w-[1370px] h-full px-4">
        <div className="lg:flex">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              Building Resilient Infrastructure Through Expert Fabrication
            </h1>
            <p>
              AXIS EPC’s Construction & Fabrication capabilities are built to handle the most demanding industrial and marine projects. With precision welding, structural steelwork, and modular assembly services, we execute turnkey solutions in both onshore and offshore environments. Our fabrication yards and construction teams follow stringent quality controls and safety protocols to deliver durable, regulation-compliant facilities. From start to finish, we ensure structural integrity, seamless integration, and timely delivery.
            </p>
          </div>
          <div className="w-full h-[30vh]">
            <div className="w-full h-full bg-[url(/project3.1.jpg)] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        <div className="mt-7">
          <p>
            At AXIS EPC, we offer a comprehensive range of construction and fabrication services designed to support industrial and marine infrastructure. With a proven ability to deliver safe, durable, and cost-effective structures, our services span steel fabrication, modular construction, and field execution. We are equipped with skilled professionals and certified facilities, ensuring your project is built to the highest standards and delivered without delay.
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

export default ConDetails