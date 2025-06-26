import { twMerge } from "tailwind-merge";
import { useMenu } from "../../contexts/MenuContext";
import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import { XIcon } from "lucide-react";

function MobileMenu() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const slideInLeft =
    "motion-translate-x-in-[-100%] motion-delay-200 motion-translate-y-in-[0%] motion-duration-[0.50s]/translate motion-ease-out-cubic";
  const slideInRight =
    "motion-translate-x-in-[100%] motion-delay-200 motion-translate-y-in-[0%] motion-duration-[0.50s]/translate motion-ease-out-cubic";
  const navlinkClass =
    "flex h-16 items-center justify-center text-2xl font-bold hover:bg-custom-gray/15";

  return (
    <>
      <div
        className={twMerge(
          "bg-custom-white fixed top-0 z-40 h-[calc(100%+1px)] w-[calc(100%+1px)] duration-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] md:hidden",
          isMenuOpen ? "right-0" : "-right-full",
        )}
      />
      <button
        onClick={() => toggleMenu()}
        className={twMerge(
          "fixed top-3 z-50 cursor-pointer duration-500",
          isMenuOpen ? "right-3" : "-right-full",
        )}
      >
        <XIcon className="stroke-custom-black h-10 w-10" />
      </button>
      <div
        className={twMerge(
          "bg-custom-white fixed top-0 z-40 h-[calc(100%+1px)] w-[calc(100%+1px)] duration-300 [clip-path:polygon(0%_0%,0%_100%,100%_100%)] md:hidden",
          isMenuOpen ? "left-0" : "-left-full",
        )}
      />
      {isMenuOpen && (
        <div className="fixed z-40 flex h-full w-full items-center pb-16 md:hidden">
          <div className="text-custom-black flex h-60 w-full flex-col">
            <NavLink
              to={WebsiteLinks.Home}
              className={twMerge(slideInLeft, navlinkClass)}
            >
              Home
            </NavLink>
            <NavLink
              to={WebsiteLinks.Progetti}
              className={twMerge(slideInRight, navlinkClass)}
            >
              Progetti
            </NavLink>
            <NavLink
              to={WebsiteLinks.Skills}
              className={twMerge(slideInLeft, navlinkClass)}
            >
              Skills
            </NavLink>
            <NavLink
              to={WebsiteLinks.Myself}
              className={twMerge(slideInRight, navlinkClass)}
            >
              Myself
            </NavLink>
            <NavLink
              to={WebsiteLinks.Contattami}
              className={twMerge(slideInLeft, navlinkClass)}
            >
              Contattami
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
export default MobileMenu;
