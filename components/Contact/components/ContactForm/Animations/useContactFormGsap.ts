import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactFormGsap = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const inputItems = gsap.utils.toArray(".form-input, .form-btn");

      gsap.fromTo(
        inputItems,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return { sectionRef };
};
