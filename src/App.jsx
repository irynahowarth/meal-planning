import React from "react";

export default function Mealplan() {
  return (
    <div className="flex">
      <div className="sidebar h-screen relative">
        <header className="border border-gray-200 h-[70px] flex items-center pl-5">
          <h1 className="font-extrabold">MealPlan</h1>
        </header>
        <div className="category-wrapper border border-gray-200 p-5 border-t-0 border-b-0 h-5/6">
          <h2>Category</h2>
          <ul>
            <li>All meals</li>
            <li>Kids Fav</li>
            <li>Family meals</li>
            <li>Adults meals</li>
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
                <li className="border-b p-2">
                  <div>Chili con carne</div>
                  <span>Rice+Garlic bread</span>
                </li>
                <li className="border-b p-2">
                  <div>Massaman Curry</div>
                  <span>Beef+Rice</span>
                </li>
                <li className="border-b p-2">
                  <div>Chicken Fajitas</div>
                  <span>Veg+Wraps</span>
                </li>
                <li className="border-b p-2">
                  <div>Pasta Bolognese</div>
                  <span>Pasta</span>
                </li>
                <li className="border-0 p-2">
                  <div>Pesto Chicken Pasta</div>
                  <span>Pasta</span>
                </li>
              </ul>
            </div>
            <div className="board-main w-4/5 bg-white border rounded">
              <div className="board-nav bg-white border-b p-2 text-sm flex gap-3 justify-center">
                <h2 className="text-sm font-bold p-2">February 2024</h2>
                <button className="border rounded p-1 px-3">Today</button>
                <button className="border rounded p-1 px-3">Prev</button>
                <button className="border rounded p-1 px-3">Next</button>
              </div>
              <div>
                <div className="grid  grid-cols-7	 leading-6 gap-px text-center border-b text-xs  font-medium text-gray-500 bg-gray-200">
                  <div className="py-2 bg-white">Mon 5</div>
                  <div className="py-2 bg-white">Tue 6</div>
                  <div className="py-2 bg-white">Wed 7</div>
                  <div className="py-2 bg-white">Thu 8</div>
                  <div className="py-2 bg-white">Fri 9</div>
                  <div className="py-2 bg-white">Sat 10</div>
                  <div className="py-2 bg-white">Sun 11</div>
                </div>
              </div>
              <div className="grid  grid-cols-7	gap-px h-full bg-gray-200">
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
                <div className="py-2 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
