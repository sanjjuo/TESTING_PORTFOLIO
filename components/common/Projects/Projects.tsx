"use client";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useProjectsFunction } from "./Functions/useProjectsFunction";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Projects = ({ category }: { category: string }) => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const projectRef = React.useRef<(HTMLElement | null)[]>([]);

  const { isTitle, itemsToShow } = useProjectsFunction({ category });

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 80%",
      },
    });
    //title animation
    tl.fromTo(
      heading,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "expo.out",
      }
    );
    // PROJECT CARDS ANIMATION
    tl.from(projectRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.5,
      ease: "power2.out",
    });
  }, []);
  return (
    <section ref={sectionRef} className={cn(isTitle && "px-0 py-10")}>
      <h1 ref={headingRef} className={cn(isTitle && "hidden", "text-heading")}>
        Selected work
      </h1>
      <div className="border grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-32 lg:py-20 p-5">
        {itemsToShow.map((data, index) => {
          // Full width for 1st and 4th items → index 0 and index 3
          const isFull = index % 3 === 0;
          return (
            <div
              ref={(item) => {
                projectRef.current[index] = item;
              }}
              key={data.id}
              className={cn(
                isFull ? "lg:col-span-2" : "lg:col-span-1",
                "space-y-3 projects"
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="uppercase text-xl">{data.name}</h2>
                <ArrowUp className="rotate-45" />
              </div>

              <div
                className={cn(
                  "relative w-full transition transform ease-in-out duration-500 hover:scale-95",
                  isFull ? "h-[200px] lg:h-[700px]" : "h-[200px] lg:h-[500px]"
                )}
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="flex items-end justify-end">
                <span className="text-muted-foreground font-bold mr-2">
                  Completed
                </span>
                {data.completed}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
