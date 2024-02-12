import React from "react";
import Board from "./components/Board";
import RecipeList from "./components/RecipeList";
import "./server";

export default function Mealplan() {
  const [activeGroup, setActiveGroup] = React.useState(1);
  const [recepieList, setRecepieList] = React.useState([]);
  const [groupList, setGroupList] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((data) => setGroupList(data.groups));
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecepieList(data.recipes));
  }, []);

  return (
    <div className="flex">
      <div className="sidebar h-screen relative">
        <header className="border border-gray-200 h-[70px] flex items-center pl-5">
          <h1 className="font-extrabold">MealPlan</h1>
        </header>
        <div className="groups-wrapper border border-gray-200 p-5 border-t-0 border-b-0 h-5/6">
          <h2>Groups</h2>
          <ul>
            {groupList.map(({ id, title }) => (
              <li
                key={id}
                onClick={() => setActiveGroup(id)}
                className="cursor-pointer"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="switch-wrapper border border-gray-200 p-5 absolute bottom-0 left-0">
          <span>Dark mode</span>
          <button
            type="button"
            className="switch bg-white w-14 h-6 border rounded-full cursor-pointer box-content outline-offset-[6px p-0.5"
            onClick={() => console.log("switch Mode")}
          >
            <span
              className="switch-ball h-full aspect-square bg-gray-300 block rounded-full"
              style={{
                transition: "transform 300ms",
                transform: `translateX(${"year" === "year" ? "130%" : "0%"})`,
              }}
            />
          </button>
        </div>
      </div>
      <main className="flex flex-col bg-blue-50 w-full">
        <div className="top-bar flex bg-white border border-gray-200 border-l-0 h-[70px]  w-full items-center">
          <h2>Top bar</h2>
          <button className="border rounded p-1 ml-auto">+ New recipe</button>
        </div>
        <div className="main-wrapper p-[24px]">
          <div className="board-wrapper flex gap-5">
            <RecipeList allRecipes={recepieList} activeGroup={activeGroup} />
            <Board />
          </div>
        </div>
      </main>
    </div>
  );
}
