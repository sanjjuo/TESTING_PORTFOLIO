"use client";

import { useHeadingsGsap } from "./Animations/useHeadingsGsap";

export const Headings = () => {
  const { largeTextRef } = useHeadingsGsap();
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between">
      <h1 ref={largeTextRef} className="hero_h1">
        get in touch
      </h1>
      <p className="text-2xl font-bold">THANK &apos;S FOR YOUT VISIT</p>
    </section>
  );
};
