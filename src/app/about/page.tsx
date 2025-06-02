import Aboutus from "@/components/about/Aboutus";
import Hero2 from "@/components/about/Hero2";
import MissionVision from "@/components/about/MissionVision";
import Testimonial from "@/components/Testimonial"
import React from "react";

const page = () => {
  return (
    <div>
      <Hero2 />
      <Aboutus />
      <MissionVision />
      <Testimonial />
    </div>
  );
};

export default page;
