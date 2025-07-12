import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import NavbarMenu from "./Menu";

function FixedNavbar() {
  return (
    <div className="bg-custom-black border-custom-gray fixed top-3 left-3 z-40 flex h-16 w-[calc(100%-1.5rem)] items-center gap-x-4 rounded-full border-4 px-2">
      <NavLink to={WebsiteLinks.Home} className="ml-2 text-2xl font-bold">
        Manuel
      </NavLink>
      <NavbarMenu />
      <a
        href="/CV.pdf"
        download="CV Manuel Rosario Sciuto.pdf"
        className="bg-custom-red group relative cursor-pointer rounded-full p-2 px-6 font-semibold"
      >
        <span className="absolute top-0 left-0 h-full w-full bg-black opacity-0 duration-200 group-hover:opacity-10" />
        Get my CV
      </a>
    </div>
  );
}
export default FixedNavbar;
