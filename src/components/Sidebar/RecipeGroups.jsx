import React from "react";

export default function RecipeGroups({ groups, setActiveGroup }) {
  return (
    <div className="groups-wrapper border border-gray-200 border-t-0 border-b-0">
      <h2 className="text-sm font-bold p-2 border-b">Groups</h2>
      <ul className="p-5">
        {groups.map(({ id, title }) => (
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
  );
}
