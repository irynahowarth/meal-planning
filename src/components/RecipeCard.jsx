import React from "react";
import Modal from "./Modal/Modal";
import useToggle from "./helpers/use-toggle";

export default function RecipeCard({ recipe }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <li className="border-b p-2 flex items-center">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>
      <button
        className="ml-auto px-2 py-0.5  rounded-full border h-full"
        onClick={toggleIsModalOpen}
      >
        +
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleDismiss={() => toggleIsModalOpen(false)}
        />
      )}
    </li>
  );
}
