import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutMeGsap = () => {
  const p1Ref = React.useRef<HTMLParagraphElement | null>(null);
  const p2Ref = React.useRef<HTMLParagraphElement | null>(null);
  const p3Ref = React.useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      p1Ref.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 1.4,
        scrollTrigger: {
          trigger: p1Ref.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      p2Ref.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 1.4,
        scrollTrigger: {
          trigger: p2Ref.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      p3Ref.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 1.4,
        scrollTrigger: {
          trigger: p3Ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return { p1Ref, p2Ref, p3Ref };
};
