"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(SplitText, useGSAP);

export const Hero = () => {
  const largeTextRef = React.useRef<HTMLHeadingElement | null>(null);
  const smallTextRef = React.useRef<HTMLHeadingElement | null>(null);
  useGSAP(
    () => {
      if (!largeTextRef.current || !smallTextRef.current) return;

      //small text animation
      const smallTextSplit = new SplitText(smallTextRef.current, {
        type: "chars, words",
      });

      gsap.fromTo(
        smallTextSplit.chars,
        { opacity: 0, y: 1 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03 }
      );

      //large text animations
      const largeTextSplit = new SplitText(largeTextRef.current, {
        type: "chars, words",
      });

      gsap.fromTo(
        largeTextSplit.chars,
        {
          opacity: 0,
          scaleX: 0,
          duration: 1,
        },
        { scaleX: 1, opacity: 1, stagger: 0.05, ease: "power3.out" }
      );
    },
    { scope: largeTextRef }
  );

  return (
    <section className="flex flex-col justify-end space-y-6 h-screen bg-black m-0 py-10 lg:py-20 px-5 lg:px-12">
      <h1 ref={smallTextRef} className="uppercase text-lg lg:text-3xl z-0">
        Welcome on my portfolio
      </h1>

      <h2 ref={largeTextRef} className="hero_h1 z-0">
        Frontend &<br /> Web Developer
      </h2>
    </section>
  );
};
