import React from "react";

export default function BoardColumn({ viewDay, dayRecords }) {
  const mealList =
    dayRecords !== undefined
      ? dayRecords?.meals.map((meal, index) => (
          <li className="border-b p-2 flex flex-col" key={index}>
            <div>{meal.name}</div>
            {meal.addInfo && <span>{meal.addInfo}</span>}
            {meal.label && (
              <span className="text-sm text-blue-700">{meal.label}</span>
            )}
          </li>
        ))
      : null;

  return (
    <div className="py-2 bg-white">
      <ul>{mealList}</ul>
    </div>
  );
}
