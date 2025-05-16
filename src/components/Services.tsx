import React from "react";
import { HiOutlineCog } from "react-icons/hi";
import { FiShoppingCart } from 'react-icons/fi';
import { FaHardHat } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { MdOutlineEco } from 'react-icons/md';


const Services = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col  mt-10 bg-gray-100">
      <div className="w-full max-w-[1370px] h-full px-4">
        <h1 className="text-3xl font-bold mt-17 mb-7 md:text-4xl text-center">
          Services
        </h1>
        <p className="text-[15px] pb-4 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        <div className="w-full max-w-[1370px] h-full px-4 mt-10 mb-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-full">
          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <HiOutlineCog
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Engineering Services
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <FiShoppingCart
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Procurement Services
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <FaHardHat
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Construction & Fabrication
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <MdBuild
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Installation & Commissioning
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <FaTools
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Maintenance & Repair (EPCM/EPIC+)
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="group w-full h-auto p-7 border border-gray-300 hover:bg-white bg-white cursor-pointer">
            <div className="relative bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 w-13 h-13 rounded-full left-15 top-7">
              <MdOutlineEco
                size={60}
                className="absolute right-5     bottom-3"
              />
            </div>

            <div className="relative w-[20%] h-[.3vh] bg-gray-200 group-hover:bg-amber-300 transition-all duration-300 rounded-lg mb-7 left-7 top-10"></div>

            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                Environmental & Regulatory Compliance
              </h1>

              <p className="text-[14px] text-gray-500">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
