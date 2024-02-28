import React from "react";

export default function RecipeBoardCard({ title, addInfo, groups }) {
  return (
    <div className="p-3 text-sm">
      <h2 className="font-bold">{title}</h2>
      <div>{addInfo}</div>
      <div>
        Groups:
        {groups.map((group) => {
          if (+group.id === 1) return;
          return group.title;
        })}
      </div>
    </div>
  );
}
