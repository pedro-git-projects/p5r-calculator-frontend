import React from "react";
import Recipe from "../types/recipes/Recipe";
import { Link } from "react-router-dom";

interface RecipesTableProps {
  recipes: Array<Recipe>;
}

const RecipeTable: React.FC<RecipesTableProps> = ({ recipes }) => {
  const maxSourcesCount = Math.max(
    ...recipes.map(recipe => (recipe.sources ? recipe.sources.length : 0)),
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#0d0d0d] text-white">
        <thead>
          <tr>
            <th
              className="bg-[#732424] py-2 px-4"
              colSpan={maxSourcesCount * 3 + 1}
            >
              <h2 className="text-center text-xl font-bold">Recipes</h2>
            </th>
          </tr>
          <tr>
            <th className="py-2 px-4">Price</th>
            {Array.from({ length: maxSourcesCount }, (_, index) => (
              <React.Fragment key={index}>
                <th className="py-2 px-4 text-center">Arcana</th>
                <th className="py-2 px-4 text-center">Level</th>
                <th className="py-2 px-4 text-center">Name</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index} className="hover:bg-[#8c6723]">
              <td className="py-2 px-4 text-center">{recipe.cost}</td>
              {Array.from({ length: maxSourcesCount }, (_, sourceIndex) => {
                const source = recipe.sources && recipe.sources[sourceIndex];
                return (
                  <React.Fragment key={sourceIndex}>
                    <td className="py-2 px-4 text-center">
                      {source?.arcana || ""}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {source?.lvl || ""}
                    </td>
                    <td className="py-2 px-4 text-center hover:text-[#f2e852]">
                      {source?.name ? (
                        <Link to={`/persona-details/${source.name}`}>
                          {source.name}
                        </Link>
                      ) : (
                        ""
                      )}
                    </td>
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeTable;
