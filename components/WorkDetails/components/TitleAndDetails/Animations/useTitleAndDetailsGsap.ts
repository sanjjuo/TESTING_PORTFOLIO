import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

export const useTitleAndDetailsGsap = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const largeTextRef = React.useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!sectionRef.current || !largeTextRef.current) return;

      // large text animation
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

      //list details animation
      const listDetails = section?.querySelectorAll(".detail-list");
      if (listDetails) {
        gsap.fromTo(
          listDetails,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: "expo.out", duration: 1.5, stagger: 0.3 }
        );
      }
    },
    { scope: largeTextRef }
  );
  return { sectionRef, largeTextRef };
};
