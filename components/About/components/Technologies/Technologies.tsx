"use client";
import Link from "next/link";
import { technologiesData } from "./data";
import { useTechnologyGsap } from "./Animations/useTechnologyGsap";

export const Technologies = () => {
  const { headingRef, sectionRef } = useTechnologyGsap();

  return (
    <section ref={sectionRef} className="py-20">
      <h1
        ref={headingRef}
        className="text-6xl lg:text-9xl font-bold text-center"
        style={{ fontFamily: "var(--font-humane)" }}
      >
        Technologies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-16">
        {technologiesData.map((data) => (
          <Link
            href={data.href}
            key={data.id}
            className="technology flex flex-col items-center justify-center space-y-3 cursor-pointer"
          >
            <data.icon className="w-20 h-20 lg:w-28 lg:h-28" />
            <p className="text-lg font-medium">{data.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
