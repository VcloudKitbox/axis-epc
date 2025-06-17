"use client";

import React from "react";
import Image from "next/image";
import sTeh from "../../public/scott-blake-s9XDWLJ_LyE-unsplash.jpg";
import Edu from "../../public/person-near-alternative-energy-plant.jpg";
import Emp from "../../public/joe-holland-80zZ1s24Nag-unsplash.jpg";
import One from "../../public/ej-yao-D46mXLsQRJw-unsplash.jpg";
import Two from "../../public/danny-lau-HlAmpNz6nOc-unsplash.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="relative">
      {/* Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Embla Container */}
        <div className="flex">
          {[One, Edu, Emp, sTeh, Two].map((img, index) => (
            <div key={index} className="min-w-full h-[100vh] relative">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                className="object-cover"
                fill
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl lg:text-[56px] md:text-5xl font-bold mb-4">Welcome to Axis-EPC</h1>
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">Axis-EPC</h1> */}
        <p className="max-w-2xl text-[18px] mt-5">
          Delivering innovative marine engineering solutions with precision, safety, and efficiency — from concept to completion, we navigate complex challenges to build a sustainable maritime future.
        </p>
      </div>
    </div>
  );
};

export default Hero;
