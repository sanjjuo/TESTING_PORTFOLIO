"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col justify-end space-y-6 h-screen bg-black m-0 py-10 lg:py-20 px-5 lg:px-12"
    >
      <h1 className="uppercase text-lg lg:text-3xl z-0">
        Welcome on my portfolio
      </h1>
      <h2 className="hero_h1 z-0">
        Frontend &<br /> Web Developer
      </h2>
    </section>
  );
};
