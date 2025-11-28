import gsap from "gsap";
import React from "react";

export const useServicesGsap = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const serviceElems = section.querySelectorAll(".services-items");

    //title animation and services animation
    tl.fromTo(
      heading,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: "expo.out", duration: 1 }
    ).fromTo(
      serviceElems,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "expo.out", duration: 0.7, stagger: 0.3 },
      "-=0.5"
    );
  }, []);
  return { sectionRef, headingRef };
};
