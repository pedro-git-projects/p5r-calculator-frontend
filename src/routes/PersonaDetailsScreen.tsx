import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailedPersona from "../types/detailed/DetailedPersona";
import Recipe from "../types/recipes/Recipe";
import TakeYourTime from "../components/TakeYourTime";
import DetailedPersonaTable from "../components/DetaliedPersonaTable";

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
          {detailedPersona !== undefined && (
            <DetailedPersonaTable persona={detailedPersona} />
          )}
          <div>Data from route 1: {detailedPersona?.name}</div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Cost</th>
                  <th>Result Name</th>
                  <th>Source Names</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe, index) => (
                  <tr key={index}>
                    <td>{recipe.cost}</td>
                    <td>{recipe.result.name}</td>
                    <td>
                      {recipe.sources?.map(source => source.name).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default PersonaDetailsScreen;
