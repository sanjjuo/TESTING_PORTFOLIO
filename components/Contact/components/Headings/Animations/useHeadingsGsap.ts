import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

export const useHeadingsGsap = () => {
  const largeTextRef = React.useRef<HTMLHeadingElement | null>(null);
  useGSAP(
    () => {
      if (!largeTextRef.current) return;
      //large text animations
      const largeTextSplit = new SplitText(largeTextRef.current, {
        type: "chars, words",
      });

      gsap.fromTo(
        largeTextSplit.chars,
        {
          opacity: 0,
          scaleX: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 2,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    },
    { scope: largeTextRef }
  );

  return { largeTextRef };
};
