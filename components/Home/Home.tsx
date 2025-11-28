"use client";
import { AboutImage } from "@/components/Home/components/AboutImage/About";
import { Hero } from "@/components/Home/components/Hero/Hero";
import { Marquee } from "@/components/Home/components/Marquee/Marquee";
import { Services } from "@/components/Home/components/Services/Services";
import { LetsWork } from "@/components/common/LetsWork/LetsWork";
import { Projects } from "@/components/common/Projects/Projects";
import { useHomeGsap } from "./Animations/useHomeGsap";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  const { heroRef, othersRef } = useHomeGsap();
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
          <AboutImage />
          <LetsWork />
          <Footer />
        </div>
      </div>
    </main>
  );
};
