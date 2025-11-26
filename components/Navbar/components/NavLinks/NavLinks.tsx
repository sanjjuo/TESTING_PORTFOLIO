import { cn } from "@/lib/utils";
import Link from "next/link";
import { useNavbarGsap } from "../../Animations/useNavbarGsap";
import { navLinks } from "../../data";

export const NavLinks = ({ type }: { type: string }) => {
  const { pathName } = useNavbarGsap();
  return (
    <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
      {navLinks.map((data) => (
        <Link
          key={data.id}
          href={data.href}
          className={cn(
            pathName === data.href &&
              "bg-white text-black rounded-3xl text-base",
            type === "navbar" ? "text-base px-4 py-1" : "text-8xl px-7 py-3",
            "navlinks transform transition ease-in duration-300 rounded-3xl"
          )}
        >
          <li className="uppercase">{data.link}</li>
        </Link>
      ))}
    </ul>
  );
};
