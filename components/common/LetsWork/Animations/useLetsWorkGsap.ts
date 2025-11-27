import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLetsWorkGsap = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const descTextRef = React.useRef<HTMLParagraphElement | null>(null);
  const btnRef = React.useRef<HTMLAnchorElement | null>(null);

  React.useEffect(() => {
    if (!descTextRef.current || !btnRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "80% 80%",
        // toggleActions: "play none none none",
      },
    });

    tl.from(descTextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    }).from(
      btnRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.5"
    );
  }, []);

  return { sectionRef, descTextRef, btnRef };
};
