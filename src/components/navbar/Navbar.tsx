import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import NavbarMenu from "./Menu";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

function Navbar() {
  return (
    <div className="flex h-14 w-full items-center gap-x-4 px-3">
      <NavLink to={WebsiteLinks.Home} className="text-2xl font-bold">
        Manuel
      </NavLink>
      <NavbarMenu />
      <NavLink to={WebsiteLinks.Contattami}>
        <InteractiveHoverButton className="text-custom-white bg-transparent">
          Contattami
        </InteractiveHoverButton>
      </NavLink>
    </div>
  );
}
export default Navbar;
