import React from "react";
import { produce } from "immer";
import useSWR from "swr";

export const RecipeDataContext = React.createContext();

const fetcher = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

function reducer(recipes, action) {
  return produce(recipes, (draftRecipes) => {
    switch (action.type) {
      case "delete-recipe": {
        draftRecipes.splice(action.recipeIndex, 1);
        break;
      }
      case "add-recipe": {
        draftRecipes.push(action.recipe);
        break;
      }
      case "edit-recipe": {
        break;
      }
      case "start-recipes": {
        action.apiRecipes.recipes.map((rec) => draftRecipes.push(rec));
        break;
      }
    }
  });
}

export default function RecipeDataProvider({ children }) {
  const [groupList, setGroupList] = React.useState([]);
  const [recipeList, dispatch] = React.useReducer(reducer, []);

  const { data: apiRecipes, error, isLoading } = useSWR(`api/recipes`, fetcher);
  const { data: apiGroups } = useSWR(`api/groups`, fetcher);

  React.useEffect(() => {
    if (typeof apiRecipes === "undefined") return;
    dispatch({
      type: "start-recipes",
      apiRecipes,
    });
  }, [apiRecipes]);

  React.useEffect(() => {
    if (typeof apiGroups === "undefined") return;
    setGroupList(apiGroups.groups);
  }, [apiGroups]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function deleteRecipe(recipe) {
    dispatch({
      type: "delete-recipe",
      recipeIndex: recipeList.indexOf(recipe),
    });
  }
  function addRecipe(recipe, recipeId) {
    const groups = recipe?.group
      ? recipe.group.split(",").map((el) => +el)
      : [];
    groups.push(1);
    dispatch({
      type: "add-recipe",
      recipe: {
        ...recipe,
        group: groups,
        id: recipeId,
      },
    });
  }
  return (
    <RecipeDataContext.Provider
      value={{ groupList, recipeList, deleteRecipe, addRecipe }}
    >
      {children}
    </RecipeDataContext.Provider>
  );
}
