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
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      descTextRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
      }
    );
    tl.fromTo(
      btnRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
      }
    );
  }, []);

  return { sectionRef, descTextRef, btnRef };
};
