import { LetsWork } from "../common/LetsWork/LetsWork";
import { ProfileHero } from "./components/ProfileHero/ProfileHero";
import { Technologies } from "./components/Technologies/Technologies";

export const About = () => {
  return (
    <div className="app_width mt-20 lg:mt-10">
      <ProfileHero />
      <Technologies />
      <LetsWork />
    </div>
  );
};
