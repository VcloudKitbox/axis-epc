// import Header from "@/components/Header";

import GetAQuote from "@/components/GetAQuote";
import GetNtouch from "@/components/GetNtouch";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CarouselSize from "@/components/Testimonial";
import Whyus from "@/components/Whyus";




export default function Home() {
  return (
    <div>
      <Hero />
      <GetAQuote />
      <Services />
      <Projects />
      <Whyus />
      <CarouselSize />
      <GetNtouch />
    </div>
  );
}
