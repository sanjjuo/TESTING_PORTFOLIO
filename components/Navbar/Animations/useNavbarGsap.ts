import React from "react";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useNavbarGsap = () => {
  const navbarRef = React.useRef(null);
  const pathName = usePathname();

  useGSAP(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -100",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      navbar,
      {
        backgroundColor: "transparent",
        y: 0,
        scaleX: 1,
        transformOrigin: "center center",
      },
      {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        y: 20,
        scaleX: 0.98,
        borderRadius: 20,
        duration: 0.8,
        backdropFilter: "blur(10px)",
        ease: "expo.inOut",
      }
    );
  }, []);

  return { pathName, navbarRef };
};
