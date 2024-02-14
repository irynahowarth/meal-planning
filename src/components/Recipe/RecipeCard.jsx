import React from "react";
import Modal from "../Modal/Modal";
import { ModalDataContext } from "../Modal/ModalDataProvider";
import useToggle from "../helpers/use-toggle";

export default function RecipeCard({ recipe }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const { isOpen, toggleIsOpen, modalView, setModalView } =
    React.useContext(ModalDataContext);

  return (
    <li className="border-b p-2 flex items-center">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>
      <button
        className="ml-auto px-2 py-0.5  rounded-full border h-full"
        onClick={() => {
          toggleIsOpen();
          setModalView("addRecord");
        }}
      >
        +
      </button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleDismiss={toggleIsOpen}
          modalData={{
            name: recipe.name,
            addInfo: recipe.addInfo,
            date: "02-15-2024",
          }}
          modalView={modalView}
        />
      )}
    </li>
  );
}
