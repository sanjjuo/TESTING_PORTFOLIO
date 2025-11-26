import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "../NavLinks/NavLinks";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetHeader>
        <SheetTitle hidden />
        <SheetDescription hidden />
      </SheetHeader>
      <SheetTrigger>Menu</SheetTrigger>
      <SheetContent className="w-[90%] pt-20">
        <SheetHeader />
        <NavLinks type="sidebar" />
      </SheetContent>
    </Sheet>
  );
};
