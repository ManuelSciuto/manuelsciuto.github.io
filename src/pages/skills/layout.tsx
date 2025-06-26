import { Outlet } from "react-router";
import MobileMenu from "../../components/navbar/MobileMenu";
import Navbar from "../../components/navbar/Navbar";
import { MenuProvider } from "../../contexts/MenuContext";

function SkillsLayout() {
  return (
    <MenuProvider>
      <Navbar />
      <MobileMenu />
      <Outlet />
    </MenuProvider>
  );
}

export default SkillsLayout;
