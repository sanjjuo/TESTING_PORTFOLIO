"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";
import { Sidebar } from "./Sidebar/Sidebar";

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="sticky top-0 w-full z-50 py-5 px-5 lg:px-12 bg-black">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Mohamed Sanjeed</h5>
          <p className="text-sm text-muted-foreground">@Dubai UAE</p>
        </div>
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((data) => (
            <Link
              key={data.id}
              href={data.href}
              className={cn(
                pathName === data.href &&
                  "bg-white text-black px-4 py-1 rounded-3xl",
                "navlinks transform transition ease-in duration-300 px-4 py-1 rounded-3xl"
              )}
            >
              <li className="uppercase">{data.link}</li>
            </Link>
          ))}
        </ul>
        <div className="block lg:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
