import React from "react";
import Link from "next/link";
import Image from "next/image";
import { axisepc } from "../../public/index";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col  mt-10 mb-7 bg-white">
      <div className="w-full max-w-[1370px] h-full px-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div>
          <Link href="/">
            <div className="relative w-56 h-20">
              {" "}
              {/* Adjust width and height */}
              <Image
                src={axisepc} // ✅Place logo in public/logo.png
                alt="Axis-EPC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p>
            At the outset of every project, our team works closely with the
            clients to understand their vision, goals, and budget.
          </p>
        </div>

        {/* services */}
        <div className="group">
          <h1 className="font-semibold text-[18px] mb-4">Services</h1>
          <ul className="flex flex-col">
            <Link href="/engineering">Engineering Services</Link>
            <Link href="/procurement">Procurement Services</Link>
            <Link href="/construction">Construction & Fabrication</Link>
            <Link href="/installation">Installation & Commissioning</Link>
            <Link href="/maintenance">Maintenance & Repair (EPCM/EPIC+)</Link>
            <Link href="/environmental">Environmental & Regulatory Compliance</Link>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h1 className="font-semibold text-[18px] mb-4">Quicl Links</h1>
          <ul className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About-Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h1 className="font-semibold text-[18px] mb-4">Address</h1>
          <p>10 Anuoluwapo Close off Opebi Road Ikeja Lagos.</p>
          <p>+234 814 7024 765, +234 020 1634 0450.</p>
          <p>info@axis-epc.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
