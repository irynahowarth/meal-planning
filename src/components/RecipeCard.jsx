import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <li className="border-b p-2 flex items-center">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>
      <button
        className="ml-auto px-2 py-0.5  rounded-full border h-full"
        onClick={() => console.log(recipe.name)}
      >
        +
      </button>
    </li>
  );
}
