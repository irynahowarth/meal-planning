import React from "react";
import RecipeList from "../Recipe/RecipeList";
import ModeSwitch from "./ModeSwitch";
import RecipeGroups from "./RecipeGroups";

export default function Sidebar() {
  const [groupList, setGroupList] = React.useState([]);
  const [activeGroup, setActiveGroup] = React.useState(1);
  const [recepieList, setRecepieList] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((data) => setGroupList(data.groups));
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecepieList(data.recipes));
  }, []);
  return (
    <div className="sidebar h-screen relative flex flex-col min-w-[220px] ">
      <header className="border border-gray-200 h-[70px] flex items-center pl-5">
        <h1 className="font-extrabold">MealPlan</h1>
      </header>
      <RecipeGroups groups={groupList} setActiveGroup={setActiveGroup} />
      <RecipeList allRecipes={recepieList} activeGroup={activeGroup} />
      <ModeSwitch />
    </div>
  );
}
