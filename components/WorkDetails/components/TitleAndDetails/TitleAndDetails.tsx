import Link from "next/link";
import { GoBack } from "../GoBack/GoBack";

interface titleAndDetailsProps {
  title: string;
  category: string;
  technologies: string[];
  completed: string;
  view: string;
}
export const TitleAndDetails = ({
  title,
  category,
  technologies,
  completed,
  view,
}: titleAndDetailsProps) => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col items-start space-y-10">
        <GoBack />
        <h1
          style={{ fontFamily: "var(--font-humane)" }}
          className="uppercase font-bold leading-[120px] lg:leading-[110px] break-words whitespace-normal text-[150px] lg:text-9xl"
        >
          {title}
        </h1>
      </div>
      <div className="flex flex-col space-y-10">
        <ul className="flex flex-row lg:flex-col items-center lg:items-start lg:space-y-5 space-x-5 lg:space-x-0">
          <li className="flex flex-col font-semibold capitalize text-lg">
            <span className="text-muted-foreground text-sm">Completed</span>
            {completed}
          </li>
          <li className="flex flex-col font-semibold capitalize text-lg">
            <span className="text-muted-foreground text-sm">Category</span>
            {category}
          </li>
          <li className="flex flex-col font-semibold capitalize text-lg">
            <span className="text-muted-foreground text-sm">Technologies</span>
            {technologies.join(" / ")}
          </li>
        </ul>
        <Link
          href={view}
          className="uppercase underline underline-offset-2 font-semibold text-base"
        >
          visit project
        </Link>
      </div>
    </div>
  );
};
