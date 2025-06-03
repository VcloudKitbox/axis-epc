import ContactForm from "@/./components/contact-form";
import Hero4 from "@/components/contact/Hero4";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-white">
      <Hero4 />
      {/* Get a Quote */}
      <div className="w-full max-w-[1370px] h-full px-4 flex flex-col lg:flex-row mb-30">
        <div className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex flex-col px-7 pt-[150px]">
          <h1 className="text-3xl font-bold mb-7 md:text-3xl">
            Customized solutions tailored to your project’s unique scope and
            timeline.
          </h1>
          <div className="w-[20%] h-[.5vh] bg-amber-300 rounded-lg mb-7"></div>
          <p className="text-[14px] pb-4">
            From feasibility to final delivery, we simplify complex challenges
            with tailored EPC services. Our team is dedicated to precision,
            transparency, and support at every stage. Get in touch today for a
            quote that aligns with your project goals, budget, and execution
            timeline.
          </p>

          <p className="text-[14px]">
            We prioritize your success with expertise you can count on. Every
            quote reflects our commitment to quality, safety, and reliability in
            marine engineering.
          </p>
        </div>

        <div
          id="quote-form"
          className="w-[100%] h-full md:w-[80%] md:ml-20 lg:w-[50%] flex items-center flex-col pt-[80px]"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
