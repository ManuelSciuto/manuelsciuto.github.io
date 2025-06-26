import { NavLink } from "react-router";
import { WebsiteLinks } from "../../utils/WebsiteLinks";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import NavbarMenu from "./Menu";

function FixedNavbar() {
  return (
    <div className="bg-custom-black border-custom-gray fixed top-3 left-3 z-40 flex h-16 w-[calc(100%-1.5rem)] items-center gap-x-4 rounded-full border-4 px-2">
      <NavLink to={WebsiteLinks.Home} className="ml-2 text-2xl font-bold">
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
export default FixedNavbar;
