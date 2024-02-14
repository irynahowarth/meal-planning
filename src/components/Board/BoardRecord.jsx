import React from "react";

export default function BoardRecord({ meal }) {
  return (
    <div
      className="border-b p-2 flex flex-col cursor-pointer"
      onClick={() => console.log(meal.name)}
    >
      <div>{meal.name}</div>
      {meal.addInfo && <span>{meal.addInfo}</span>}
      {meal.label && (
        <span className="text-sm text-blue-700">{meal.label}</span>
      )}
    </div>
  );
}
