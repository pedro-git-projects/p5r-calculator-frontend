import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailedPersona from "../types/detailed/DetailedPersona";
import Recipe from "../types/recipes/Recipe";
import TakeYourTime from "../components/TakeYourTime";
import DetailedPersonaTable from "../components/DetaliedPersonaTable";
import RecipeTable from "../components/RecipesTable";
import "../styles/details.css";

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
        <>
          <div className="text-center font-bold text-2xl text-white">{name}</div>
          {detailedPersona !== undefined && (
            <>
              <div className="my-4">
              <DetailedPersonaTable persona={detailedPersona} />
              </div>
              <div className="my-4">
              <RecipeTable recipes={recipes} />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PersonaDetailsScreen;
