import { createBrowserRouter } from "react-router-dom";
import CompendiumScreen from "./Compendium";
import PersonaDetailsScreen from "./PersonaDetailsScreen";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CompendiumScreen />,
  },
  {
    path: "/persona-details/:name",
    element: <PersonaDetailsScreen />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
