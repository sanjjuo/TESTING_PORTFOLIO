import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "../NavLinks/NavLinks";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>Menu</SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader />
        <NavLinks type="sidebar" />
      </SheetContent>
    </Sheet>
  );
};
