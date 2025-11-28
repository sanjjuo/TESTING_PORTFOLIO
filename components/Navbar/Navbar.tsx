"use client";
import { useNavbarGsap } from "./Animations/useNavbarGsap";
import { NavLinks } from "./components/NavLinks/NavLinks";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const Navbar = () => {
  const { navbarRef } = useNavbarGsap();
  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 w-full z-40 py-5 px-5 lg:px-12"
    >
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Mohamed Sanjeed</h5>
          <p className="text-sm text-muted-foreground">@Dubai UAE</p>
        </div>
        <div className="hidden lg:block">
          <NavLinks type="navbar" />
        </div>
        <div className="block lg:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
