import React from "react";
import { RecipeDataContext } from "./RecipeDataProvider";

export default function RecipeBoard() {
  const { groupList, recipeList } = React.useContext(RecipeDataContext);

  return (
    <div className="board-main bg-white border rounded">
      <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
        <button>+ Add recipe</button>
      </div>
      <div>
        <div className="grid  grid-cols-7	 leading-6 gap-px text-center border-b text-xs  font-medium text-gray-500 bg-gray-200"></div>
      </div>
    </div>
  );
}
