"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // ✅Import Next.js Image component
import { axisepc } from "../../public/index";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* ✅Logo (Image) */}
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium text-sm uppercase">
          {navItems.map((item, index) => (
            <li key={index} className="group relative cursor-pointer">
              <Link
                href={item.href}
                className={`transition-colors duration-300 ease-in-out ${
                  pathname === item.href
                    ? "text-yellow-400"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-yellow-400 transition-all duration-300 ease-in-out ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black absolute w-full left-0 top-16 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 py-6 text-white  font-semibold uppercase">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block transition-colors duration-300 ease-in-out ${
                  pathname === item.href
                    ? "text-yellow-400"
                    : "hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
