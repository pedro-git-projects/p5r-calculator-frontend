import { createBrowserRouter } from "react-router-dom";
import CompendiumScreen from "./Compendium";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CompendiumScreen />,
  },
]);

export default router;
