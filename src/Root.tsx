import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar.tsx";
import MobileMenu from "./components/navbar/MobileMenu.tsx";
import { MenuProvider } from "./contexts/MenuContext.tsx";

export default function RootLayout() {
  return (
    <MenuProvider>
      <Navbar />
      <MobileMenu />
      <Outlet />
    </MenuProvider>
  );
}
