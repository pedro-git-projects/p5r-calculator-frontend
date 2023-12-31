import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailedPersona from "../types/detailed/DetailedPersona";
import Recipe from "../types/recipes/Recipe";
import "../styles/details.css";
import TakeYourTime from "../components/utils/TakeYourTime";
import Navbar from "../components/utils/Navbar";
import DetailedPersonaTable from "../components/details/DetaliedPersonaTable";
import RecipeTable from "../components/details/RecipesTable";

const PersonaDetailsScreen: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [detailedPersona, setDetailedPersona] = useState<DetailedPersona>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [persona, recipes] = await Promise.all([
          axios.get(`http://127.0.0.1:5000/personas/detailed/${name}`),
          axios.get(`http://127.0.0.1:5000/calculator/reverse/${name}`),
        ]);
        setDetailedPersona(persona.data);
        setRecipes(recipes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  return (
    <>
      {loading ? (
        <TakeYourTime />
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="mb-10 overflow-y-auto">
            <Navbar />
          </div>
          <div className="text-center font-bold text-2xl text-white overflow-y-auto">
            {name}
          </div>
          {detailedPersona !== undefined && (
            <>
              <div className="my-4 overflow-y-auto">
                <DetailedPersonaTable persona={detailedPersona} />
              </div>
              <div className="my-4">
                <RecipeTable recipes={recipes} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PersonaDetailsScreen;
