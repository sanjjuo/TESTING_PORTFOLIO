import { workData } from "@/components/common/Projects/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export const useListWorkGsap = (category: string) => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const filteredData =
    category === "all"
      ? workData
      : workData.filter((item) => item.category === category);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          toggleActions: "play none none none",
        },
      });

      const works = gsap.utils.toArray(".works");

      tl.fromTo(
        works,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: "expo.out",
        }
      );
    },
    { dependencies: [filteredData] } // IMPORTANT
  );

  return { filteredData, sectionRef };
};
