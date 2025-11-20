import { Hero } from "@/components/Home/Hero/Hero";
import { Marquee } from "@/components/Home/Marquee/Marquee";
import { Services } from "@/components/Home/Services/Services";
import { About } from "@/components/Home/About/About";
import { LetsWork } from "@/components/common/LetsWork/LetsWork";
import { Projects } from "@/components/common/Projects/Projects";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div id="other-sections">
        <Services />
        <Projects category="" />
        <Marquee />
        <About />
        <LetsWork />
      </div>
    </div>
  );
};
