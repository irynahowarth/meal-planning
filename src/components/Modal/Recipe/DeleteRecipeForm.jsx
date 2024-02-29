import React from "react";
import { RecipeDataContext } from "../../Recipe/RecipeDataProvider";

export default function DeleteRecipeForm({
  recipe,
  afterDelete,
  handlerCancel,
}) {
  const { deleteRecipe } = React.useContext(RecipeDataContext);

  function handlerDelete() {
    deleteRecipe(recipe);
    afterDelete();
  }
  return (
    <>
      <div className="mt-4">
        {`Are you sure you want to delete ${recipe.name}? This cannot be reversed after.`}
      </div>
      <div className="text-left mt-4 space-x-4">
        <button
          className="inline-flex justify-center items-center px-4 py-2  text-sm font-medium text-gray-400 hover:text-gray-500 rounded"
          onClick={handlerCancel}
        >
          Cancel
        </button>
        <button
          className="inline-flex justify-center items-center px-4 py-2 bg-red-500 text-sm font-medium text-white rounded hover:bg-red-600"
          onClick={handlerDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
}
