import React from "react";
import { RecipeDataContext } from "./RecipeDataProvider";
import RecipeBoardCard from "./RecipeBoardCard";
import ModalAlt from "../Modal/ModalAlt";
import AddRecipeForm from "../Modal/Recipe/AddRecipeForm";

export default function RecipeBoard() {
  const { groupList, recipeList, deleteRecipe } =
    React.useContext(RecipeDataContext);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="board-main bg-white border rounded">
      <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
        <ModalAlt open={open} onOpenChange={setOpen}>
          <ModalAlt.Button className="rounded p-2 hover:bg-gray-200">
            + Add recipe
          </ModalAlt.Button>
          <ModalAlt.Content title="Add New Recipe">
            <AddRecipeForm afterSave={() => setOpen(false)} />
          </ModalAlt.Content>
        </ModalAlt>
      </div>
      <div>
        <div className="flex flex-wrap leading-6 gap-5 border-b">
          {recipeList.map((recipe) => {
            const recipeGroups = groupList.filter((group) =>
              recipe.group.includes(+group.id)
            );
            return (
              <RecipeBoardCard
                key={recipe.id}
                name={recipe.name}
                addInfo={recipe.addInfo}
                groups={recipeGroups}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
