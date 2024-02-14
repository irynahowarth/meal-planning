import React from "react";
import Modal from "../Modal/Modal";
import { ModalDataContext } from "../Modal/ModalDataProvider";

export default function RecipeCard({ recipe }) {
  const { toggleIsOpen, setModalView, setModalData } =
    React.useContext(ModalDataContext);

  function openModalAddRecord() {
    setModalView("addRecord");
    setModalData({
      id: recipe.id,
      name: recipe.name,
      addInfo: recipe.addInfo,
      date: new Date(Date.now()).toISOString().slice(0, 10),
    });
    toggleIsOpen();
  }

  return (
    <li className="border-b p-2 flex items-center">
      <div>
        <div>{recipe.name}</div>
        <span>{recipe.addInfo}</span>
      </div>
      <button
        className="ml-auto px-2 py-0.5  rounded-full border h-full"
        onClick={openModalAddRecord}
      >
        +
      </button>
    </li>
  );
}
