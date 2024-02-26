import React from "react";
import Board from "./components/Board/Board";
import BoardDataProvider from "./components/Board/BoardDataProvider";
import ModalDataProvider from "./components/Modal/ModalDataProvider";
import "./server";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";

function handleDragEnd(event) {
  console.log(event);
}

export default function Mealplan() {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  return (
    <BoardDataProvider>
      <ModalDataProvider>
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
          sensors={sensors}
        >
          <div className="flex">
            <Sidebar />
            <main className="flex flex-col bg-blue-50 w-full">
              <div className="top-bar flex bg-white border border-gray-200 border-l-0 h-[70px]  w-full items-center">
                <h2>Top bar</h2>
                <button className="border rounded p-1 ml-auto">
                  + New recipe
                </button>
              </div>
              <div className="main-wrapper p-[24px]">
                <div className="board-wrapper flex gap-5">
                  <Board />
                </div>
              </div>
            </main>
          </div>
        </DndContext>
      </ModalDataProvider>
    </BoardDataProvider>
  );
}
