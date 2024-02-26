import React from "react";
import BoardRecord from "./BoardRecord";
import { useDroppable } from "@dnd-kit/core";

export default function BoardColumn({ viewDay, dayRecords }) {
  const mealList =
    dayRecords !== undefined
      ? dayRecords?.meals.map((meal, index) => (
          <BoardRecord key={index} meal={meal} viewDay={viewDay} />
        ))
      : null;

  const { isOver, setNodeRef } = useDroppable({ id: viewDay.valueOf() });

  return (
    <div className="py-2 bg-white" ref={setNodeRef}>
      <div>{mealList}</div>
    </div>
  );
}
