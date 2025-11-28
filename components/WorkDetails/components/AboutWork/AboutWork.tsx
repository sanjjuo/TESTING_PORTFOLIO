"use client";
import { useAboutWorkgsap } from "./Animations/useAboutWorkGsap";

export const AboutWork = ({
  subdesc,
  description,
}: {
  subdesc: string;
  description: string;
}) => {
  const { sectionRef, paraRef, subTitleRef } = useAboutWorkgsap();
  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-between space-y-5 h-full"
    >
      <h4 ref={subTitleRef} className="uppercase text-xl">
        {subdesc}
      </h4>
      <p ref={paraRef} className="text-base">
        {description}
      </p>
    </div>
  );
};
