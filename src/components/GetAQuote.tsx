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
    <div className="w-full h-full flex items-center justify-center flex-col bg-gray-100">
      {/* Get a Quote */}
      <div className="w-full max-w-[1370px] h-full px-4 flex flex-col lg:flex-row mb-30">
        <div className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex flex-col px-7 pt-[150px]">
          <h1 className="text-3xl font-bold mb-7 md:text-3xl">
            Minus hic non reiciendis ea possimus at quia.
          </h1>
          <div className="w-[20%] h-[.5vh] bg-amber-300 rounded-lg mb-7"></div>
          <p className="text-[14px] pb-4">
            Rem id rerum. Debitis deserunt quidem delectus expedita ducimus
            dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque
            perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi
            possimus ut delectus dicta.{" "}
          </p>

          <p className="text-[14px]">
            Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit
            eligendi labore culpa eos. Deserunt porro magni qui necessitatibus
            dolorem at animi cupiditate.
          </p>
        </div>

        <div className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex items-center flex-col pt-[80px]">
          <ContactForm />
        </div>
      </div>

      {/* Constructions */}
      <div className="w-full max-w-[1370px] h-full px-4">
        <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
          Constructions
        </h1>
        <p className="text-[14px] pb-4 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* Construction type */}
        <div className="w-full max-w-[1370px] h-full px-4 mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-full place-items-center">
          <div className="w-full h-auto md:flex border border-gray-300 ">
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
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>

          <div className="w-full h-auto md:flex border border-gray-300 ">
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
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>
          <div className="w-full h-auto md:flex border border-gray-300 ">
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
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat deleniti adipisci. Cum delectus doloribus non
                veritatis. Officia temporibus illo magnam. Dolor eos et.
              </p>
            </div>
          </div>
          <div className="w-full h-auto md:flex border border-gray-300 ">
            <div className="relative w-full h-[34vh] md:w-[200%]">
              <Image
                src={loadingarm}
                alt="Construction image"
                className="w-full h-full"
              />
            </div>
            <div className="p-7 self-center items-center">
              <h1 className="text-[20px] font-semibold">
                LNG Terminals and Marine Loading Arms
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

export default GetAQuote;
