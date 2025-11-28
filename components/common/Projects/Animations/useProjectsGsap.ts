import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useProjectsGsap = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    // Animate heading
    gsap.fromTo(
      heading,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each project card individually
    const projects = section.querySelectorAll(".projects");
    projects.forEach((project) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return { sectionRef, headingRef };
};
