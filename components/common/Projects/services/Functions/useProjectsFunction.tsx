import { usePathname } from "next/navigation";
import { workData } from "../../data";

export const useProjectsFunction = ({ category }: { category: string }) => {
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
  return { isTitle, itemsToShow };
};
