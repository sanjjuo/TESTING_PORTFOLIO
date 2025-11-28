import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const useProfileInfoGsap = () => {
  const profileRef = React.useRef<HTMLUListElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      profileRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
        duration: 2,
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);
  return { profileRef };
};
