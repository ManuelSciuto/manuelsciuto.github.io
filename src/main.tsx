import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home.tsx";
import RootLayout from "./Root.tsx";
import { WebsiteLinks } from "./utils/WebsiteLinks.ts";
import ProgettiPage from "./pages/Progetti.tsx";
import MyselfPage from "./pages/Myself.tsx";
import SkillsLayout from "./pages/skills/layout.tsx";
import SkillsDevopsPage from "./pages/skills/Devops.tsx";
import SkillsIndexPage from "./pages/skills/index.tsx";
import SkillsLanguagesPage from "./pages/skills/Languages.tsx";

const router = createBrowserRouter([
  {
    path: WebsiteLinks.Home,
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: WebsiteLinks.Progetti,
    element: <RootLayout />,
    children: [{ index: true, element: <ProgettiPage /> }],
  },
  {
    path: WebsiteLinks.Myself,
    element: <RootLayout />,
    children: [{ index: true, element: <MyselfPage /> }],
  },
  {
    path: WebsiteLinks.Skills,
    element: <SkillsLayout />,
    children: [
      { index: true, element: <SkillsIndexPage /> },
      { path: "languages", element: <SkillsLanguagesPage /> },
      { path: "devops", element: <SkillsDevopsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
