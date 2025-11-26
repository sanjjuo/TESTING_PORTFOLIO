"use client";
import gsap from "gsap";
import React from "react";
import { services } from "./data";

export const Services = () => {
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

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20"
    >
      <h1 ref={headingRef} className="text-heading overflow-hidden">
        My Services
      </h1>

      <div className="flex-1 w-full space-y-10">
        {services.map((data) => (
          <div key={data.id} className="services-items overflow-hidden">
            <div>
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
