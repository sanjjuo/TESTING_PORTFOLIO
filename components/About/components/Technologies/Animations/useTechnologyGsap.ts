import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const useTechnologyGsap = () => {
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Icon animation (each item one by one)
      const items = gsap.utils.toArray(".technology") as HTMLElement[];

      gsap.from(items, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return { headingRef, sectionRef };
};
