import React from "react";
import Link from "next/link";
import Image from "next/image";
import { axisepc } from "../../public/index";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col pt-10 pb-5 bg-black text-white">
      <div className="w-full lg:max-w-[1370px] h-full px-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div>
          <Link href="/">
            <div className="relative w-56 h-20">
              <Image
                src={axisepc}
                alt="Axis-EPC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="mt-3">
            At the outset of every project, our team works closely with the
            clients to understand their vision, goals, and budget.
          </p>
        </div>

        {/* Quick Link */}
        <div className="pl-10">
          <h1 className="font-semibold text-[18px] text-amber-300 mb-4">
            Quick Links
          </h1>
          <ul className="flex flex-col">
            <Link href="/" className="hover:text-amber-200 transition duration-150 ease-in-out">Home</Link>
            <Link href="/about" className="hover:text-amber-200 transition duration-150 ease-in-out">About-Us</Link>
            <Link href="/services" className="hover:text-amber-200 transition duration-150 ease-in-out">Services</Link>
            <Link href="/contact" className="hover:text-amber-200 transition duration-150 ease-in-out">Contact Us</Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h1 className="font-semibold text-[18px] mb-4 text-amber-300">
            Services
          </h1>
          <ul className="flex flex-col">
            <Link href="/engineering" className="hover:text-amber-200 transition duration-150 ease-in-out">Engineering Services</Link>
            <Link href="/procurement" className="hover:text-amber-200 transition duration-150 ease-in-out">Procurement Services</Link>
            <Link href="/construction" className="hover:text-amber-200 transition duration-150 ease-in-out">Construction & Fabrication</Link>
            <Link href="/installation" className="hover:text-amber-200 transition duration-150 ease-in-out">Installation & Commissioning</Link>
            <Link href="/maintenance" className="hover:text-amber-200 transition duration-150 ease-in-out">Maintenance & Repair (EPCM/EPIC+)</Link>
            <Link href="/environmental" className="hover:text-amber-200 transition duration-150 ease-in-out">Environmental & Regulatory Compliance</Link>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h1 className="font-semibold text-[18px] text-amber-300 mb-4">
            Contact Info
          </h1>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-amber-300" />
            10 Anuoluwapo Close off Opebi Road Ikeja Lagos.
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-amber-300" />
            +234 814 7024 765
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-amber-300" />
            info@axis-epc.com
          </p>
        </div>
      </div>

      {/* Copywrite Notice */}
      <div className="w-full text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-4 px-4">
        &copy; {new Date().getFullYear()} Axis EPC. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
