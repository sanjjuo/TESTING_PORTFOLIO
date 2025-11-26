import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useWorkDetailsGsap = () => {
  const sectionRef = React.useRef(null);
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const imagesRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
      },
    });
    tl.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        pin: true,
        scrub: true,
      },
    });
    tl.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        pin: true,
        scrub: true,
      },
    });
  }, []);
  return { sectionRef, leftRef, rightRef, imagesRef };
};
