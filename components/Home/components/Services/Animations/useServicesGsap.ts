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

    //title animation
    tl.fromTo(
      heading,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, ease: "expo.out", duration: 1 }
    );

    const serviceElems = section.querySelectorAll(".services-items");
    tl.fromTo(
      serviceElems,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: "expo.out", duration: 1.5, stagger: 0.3 }
    );
  }, []);
  return { sectionRef, headingRef };
};
