import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import NavbarMenu from "./Menu";

function Navbar() {
  return (
    <div className="flex h-14 w-full items-center gap-x-4 px-3">
      <NavLink to={WebsiteLinks.Home} className="text-2xl font-bold">
        Manuel
      </NavLink>
      <NavbarMenu />
      <NavLink
        to={WebsiteLinks.Contattami}
        className="group relative flex h-10 items-center justify-center overflow-hidden rounded-full border px-4"
      >
        <p className="group-hover:text-custom-black z-10 text-lg font-semibold duration-200">
          Contattami
        </p>
        <div className="bg-custom-white absolute top-0 left-0 z-0 h-10 w-0 duration-200 group-hover:w-full" />
      </NavLink>
    </div>
  );
}
export default Navbar;
