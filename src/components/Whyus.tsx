import { FaAward, FaUsers, FaClock } from "react-icons/fa";
import { BsBoxSeam, BsPersonCheck } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";

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
    icon: <HiShieldCheck className="text-red-600 w-6 h-6"/>,
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
    <div className="w-full bg-white py-26">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="w-full h-[60vh] md:h-[800px] bg-[url('/alt-services.jpg')] bg-cover bg-center shadow-lg" />

        {/* Text */}
        <div>
                  <h2 className="text-3xl font-bold mb-6">Core Strengths</h2>
                  <p className="mb-7">At Axis-EPC, we go beyond building infrastructure — we build trust. With a legacy of successful EPC projects, a skilled team, and a commitment to quality, we deliver solutions that are safe, efficient, and tailored to your needs.</p>
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 rounded-md w-[70px] h-[70px]  flex justify-center items-center shadow-lg">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold lg:mt-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
