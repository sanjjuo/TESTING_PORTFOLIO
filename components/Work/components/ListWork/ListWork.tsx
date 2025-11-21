import { workData } from "@/components/common/Projects/data";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export const ListWork = ({ category }: { category: string }) => {
  const filteredData =
    category === "all"
      ? workData
      : workData.filter((item) => item.category === category);
  return (
    <div>
      {filteredData.map((data, index) => (
        <Link
          href=""
          key={index}
          className="py-10 flex items-center justify-between border-b border-muted-foreground transition transform ease-in-out duration-500 hover:border-white"
        >
          <div className="space-y-3">
            <h1 className="uppercase text-2xl">{data.name}</h1>
            <p className="capitalize">{data.category}</p>
          </div>
          <div className="flex flex-col items-end space-y-3">
            <ArrowUp className="-rotate-45" />
            <p className="flex items-end justify-end">
              <span className="text-muted-foreground font-bold mr-2">
                Completed
              </span>
              {data.completed}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
