import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

export const useHeroGsap = () => {
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

  return { largeTextRef, smallTextRef };
};
