import React from "react";
import BoardRecord from "./BoardRecord";

export default function BoardColumn({ viewDay, dayRecords }) {
  const mealList =
    dayRecords !== undefined
      ? dayRecords?.meals.map((meal, index) => (
          <BoardRecord key={index} meal={meal} viewDay={viewDay} />
        ))
      : null;

  return (
    <div className="py-2 bg-white">
      <div>{mealList}</div>
    </div>
  );
}
