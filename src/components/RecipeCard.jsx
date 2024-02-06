import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <li className="border-b p-2">
      <div>{recipe.name}</div>
      <span>{recipe.addInfo}</span>
    </li>
  );
}
