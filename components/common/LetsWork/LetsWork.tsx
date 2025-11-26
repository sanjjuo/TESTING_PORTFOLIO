"use client";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import React from "react";

export const LetsWork = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const descTextRef = React.useRef<HTMLParagraphElement | null>(null);
  const btnRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!descTextRef.current || !btnRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
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

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center overflow-hidden"
    >
      <div className="relative">
        <h1
          style={{ fontFamily: "humane" }}
          className="flex items-center justify-center h-full text-[180px] lg:text-[350px] uppercase font-bold opacity-5"
        >
          let&apos;s work
        </h1>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
          <p
            ref={descTextRef}
            className="text-lg lg:text-2xl max-w-xl text-center"
          >
            What do you think about embarking on a remarkable journey of
            creation together? WANT TO DISCUSS A NEW PROJECT?
          </p>

          <div ref={btnRef}>
            <Button className="text-2xl p-7 uppercase rounded-3xl bg-white text-black hover:bg-white/70">
              contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
