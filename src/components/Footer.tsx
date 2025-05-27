import React from "react";
import Link from "next/link";
import Image from "next/image";
import { axisepc } from "../../public/index";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col  mt-10 bg-white">
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
        <div>
          <h1>Services</h1>
          <ul>
            <li>Engineering Services</li>
            <li>Procurement Services</li>
            <li>Construction & Fabrication</li>
            <li>Installation & Commissioning</li>
            <li>Maintenance & Repair (EPCM/EPIC+)</li>
            <li>Environmental & Regulatory Compliance</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h1>Quicl Links</h1>
          <ul>
            <li>Home</li>
            <li>About-Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h1>Address</h1>
          <p>Address</p>
          <p>Tel-Number</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
