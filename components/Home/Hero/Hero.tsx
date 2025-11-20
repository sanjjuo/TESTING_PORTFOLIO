"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col justify-end space-y-6 h-screen z-0 bg-black -mt-[40px]"
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
