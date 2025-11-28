"use client";
import Image from "next/image";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo";
import { useProfileHeroFunction } from "./Functions/useProfileHeroFunction";
import { useProfileHeroGsap } from "./Animations/useProfileHeroGsap";

export const ProfileHero = () => {
  const { handleMouseMove, imageRef } = useProfileHeroFunction();
  const { largeTextRef } = useProfileHeroGsap();
  return (
    <section
      onMouseMove={handleMouseMove}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div className="flex flex-col items-start space-y-10 lg:space-y-20">
        <h1 ref={largeTextRef} className="hero_h1">
          mohamed sanjeed
        </h1>
        <ProfileInfo />
        <AboutMe />
      </div>
      <div className="hidden lg:block relative w-full max-w-[600px] h-[850px] mx-auto overflow-hidden">
        <Image
          ref={imageRef}
          src="/PNG/me.png"
          alt="my-image"
          fill
          quality={100}
          priority
          className="object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
