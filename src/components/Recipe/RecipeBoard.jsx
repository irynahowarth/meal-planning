import React from "react";
import { RecipeDataContext } from "./RecipeDataProvider";
import RecipeBoardCard from "./RecipeBoardCard";

export default function RecipeBoard() {
  const { groupList, recipeList, deleteRecipe } =
    React.useContext(RecipeDataContext);

  return (
    <div className="board-main bg-white border rounded">
      <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
        <button>+ Add recipe</button>
      </div>
      <div>
        <div className="flex leading-6 gap-5 border-b">
          {recipeList.map((recipe) => {
            const recipeGroups = groupList.filter((group) =>
              recipe.group.includes(+group.id)
            );
            return (
              <RecipeBoardCard
                key={recipe.id}
                title={recipe.name}
                addInfo={recipe.addInfo}
                groups={recipeGroups}
                delRecipe={deleteRecipe}
                rec={recipe}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
