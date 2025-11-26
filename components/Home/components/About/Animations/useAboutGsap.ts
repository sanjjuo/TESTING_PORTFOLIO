import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const useAboutGsap = () => {
  const sectionRef = React.useRef(null);
  const largeTextRef = React.useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        scrub: true,
      },
    });
    tl.fromTo(
      largeTextRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: "expo.out" }
    );
  }, []);
  return { sectionRef, largeTextRef };
};
