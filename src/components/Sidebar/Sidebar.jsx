import React from "react";
import RecipeList from "../Recipe/RecipeList";
import ModeSwitch from "./ModeSwitch";
import RecipeGroups from "./RecipeGroups";
import { RecipeDataContext } from "../Recipe/RecipeDataProvider";

export default function Sidebar() {
  const [activeGroup, setActiveGroup] = React.useState(0);
  const { groupList, recipeList } = React.useContext(RecipeDataContext);

  // add no filter item as {0: All Recipes}
  const newGroups = [{ id: 0, title: "All Recipes" }, ...groupList];

  return (
    <div className="sidebar h-screen relative flex flex-col min-w-[220px] ">
      <header className="border border-gray-200 h-[70px] flex items-center pl-5">
        <h1 className="font-extrabold">MealPlan</h1>
      </header>
      <RecipeGroups groups={newGroups} setActiveGroup={setActiveGroup} />
      <RecipeList allRecipes={recipeList} activeGroup={activeGroup} />
      <ModeSwitch />
    </div>
  );
}
