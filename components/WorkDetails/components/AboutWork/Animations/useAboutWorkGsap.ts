import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const useAboutWorkgsap = () => {
  const sectionRef = React.useRef(null);
  const subTitleRef = React.useRef<HTMLHeadingElement | null>(null);
  const paraRef = React.useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      const subTitle = subTitleRef.current;
      const para = paraRef.current;

      if (!subTitle || !para) return;

      // Subtitle animation
      gsap.fromTo(
        subTitle,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "expo.out",
          duration: 2.5,
        }
      );

      // Paragraph split animation
      const split = new SplitText(para, { type: "chars, lines" });

      gsap.fromTo(
        split.lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 2,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return { sectionRef, subTitleRef, paraRef };
};
