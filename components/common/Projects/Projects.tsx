"use client";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { workData } from "./data";

export const Projects = ({ category }: { category: string }) => {
  const pathname = usePathname();

  //for showing heading or not
  const isTitle = pathname === "/work";

  //filter items by category
  const filteredData =
    category === "all"
      ? workData
      : workData.filter((item) => item.category === category);

  //how many items show in both home and work pages
  const itemsToShow = pathname === "/" ? workData.slice(0, 3) : filteredData;

  return (
    <section className={cn(isTitle && "px-0 py-10")}>
      <h1 className={cn(isTitle && "hidden", "text-heading")}>Selected work</h1>
      <div className="border grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-32 lg:py-20 p-5">
        {itemsToShow.map((data, index) => {
          // Full width for 1st and 4th items → index 0 and index 3
          const isFull = index % 3 === 0;
          return (
            <div
              key={data.id}
              className={cn(
                isFull ? "lg:col-span-2" : "lg:col-span-1",
                "space-y-3"
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="uppercase text-xl">{data.name}</h2>
                <ArrowUp className="rotate-45" />
              </div>

              <div
                className={cn(
                  "relative w-full",
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
