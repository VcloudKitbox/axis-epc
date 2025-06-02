import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define your testimonials
const testimonials = [
  {
    name: "Jane Doe",
    position: "Project Manager, OmegaBuild Ltd",
    message:
      "Axis EPC delivered our offshore project on time with exceptional professionalism. Truly dependable!",
  },
  {
    name: "Michael Smith",
    position: "CEO, DeepWave Marine",
    message:
      "Working with Axis EPC was seamless. Their attention to detail and safety is second to none.",
  },
  {
    name: "Linda Johnson",
    position: "Lead Engineer, CoralConstruct",
    message:
      "Axis EPC combines expertise with excellent client service. Highly recommended for complex projects.",
  },
  {
    name: "Robert Lee",
    position: "Operations Director, SeaBase Energy",
    message:
      "From planning to execution, Axis EPC exceeded expectations. A valuable partner in marine EPC.",
  },
  {
    name: "Chukwuemeka Okoro",
    position: "Technical Consultant, BlueHarbor Systems",
    message:
      "Their innovative solutions and transparency made a huge difference. I'd definitely work with Axis EPC again.",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-200 pt-7 pb-7">
      <h1 className="text-3xl font-bold mb-3 md:text-3xl text-center">
        Testimonials
      </h1>
      <div className="w-[10%] h-[.4vh] bg-amber-300 mx-auto mb-5"></div>
      <p className="text-[15px] pb-4 mb-4 text-center">
        Trusted voices from our partners affirm the excellence, reliability, and
        integrity behind every Axis EPC project.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] lg:max-w-7xl flex items-center"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-gray-700 text-sm italic">
                      {testimonial.message}
                    </p>
                    <div>
                      <p className="font-semibold text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
