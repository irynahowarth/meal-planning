import React from "react";
import Board from "./components/Board/Board";
import RecipeBoard from "./components/Recipe/RecipeBoard";
import BoardDataProvider from "./components/Board/BoardDataProvider";
import ModalDataProvider from "./components/Modal/ModalDataProvider";
import RecipeDataProvider from "./components/Recipe/RecipeDataProvider";
import "./server";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Mealplan() {
  const [isPlanning, setIsPlanning] = React.useState(false);
  return (
    <BoardDataProvider>
      <RecipeDataProvider>
        <ModalDataProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex flex-col bg-blue-50 w-full">
              <div className="top-bar flex bg-white border border-gray-200 border-l-0 h-[70px]  w-full items-center">
                <h2>Top bar</h2>
                <button
                  className="border rounded p-1 ml-auto"
                  onClick={() => setIsPlanning((prev) => !prev)}
                >
                  {isPlanning ? "Recipe Board" : "Meal Planning"}
                </button>
              </div>
              <div className="main-wrapper p-[24px]">
                <div className="board-wrapper flex gap-5">
                  {isPlanning && <Board />}
                  {!isPlanning && <RecipeBoard />}
                </div>
              </div>
            </main>
          </div>
        </ModalDataProvider>
      </RecipeDataProvider>
    </BoardDataProvider>
  );
}
