import { workData } from "@/components/common/Projects/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export const useListWorkGsap = (category: string) => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const filteredData =
    category === "all"
      ? workData
      : workData.filter((item) => item.category === category);

  useGSAP(
    () => {
      const works = gsap.utils.toArray(".works") as HTMLElement[];

      gsap.fromTo(
        works,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [filteredData] } // IMPORTANT
  );

  return { filteredData, sectionRef };
};
