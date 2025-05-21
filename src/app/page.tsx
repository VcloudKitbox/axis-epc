// import Header from "@/components/Header";

import GetAQuote from "@/components/GetAQuote";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";




export default function Home() {
  return (
    <div>
      <Hero />
      <GetAQuote />
      <Services />
      <Projects />
      <Whyus />
    </div>
  );
}
