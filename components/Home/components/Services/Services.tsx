"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { services } from "./data";

export const Services = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      heading,
      { scaleY: 0, opacity: 0, transformOrigin: "bottom center" },
      { scaleY: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
    ).fromTo(
      ".services",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.2,
      }
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
          <div key={data.id} className="services overflow-hidden">
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
