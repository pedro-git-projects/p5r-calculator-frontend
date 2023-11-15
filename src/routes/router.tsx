import { createBrowserRouter } from "react-router-dom";
import CompendiumScreen from "./Compendium";
import PersonaDetailsScreen from "./PersonaDetailsScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CompendiumScreen />,
  },
  {
      path: "/persona-details/:name",
      element: <PersonaDetailsScreen />
  }
]);

export default router;
