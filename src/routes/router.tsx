import { createBrowserRouter } from "react-router-dom";
import CompendiumScreen from "./Compendium";
import PersonaDetailsScreen from "./PersonaDetailsScreen";
import NotFound from "./NotFound";
import SkillListScreen from "./SkillList";
import RecipeCalculator from "./RecipeCalculator";

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
    path: "skill-list",
    element: <SkillListScreen />,
  },
  {
    path: "recipe-calculator",
    element: <RecipeCalculator />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
