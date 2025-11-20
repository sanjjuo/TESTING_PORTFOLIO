import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navLinks } from "../data";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>Menu</SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader />
        <div>
          <ul>
            {navLinks.map((data) => (
              <Link key={data.id} href={data.href}>
                <li className="uppercase text-8xl font-bold">{data.link}</li>
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
