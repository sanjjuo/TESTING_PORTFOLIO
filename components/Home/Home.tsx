"use client";
import { About } from "@/components/Home/components/About/About";
import { Hero } from "@/components/Home/components/Hero/Hero";
import { Marquee } from "@/components/Home/components/Marquee/Marquee";
import { Services } from "@/components/Home/components/Services/Services";
import { LetsWork } from "@/components/common/LetsWork/LetsWork";
import { Projects } from "@/components/common/Projects/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const othersRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!heroRef.current || !othersRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      othersRef.current,
      {
        y: 0,
      },
      {
        y: -10,
        ease: "power1.inOut",
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <main>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={othersRef} className="bg-background">
        <div className="app_width">
          <Services />
          <Projects category="" />
        </div>
        <Marquee />
        <div className="app_width">
          <About />
          <LetsWork />
        </div>
      </div>
    </main>
  );
};
