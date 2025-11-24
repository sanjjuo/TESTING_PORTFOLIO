import { Hero } from "@/components/Home/components/Hero/Hero";
import { Marquee } from "@/components/Home/components/Marquee/Marquee";
import { Services } from "@/components/Home/components/Services/Services";
import { About } from "@/components/Home/components/About/About";
import { LetsWork } from "@/components/common/LetsWork/LetsWork";
import { Projects } from "@/components/common/Projects/Projects";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div>
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
    </div>
  );
};
