import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ allRecipes, activeGroup }) {
  const recipeListMarkup =
    activeGroup > 0
      ? allRecipes.filter((recipe) => recipe.group.includes(+activeGroup))
      : allRecipes;
  return (
    <div className="rec-list border ">
      <h2 className="text-sm font-bold p-2 border-b">Recipes list</h2>
      <ul>
        {recipeListMarkup.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  );
}
