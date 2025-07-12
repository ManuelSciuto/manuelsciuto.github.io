import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import NavbarMenu from "./Menu";

function Navbar() {
  return (
    <div className="z-40 flex h-14 w-full items-center gap-x-4 px-3 lg:justify-between">
      <NavLink to={WebsiteLinks.Home} className="text-2xl font-bold">
        Manuel R. Sciuto
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
export default Navbar;
