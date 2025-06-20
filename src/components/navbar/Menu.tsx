import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import { MenuIcon, XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useMenu } from "../../contexts/MenuContext";

function NavbarMenu() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div className="flex flex-grow justify-center gap-x-2">
      <NavLink
        to={WebsiteLinks.Progetti}
        className="group relative hidden px-3 py-1 text-lg md:block"
      >
        <div className="bg-custom-white absolute bottom-0 left-0 h-0.5 w-0 duration-300 group-hover:w-full" />
        Progetti
      </NavLink>
      <NavLink
        to={WebsiteLinks.Skills}
        className="group relative hidden px-3 py-1 text-lg md:block"
      >
        <div className="bg-custom-white absolute bottom-0 left-0 h-0.5 w-0 duration-300 group-hover:w-full" />
        Skills
      </NavLink>
      <NavLink
        to={WebsiteLinks.Myself}
        className="group relative hidden px-3 py-1 text-lg md:block"
      >
        <div className="bg-custom-white absolute bottom-0 left-0 h-0.5 w-0 duration-300 group-hover:w-full" />
        Myself
      </NavLink>
      <button
        onClick={() => toggleMenu()}
        className="relative ml-auto block h-8 w-8 cursor-pointer md:hidden"
      >
        <MenuIcon
          className={twMerge(
            "ease-exp-curve absolute top-0 left-0 h-8 w-8 duration-200",
            isMenuOpen ? "opacity-0" : "opacity-100",
          )}
        />
        <XIcon
          className={twMerge(
            "ease-exp-curve absolute top-0 left-0 h-8 w-8 duration-200",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
        />
      </button>
    </div>
  );
}
export default NavbarMenu;
