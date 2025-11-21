"use client";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { AboutMe } from "../AboutMe/AboutMe";
import { ProfileInfo } from "../ProfileInfo/ProfileInfo";

export const ProfileHero = () => {
  const imageRef = React.useRef(null);
  const [MousePosition, setMousePosition] = React.useState({
    left: 0,
    top: 0,
  });
  function handleMouseMove(ev: React.MouseEvent<HTMLDivElement>) {
    setMousePosition({ left: ev.pageX, top: ev.pageY });
  }

  React.useEffect(() => {
    if (!imageRef.current) return;

    const el = imageRef.current as HTMLElement;
    const container = el.parentElement as HTMLElement | null;

    // give the container some perspective for the 3D transform
    if (container) {
      container.style.perspective = "1200px";
    }
    el.style.transformStyle = "preserve-3d";

    const maxOffset = 10;
    const maxRotation = 12; // degrees
    const maxSkew = 6; // degrees

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const normX = MousePosition.left / windowWidth - 0.5;
    const normY = MousePosition.top / windowHeight - 0.5;

    const offsetX = normX * maxOffset;
    const offsetY = normY * maxOffset;

    const rotY = -normX * maxRotation;
    const rotX = normY * maxRotation;
    const skewX = -normX * maxSkew;
    const skewY = normY * maxSkew;

    gsap.to(el, {
      x: -offsetX,
      y: -offsetY,
      rotationX: rotX,
      rotationY: rotY,
      skewX: skewX,
      skewY: skewY,
      transformOrigin: "50% 50%",
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
    });
  }, [MousePosition]);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div className="flex flex-col items-start space-y-10 lg:space-y-20">
        <h1 className="hero_h1">mohamed sanjeed</h1>
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
