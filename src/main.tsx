import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home.tsx";
import RootLayout from "./Root.tsx";
import { WebsiteLinks } from "./utils/WebsiteLinks.ts";
import ProgettiPage from "./pages/Progetti.tsx";

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
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
