"use client";
import { About } from "@/components/Home/components/About/About";
import { Hero } from "@/components/Home/components/Hero/Hero";
import { Marquee } from "@/components/Home/components/Marquee/Marquee";
import { Services } from "@/components/Home/components/Services/Services";
import { LetsWork } from "@/components/common/LetsWork/LetsWork";
import { Projects } from "@/components/common/Projects/Projects";
import { useHomeGsap } from "./Animations/useHomeGsap";
export const Home = () => {
  const { heroRef, othersRef } = useHomeGsap();

  return (
    <main>
      {/* <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
      /> */}
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
