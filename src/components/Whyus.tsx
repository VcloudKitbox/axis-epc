"use client";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaClock } from "react-icons/fa";
import { BsBoxSeam, BsPersonCheck } from "react-icons/bs";
import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi";
import { fadeInUp } from "@/utils/animations";

const reasons = [
  {
    title: "Proven Experience",
    desc: "Years of successful EPC project delivery across diverse industries.",
    icon: <FaAward className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Turnkey Solutions",
    desc: "From design to handover, we manage your project end-to-end.",
    icon: <BsBoxSeam className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Skilled Experts",
    desc: "A team of engineers and technicians committed to excellence.",
    icon: <FaUsers className="text-purple-600 w-6 h-6" />,
  },
  {
    title: "Safety First",
    desc: "Strict adherence to international safety and quality standards.",
    icon: <HiShieldCheck className="text-red-600 w-6 h-6" />,
  },
  {
    title: "Timely Delivery",
    desc: "We pride ourselves on completing projects on schedule.",
    icon: <FaClock className="text-yellow-600 w-6 h-6" />,
  },
  {
    title: "Client-Centric",
    desc: "Your goals and satisfaction are our top priority.",
    icon: <BsPersonCheck className="text-teal-600 w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.div
      className="w-full bg-white "
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          className="w-full h-[60vh] md:h-[800px] bg-[url('/alt-services.jpg')] bg-cover bg-center shadow-lg"
          variants={fadeInUp}
        />

        {/* Text */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Core Strengths</h2>
          <p className="mb-7">
            At Axis-EPC, we go beyond building infrastructure — we build trust.
            With a legacy of successful EPC projects, a skilled team, and a
            commitment to quality, we deliver solutions that are safe,
            efficient, and tailored to your needs.
          </p>

          <div className="space-y-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={fadeInUp}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mt-1 rounded-md w-[70px] h-[70px] flex justify-center items-center shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold lg:mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Bottom Image */}
      <motion.div
        className="w-[100%] mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/btm_slide.png"
          alt="Bottom Decoration"
          width={1650}
          height={300}
          className="pl-6 object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
