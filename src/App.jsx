import React from "react";
import mockData from "./mockData";
import RecipeCard from "./components/RecipeCard";
import Board from "./components/Board";

const data = mockData;

export default function Mealplan() {
  const [activeGroup, setActiveGroup] = React.useState(1);
  return (
    <div className="flex">
      <div className="sidebar h-screen relative">
        <header className="border border-gray-200 h-[70px] flex items-center pl-5">
          <h1 className="font-extrabold">MealPlan</h1>
        </header>
        <div className="groups-wrapper border border-gray-200 p-5 border-t-0 border-b-0 h-5/6">
          <h2>Groups</h2>
          <ul>
            {data.groups.map(({ id, title }) => (
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
            <div className="rec-list w-1/5 bg-white border rounded">
              <h2 className="text-sm font-bold p-2 border-b">Recipes list</h2>
              <ul>
                {data.recipes
                  .filter((recipe) => recipe.group.includes(activeGroup))
                  .map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                  ))}
              </ul>
            </div>
            <Board />
          </div>
        </div>
      </main>
    </div>
  );
}
