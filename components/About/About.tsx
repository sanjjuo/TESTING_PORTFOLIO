import { LetsWork } from "../common/LetsWork/LetsWork";
import { ProfileHero } from "./components/ProfileHero/ProfileHero";
import { Technologies } from "./components/Technologies/Technologies";

export const About = () => {
  return (
    <section className="app_width">
      <div className="py-20 lg:py-10">
        <ProfileHero />
        <Technologies />
        <LetsWork />
      </div>
    </section>
  );
};
