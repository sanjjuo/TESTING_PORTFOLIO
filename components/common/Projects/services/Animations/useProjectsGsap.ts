import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useProjectsGsap = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const projectRef = React.useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    //title animation
    tl.fromTo(
      heading,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 1,
      }
    );
    // PROJECT CARDS ANIMATION
    tl.from(projectRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.5,
      ease: "power2.out",
    });
  }, []);
  return { sectionRef, headingRef, projectRef };
};
