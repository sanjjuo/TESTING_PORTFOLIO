import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeGsap = () => {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const othersRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!heroRef.current || !othersRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      othersRef.current,
      {
        y: 0,
      },
      {
        y: -10,
        ease: "power1.inOut",
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return { heroRef, othersRef };
};
