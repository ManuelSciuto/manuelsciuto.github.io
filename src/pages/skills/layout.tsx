import { NavLink, Outlet } from "react-router";
import MobileMenu from "../../components/navbar/MobileMenu";
import Navbar from "../../components/navbar/Navbar";
import { MenuProvider } from "../../contexts/MenuContext";
import { twMerge } from "tailwind-merge";
import { HomeIcon } from "lucide-react";

function SkillsLayout() {
  return (
    <MenuProvider>
      <Navbar />
      <MobileMenu />
      <div className="pt-8">
        <div className="border-custom-gray flex h-16 border-y">
          <NavLink
            to={"/skills"}
            end
            className={({ isActive }) =>
              twMerge(
                "hover:bg-custom-white hover:text-custom-black flex h-[calc(4rem-2px)] items-center justify-center overflow-hidden duration-300",
                isActive ? "w-0" : "border-custom-gray w-16 border-r",
              )
            }
          >
            <HomeIcon className="h-10 w-10" />
          </NavLink>
          <NavLink
            to={"/skills/languages"}
            className={({ isActive }) =>
              twMerge(
                "hover:bg-custom-white hover:text-custom-black border-custom-gray flex grow items-center justify-center border-r text-xl font-semibold duration-300",
                isActive &&
                  "bg-custom-white text-custom-black inset-shadow-custom-black inset-shadow-md",
              )
            }
          >
            Languages
          </NavLink>
          <NavLink
            to={"/skills/devops"}
            className={({ isActive }) =>
              twMerge(
                "hover:bg-custom-white hover:text-custom-black border-custom-gray flex grow items-center justify-center border-r text-xl font-semibold duration-300",
                isActive &&
                  "bg-custom-white text-custom-black inset-shadow-custom-black inset-shadow-md",
              )
            }
          >
            Devops
          </NavLink>
        </div>
        <Outlet />
      </div>
    </MenuProvider>
  );
}

export default SkillsLayout;
